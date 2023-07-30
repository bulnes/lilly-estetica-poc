let navLinks = "";

function readTextFile(file) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      navLinks = JSON.parse(rawFile.responseText).linksNavBar;
      console.log(navLinks);
    }
  };
  rawFile.send(null);
}

readTextFile("/catalogo-lilly/resources/js/data.json");

const linksNavBarContainer = document.querySelector(".links-nav-bar-container");

const menuHamburguerButton = document.querySelector(".menu-icon");

const closeButton = document.querySelector(".close-button");

const closeDiv = document.querySelector(".close-menu");

closeButton.addEventListener("click", () => {
  linksNavBarContainer.style.animationName = "coverNav";
  setTimeout(() => {
    linksNavBarContainer.style.display = "none";
  }, 400);
});

if (closeDiv) {
  closeDiv.addEventListener("click", () => {
    linksNavBarContainer.style.animationName = "coverNav";
    setTimeout(() => {
      linksNavBarContainer.style.display = "none";
    }, 400);
  });
}

const downArrowButton = document.querySelectorAll(".down-arrow-button");

for (let i = 0; i < downArrowButton.length; i += 1) {
  downArrowButton[i].addEventListener("click", (event) => {
    const displaySubLinksNavBarContainerList =
      event.target.parentNode.parentNode.children[1].style.display;
    if (displaySubLinksNavBarContainerList === "block") {
      event.target.style.animationName = "arrowButtonDown";
      event.target.parentNode.parentNode.children[1].style.display = "none";
    } else {
      event.target.style.animationName = "arrowButtonUp";
      event.target.parentNode.parentNode.children[1].style.display = "block";
    }
  });
}

const linksNavBarContainerListItens = document.querySelectorAll(
  ".links-nav-bar-container-list-item"
);

for (let i = 0; i < linksNavBarContainerListItens.length; i += 1) {
  linksNavBarContainerListItens[i].children[0].children[0].addEventListener(
    "click",
    (event) => {
      const displaySubLinksNavBarContainerList =
        event.target.parentNode.parentNode.children[1].style.display;
      if (displaySubLinksNavBarContainerList === "block") {
        console.log(event.target.children[1]);
        event.target.parentNode.children[1].style.animationName =
          "arrowButtonDown";
        event.target.parentNode.parentNode.children[1].style.display = "none";
      } else {
        event.target.parentNode.children[1].style.animationName =
          "arrowButtonUp";
        event.target.parentNode.parentNode.children[1].style.display = "block";
      }
    }
  );
}

const subLinksNavBar = document.getElementsByClassName(
  "sub-links-nav-bar-container-list-item"
);

for (let i = 0; i < subLinksNavBar.length; i += 1) {
  subLinksNavBar[i].addEventListener("click", (event) => {
    const id = event.target.getAttribute("id");
    console.log(event.target);
    localStorage.setItem("idProduct", event.target.getAttribute("id"));

    window.location.href = "/catalogo-lilly/product.html";
  });
}

//centralizando drodown de cada item na barra de navegação

const windowWidth = window.innerWidth;

function linksStyleOnClick() {
  if (windowWidth > 800) {
    function disableLinks() {
      for (let i = 0; i < linksNavBarContainerListItens.length; i += 1) {
        linksNavBarContainerListItens[
          i
        ].children[0].children[0].style.fontFamily = "Brandon-regular";
        linksNavBarContainerListItens[i].children[1].style.display = "none";
      }
    }

    for (let i = 0; i < linksNavBarContainerListItens.length; i += 1) {
      linksNavBarContainerListItens[i].children[0].children[0].addEventListener(
        "click",
        (event) => {
          if (event.target.style.fontFamily == "Brandon-black") {
            event.target.style.fontFamily = "Brandon-regular";
          } else {
            disableLinks();
            event.target.style.fontFamily = "Brandon-black";
            event.target.parentNode.parentNode.children[1].style.display =
              "block";
          }
        }
      );
    }
  }
}

linksStyleOnClick();

function listMenuHome() {
  const listItemsMenu = document.querySelectorAll(".list-item-menu");

  const linksNavBarContainer = document.querySelector(
    ".links-nav-bar-container"
  );

  const linksNavBarContainerListItens = document.querySelectorAll(
    ".links-nav-bar-container-list-item"
  );

  for (let i = 0; i < listItemsMenu.length; i += 1) {
    listItemsMenu[i].addEventListener("click", (event) => {
      linksNavBarContainer.style.display = "block";
      linksNavBarContainer.style.animationName = "displayNav";
      linksNavBarContainer.style.left = "-100%";
      for (let i = 0; i < linksNavBarContainerListItens.length; i += 1) {
        linksNavBarContainerListItens[
          i
        ].children[0].children[1].style.animationName = "arrowButtonDown";
        linksNavBarContainerListItens[i].children[1].style.display = "none";
        if (
          event.target.innerText ===
          linksNavBarContainerListItens[i].children[0].children[0].innerText
        ) {
          linksNavBarContainerListItens[
            i
          ].children[0].children[1].style.animationName = "arrowButtonUp";
          linksNavBarContainerListItens[i].children[1].style.display = "block";
        }
      }
    });
  }
}

if (window.innerWidth > 992) {
  const optDesk = document.querySelectorAll(
    ".sub-links-nav-bar-container-list"
  );

  document.documentElement.onclick = function (event) {
    if (
      !event.target.className.includes("item-menu") &&
      event.target.className !== optDesk.className
    ) {
      for (let i = 0; i < optDesk.length; i += 1) {
        if (event.target !== optDesk[i]) {
          optDesk[i].style.display = "none";
        }
      }
    }
  };
}

listMenuHome();
