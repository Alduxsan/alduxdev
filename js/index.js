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

function toggle_project_info(info_element, button) {
  let project_info = document.getElementById(info_element);
  console.log(info_element, el);
  if (project_info.classList.contains("close_project_info")) {
    button.classList.add("rotate180");
    button.querySelector("p").style.transform = "rotate(180deg)";
    return project_info.classList.replace(
      "close_project_info",
      "expand_project_info"
    );
  }
  button.classList.remove("rotate180");
  button.querySelector("p").style.transform = "rotate(360deg)";
  return project_info.classList.replace(
    "expand_project_info",
    "close_project_info"
  );
}
