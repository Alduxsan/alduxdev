window.addEventListener("DOMContentLoaded", lazy_show);

let tab_content = document.getElementsByClassName("tab");
let columns = document.getElementsByClassName("column");

function change_closeIcon_visibility(element) {
  element.parentElement.classList.replace("show_content", "hide_content");
  for (header = 0; header < columns.length; header++) {
    columns[header].classList.remove("selectedTab");
  }
}

function openGrid(tabContent, clickedTab) {
  let tab;
  let header;
  for (tab = 0; tab < tab_content.length; tab++) {
    tab_content[tab].classList.add("hide_content");
    tab_content[tab].classList.remove("show_content");
  }
  for (header = 0; header < columns.length; header++) {
    columns[header].classList.remove("selectedTab");
  }
  document
    .getElementById(tabContent)
    .classList.replace("hide_content", "show_content");
  clickedTab.classList.toggle("selectedTab");
}

function lazy_show() {
  ``;
  const options = {
    rootMargin: "0px 0px -200px 0px",
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      } else {
        return;
      }
    });
  }, options);

  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    observer.observe(section);
  });

  const links = document.querySelectorAll(".section_link");
  links.forEach((link) => {
    observer.observe(link);
  });
}
