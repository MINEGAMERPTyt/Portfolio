(function () {
  const publicKey = "FnHEnU0kRL0N_FVbP";
  const serviceID = "service_udcg97n";
  const templateID = "template_r2cdoff";

  // Initialize EmailJS with the public key
  emailjs.init(publicKey);

  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");
  let timeoutId = null; // Stores the timeout ID to allow cancellation

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Cancel any previous timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }

    // Clear previous feedback
    feedback.className = "form-feedback";
    feedback.style.display = "none";
    feedback.textContent = "";

    // Add loading class to body
    document.body.classList.add("loading");

    // Show loading state on button
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> A enviar...';
    btn.disabled = true;

    // Collect form data
    const formData = new FormData(form);
    const data = {
      user_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    // Send via EmailJS
    emailjs
      .send(serviceID, templateID, data)
      .then(() => {
        feedback.className = "form-feedback success";
        feedback.style.display = "flex";
        feedback.innerHTML =
          '<i class="fa-regular fa-circle-check"></i> Mensagem enviada com sucesso! Entrarei em contacto brevemente.';
        form.reset();

        // Schedule message removal after 5 seconds
        timeoutId = setTimeout(() => {
          feedback.style.display = "none";
          timeoutId = null;
        }, 5000);
      })
      .catch((error) => {
        console.error("Erro ao enviar:", error);
        feedback.className = "form-feedback error";
        feedback.style.display = "flex";
        feedback.innerHTML =
          '<i class="fa-regular fa-circle-xmark"></i> Ocorreu um erro ao enviar. Tenta novamente mais tarde.';

        // Schedule message removal after 5 seconds
        timeoutId = setTimeout(() => {
          feedback.style.display = "none";
          timeoutId = null;
        }, 5000);
      })
      .finally(() => {
        // Restore button
        btn.innerHTML = originalText;
        btn.disabled = false;
        // Remove loading class from body
        document.body.classList.remove('loading');
      });
  });
})();