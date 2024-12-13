// document.addEventListener('DOMContentLoaded', () => {
//     const burgerToggle = document.querySelector('.header__burger');
//     const headerMenu = document.querySelector('.header__menu');
//     const header = document.querySelector('.header');
//     const overlay = document.querySelector('.overlay');
//     const headerLink = document.querySelectorAll('.header__link');
//     const body = document.querySelector("body");
//     if (burgerToggle && headerMenu) {
//         burgerToggle.addEventListener('click', () => {
//             headerMenu.classList.toggle('active'); // Переключаем класс активного состояния меню
//             burgerToggle.classList.toggle('active'); // Переключаем класс активного состояния бургер-кнопки
//             header.classList.toggle('active');
//             overlay.classList.toggle('active');
//             headerLink.classList.toggle('active');
//         });
//     } else {
//         console.error("Элементы не найдены! Проверьте HTML.");
//     }
// });

const menuBtn = document.querySelector(".header__burger");
const navigation = document.querySelector(".header__menu");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const headerLinks = document.querySelectorAll(".header__link");
const body = document.querySelector("body");
const navigationList = document.querySelector(".header__menu-list");
const headerWrapper = document.querySelector(".header__wrapper");
const cover = document.querySelector(".cover");

let isMenuOpen = false;

function showMenu() {
  menuBtn.classList.add("active");
  header.classList.add("active");
  navigation.classList.add("active");
  overlay.classList.add("active");
  body.classList.add("stop-vertical-scroll");
headerWrapper.classList.add("active");
cover.classList.add("active");
  headerLinks.forEach((link) => {
    link.classList.add("active");
  });
  isMenuOpen = true;
}

function hideMenu() {
  menuBtn.classList.remove("active");
  header.classList.remove("active");
  navigation.classList.remove("active");
  overlay.classList.remove("active");
  body.classList.remove("stop-vertical-scroll");
  headerWrapper.classList.remove("active");
  cover.classList.remove("active");
  headerLinks.forEach((link) => link.classList.remove("active"));
  isMenuOpen = false;
}
function toggleMenu() {
  isMenuOpen ? hideMenu() : showMenu();
}
function closeMenuByLink(e) {
  if (e.target.tagName === "A") {
    hideMenu();
  }
}
menuBtn.addEventListener("click", toggleMenu);
overlay.addEventListener("click", hideMenu);
navigationList.addEventListener("click", closeMenuByLink);
