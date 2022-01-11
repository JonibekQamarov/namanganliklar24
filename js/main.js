var elSiteHeaderToggler = document.querySelector(".site-header__toggler");
var elSitenav = document.querySelector(".sitenav");
elSiteHeaderToggler.addEventListener("click", function () {
  elSitenav.classList.toggle("sitenav--open");
});
