// highlight menu item based on scroll position
const CURRENT_PAGE_ITEM_CLASS = "current-page-item";

function highlightMenuItem() {
  // The anchor tags position the window slightly above
  const workY = document.getElementById("work-samples").offsetTop - 20;
  const contactY = document.getElementById("contact").offsetTop - 20;

  const currentPageItem = document.getElementsByClassName(CURRENT_PAGE_ITEM_CLASS)[0];
  if (window.scrollY >= contactY) {
    if (currentPageItem.id !== "contact-link") {
      currentPageItem.classList.remove(CURRENT_PAGE_ITEM_CLASS);
      document.getElementById("contact-link").classList.add(CURRENT_PAGE_ITEM_CLASS);
    }
  } else if (window.scrollY >= workY) {
    if (currentPageItem.id !== "work-samples-link") {
      currentPageItem.classList.remove(CURRENT_PAGE_ITEM_CLASS);
      document.getElementById("work-samples-link").classList.add(CURRENT_PAGE_ITEM_CLASS);
    }
  } else {
    currentPageItem.classList.remove(CURRENT_PAGE_ITEM_CLASS);
    document.getElementById("intro-link").classList.add(CURRENT_PAGE_ITEM_CLASS);
  }
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}