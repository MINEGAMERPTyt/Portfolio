(function () {
  const publicKey = "FnHEnU0kRL0N_FVbP";
  const serviceID = "service_udcg97n";
  const templateID = "template_r2cdoff";

  // Inicializa EmailJS com a chave pública
  emailjs.init(publicKey);

  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Limpa feedback anterior
    feedback.className = "form-feedback";
    feedback.style.display = "none";
    feedback.textContent = "";

    // Adiciona a classe de carregamento ao body
    document.body.classList.add("loading");

    // Mostra estado de carregamento no botão
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> A enviar...';
    btn.disabled = true;

    // Recolhe os dados do formulário
    const formData = new FormData(form);
    const data = {
      user_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    // Envia via EmailJS
    emailjs
      .send(serviceID, templateID, data)
      .then(() => {
        feedback.className = "form-feedback success";
        feedback.style.display = "flex";
        feedback.innerHTML =
          '<i class="fa-regular fa-circle-check"></i> Mensagem enviada com sucesso! Entrarei em contacto brevemente.';
        form.reset();
      })
      .catch((error) => {
        feedback.className = "form-feedback error";
        feedback.style.display = "flex";
        feedback.innerHTML =
          '<i class="fa-regular fa-circle-xmark"></i> Ocorreu um erro ao enviar. Tenta novamente mais tarde.';
      })
      .finally(() => {
        // Restaura o botão
        btn.innerHTML = originalText;
        btn.disabled = false;
        // Remove a classe de carregamento do body
        document.body.classList.remove('loading');
      });
  });
})();