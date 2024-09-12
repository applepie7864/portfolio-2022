// selections
const experience = document.querySelector(".experience");
const projectsContainer = document.querySelector(".projects-container");
const menu = document.getElementsByClassName("menu")[0];
const navList = document.getElementsByClassName("nav-list")[0];
const nav = document.querySelector("nav");
const blur = document.getElementById("blur");
const close = document.getElementsByClassName("remove-menu")[0];
const side = document.getElementsByClassName("side-bar")[0];
const navLink = document.querySelectorAll(".nav-link");
const sun = document.getElementById("moon");
const moon = document.getElementById("sun");
const scrollElements = document.querySelectorAll(".scroll");
const projects = document.querySelectorAll(".project-container");
// loading animation
function loader() {
    t = setTimeout(display, 4200);
}
// set initial experience margin and width
function display() {
    document.getElementById("load").style.display = "none";
    document.getElementById("reveal").style.display = "block";
    if (window.innerWidth > 850) {
        var leftMargin = projectsContainer.getBoundingClientRect().left + window.scrollX;
        experience.style.marginLeft = leftMargin + "px";
    } else {
        experience.style.marginLeft = "0px";
    }
    experience.style.width = window.innerWidth - leftMargin + "px";
}
// menu functionality
menu.addEventListener("click", () => {
    close.style.display = "block";
    navList.classList.toggle("show");
    blur.style.filter = "blur(0.2rem)";
});
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    close.style.display = "none";
    navList.classList.remove("show");
    blur.style.filter = "none";
}));
close.addEventListener("click", () => {
    close.style.display = "none";
    navList.classList.remove("show");
    blur.style.filter = "blur(0rem)";
});
// menu and experience margin and width adjustment
function handleResize() {
    const windowWidth = window.innerWidth;
    if (windowWidth > 850) {
        var leftMargin = projectsContainer.getBoundingClientRect().left + window.scrollX;
        experience.style.marginLeft = leftMargin + "px";
        experience.style.width = window.innerWidth - leftMargin + "px";
        navList.style.transition = "none";
        close.style.display = "none";
        navList.classList.remove("show");
        blur.style.filter = "blur(0rem)";
    } else {
        experience.style.marginLeft = "0px";
        navList.style.transition = "transform 0.3s ease-in-out";
        experience.style.width = window.innerWidth + "px";
    }
}
window.addEventListener('resize', handleResize);
handleResize();
// light + dark mode function
sun.onclick = function() {
    document.body.classList.toggle("dark-mode");
    sun.style.display = "none";
    moon.style.display = "flex";
}
moon.onclick = function() {
    document.body.classList.toggle("dark-mode");
    moon.style.display = "none";
    sun.style.display = "flex";
}
// scrolling animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('display-element');
        }
    })
})
scrollElements.forEach((elem) => observer.observe(elem));
// projects hover timings
const numProjects = 3;
for (let i = 0; i < numProjects; i++) {
    projects[i].addEventListener("mouseover", () => {
        projects.forEach((project) => {
            console.log(project.style.transition);
        })
    })
}
