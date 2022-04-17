// Date in the footer
function currentYear() {
    const date = new Date();
    const year = `${date.getFullYear()}`;
    return year;
}
document.getElementById("year").innerHTML = currentYear();

// show/hide mobile nav
let toggleIcon = document.getElementById("icon");
let mobileNav = document.querySelector('.mobile-nav');

function toggleNav(){
    const style = mobileNav.style.display === "flex" ? "none" : "flex";
    mobileNav.style.display = style;
    
    toggleIcon.classList.toggle('bi-list');
    toggleIcon.classList.toggle('bi-x');
};