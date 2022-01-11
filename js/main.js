const elSiteHeaderToggler = document.querySelector(".site-header__toggler");
const elSitenav = document.querySelector(".sitenav");
elSiteHeaderToggler.addEventListener("click", function () {
  elSitenav.classList.toggle("sitenav--open");
});
