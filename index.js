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