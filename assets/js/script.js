import SmoothScroll from "./classes/SmoothScroll.js";
import TermsPolitics from './classes/TermsPolitics.js'
import ListItems from "../js/classes/ListItems.js";
import data from "../../assets/js/data/dataLinks.js";


const rootHtml = document.documentElement
const toggleTheme = document.getElementById("toggleTheme");

new SmoothScroll("a[href^='#']");
new TermsPolitics()
new ListItems(data);



function changeTheme() {
    const currentTheme = rootHtml.getAttribute("data-theme");

    currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark")

    toggleTheme.classList.toggle("bi-sun")
    toggleTheme.classList.toggle("bi-moon-stars")
    console.log('log change');

}

toggleTheme.addEventListener("click", changeTheme);
