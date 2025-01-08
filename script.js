document.addEventListener("DOMContentLoaded", function (event) {
  const engagement = document.getElementById("serviceOne");
  const serviceBox = document.getElementsByClassName("serviceBox");
  const toggleMenu = document.getElementById("toggleMenu");
  const collMenu = document.getElementById("collMenu");
  const logo = document.getElementById("collLogo");

  console.log("loaded");

  window.addEventListener("scroll", function () {
    var navi = document.querySelector(".header");

    if (this.window.scrollY > 0) {
      navi.className += " scrolledHeader";
    } else {
      console.log("reached top");
      navi.classList.remove("scrolledHeader");
    }
  });

  for (i = 0; i < serviceBox.length; i++) {
    serviceBox[i].addEventListener("touchstart", function () {
      this.classname = ".hover";
      console.log("touchstart");
    });
  }

  toggleMenu.addEventListener("change", function (event) {
    if (toggleMenu.checked) {
      collMenu.style.display = "block";
      collLogo.style.display = "none";
      console.log("checked");
    } else {
      collMenu.style.display = "none";
      collLogo.style.display = "block";
      console.log("unchecked");
    }
  });
});

/* open/close menu quando clicar no icone */
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");
console.log(toggle);
for (const element of toggle) {
  element.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

/* esconder o menu quando clicar em um item dele */
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
}
