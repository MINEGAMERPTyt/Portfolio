const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

const projects = [
  {
    title: "VOIDZONE",
    file: "VOIDZONE.exe",
    type: "Game",
    icon: "fa-solid fa-gamepad",
    image: "assets/images/projects/voidzone.png",
    description:
      "PAP desenvolvida em Godot Engine. FPS de ficção científica inspirado em Halo, Titanfall e Call of Duty Infinite Warfare.",
    tech: [
      {
        icon: "devicon-godot-plain",
        name: "Godot",
      },
      {
        icon: "fa-solid fa-code",
        name: "GDScript",
      },
      {
        icon: "devicon-blender-original",
        name: "Blender",
      },
      {
        icon: "devicon-git-plain",
        name: "Git",
      },
    ],
    github: "#",
  },

  {
    title: "Agência de Viagens",
    file: "AgenciaViagens.exe",
    type: "Desktop App",
    icon: "fa-solid fa-desktop",
    image: "assets/images/projects/agencia.png",
    description: "Aplicação Windows Forms desenvolvida em C# e SQL Server.",
    tech: [
      {
        icon: "devicon-csharp-plain",
        name: "C#",
      },
      {
        icon: "devicon-dotnetcore-plain",
        name: ".NET",
      },
      {
        icon: "devicon-microsoftsqlserver-plain",
        name: "SQL Server",
      },
    ],
    github: "#",
  },

  {
    title: "Windows Server",
    file: "Tutorial.mp4",
    type: "Video Tutorial",
    icon: "fa-solid fa-server",
    video: "https://www.youtube.com/embed/UzE1CmlUmQg?si=UEcP79MaZybSiweR",
    description:
      "Tutorial completo de instalação e configuração de Windows Server.",
    tech: [
      {
        icon: "devicon-windows11-original",
        name: "Windows Server",
      },
      {
        icon: "fa-solid fa-network-wired",
        name: "DNS",
      },
      {
        icon: "fa-solid fa-users-gear",
        name: "Active Directory",
      },
    ],
    github: null,
  },

  {
    title: "Gestão de Filmes",
    file: "GestaoFilmes",
    type: "Website",
    icon: "fa-solid fa-globe",
    image: "assets/images/projects/filmes.png",
    description: "Aplicação web desenvolvida em PHP e MySQL.",
    tech: [
      {
        icon: "devicon-php-plain",
        name: "PHP",
      },
      {
        icon: "devicon-mysql-plain",
        name: "MySQL",
      },
      {
        icon: "devicon-html5-plain",
        name: "HTML",
      },
      {
        icon: "devicon-css3-plain",
        name: "CSS",
      },
    ],
    github: "#",
  },
];

const image = document.getElementById("project-image");
const video = document.getElementById("project-video");
const description = document.getElementById("project-description");
const tech = document.getElementById("project-tech");
const github = document.getElementById("github-btn");
const badge = document.getElementById("project-type");
const windowTitle = document.getElementById("window-title");

function loadProject(project) {
  description.textContent = project.description;

  badge.innerHTML = `
        <i class="${project.icon}"></i>
        ${project.type}
    `;

  windowTitle.textContent = project.file;

  tech.innerHTML = "";

  project.tech.forEach((item) => {
    const span = document.createElement("span");

    span.innerHTML = `
            <i class="${item.icon}"></i>
            ${item.name}
        `;

    tech.appendChild(span);
  });

  if (project.video) {
    image.style.display = "none";

    video.style.display = "block";

    video.src = project.video;
  } else {
    video.style.display = "none";

    video.src = "";

    image.style.display = "block";

    image.src = project.image;

    image.alt = project.title;
  }

  if (project.github) {
    github.style.display = "inline-flex";

    github.href = project.github;
  } else {
    github.style.display = "none";
  }
}

const buttons = document.querySelectorAll(".project-item");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");

    loadProject(projects[index]);
  });
});

loadProject(projects[0]);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(!entry.isIntersecting) return;

        entry.target.classList.add("show");

    });

},{
    threshold:0.15
});

document.querySelectorAll(
    ".reveal, .from-left, .from-right"
).forEach(el=>observer.observe(el));

const skillCards = document.querySelectorAll(".skill-card");

const skillsObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        skillCards.forEach((card,index)=>{

            setTimeout(()=>{

                card.classList.add("show");

            },index*120);

        });

    });

},{
    threshold:.2
});

skillCards.forEach(card=>{

    skillsObserver.observe(card);

});