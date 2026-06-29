
AOS.init({
        offset:100,
        duration:1000,
    });

    function resetFormAfterSubmit(e) {
    setTimeout(() => {
        e.target.reset();  // Clears all form fields after submission
    }, 1000); // Delay to allow Formspree to process
}
//hamburger ke liye

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".menu");
const menuIcon = document.querySelector(".menu-toggle i");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
    }else{
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }
});

const menuItems = document.querySelectorAll(".menu a");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    });
});