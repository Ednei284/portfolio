class SmoothScroll {
  constructor(links) {
    this.linksElements = document.querySelectorAll(links);
    this.addClickEvent();
  }
  handleClick(e) {
    e.preventDefault()
    const href = e.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    window.scrollTo({
      top: section.offsetTop - (window.innerHeight - section.clientHeight) / 2,
      behavior: "smooth",
    });
  }
  addClickEvent() {
    this.linksElements.forEach((link) => {
      link.addEventListener("click", this.handleClick);
    });
  }
}
export default SmoothScroll