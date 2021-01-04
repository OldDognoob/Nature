/*--------The show menu---------*/
// We creating a variable called showMenu that is needs to have a toggle id and a nav id.
// both toggle and nav they take the getElementById() method. The reason is this method returns the element
// that has the current id attribute with the specific value.It is also know us the manipulate method if you
// want to get info from an element on our document.
// in the return it gives us null if there are no elements with the specific id  we called later
// however, we need to know that id needs to be unique. If there is more than one element with the specific id
// then our method returns the first element in the code.
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
  // next step we are going to validate that our variables exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      //console.log("click");
      // adding the show-menu class with the nav_menu class
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*------------Scroll----------------*/
// the scrollY property we are using here returns the number of pixels
//that the document is currently scrolled vertically.
function scrollHeader() {
  const nav = document.getElementById("header");
  //When the property is greater than 200 viewport height, add to the header tag
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  // When the property is greater than 560 viewport height, added to the a tag
  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

/*-----------------Dark/Light functionality-------------------- */
// create a variables const of themeButton and add the method getElementById to get the info from our document
const themeButton = document.getElementById("theme-button");
// create variable darkThem
const darkTheme = "dark-theme";
// create variable iconTheme
const iconTheme = "bx-sun";

//we are using the localStorage method to stored and passed the key name
// that will return the key value we are hopping or in the end null
// if the key is not there.
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

//at this point we are validate the interface of dark and light functionality
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

// if the user choose a topic then:
if (selectedTheme) {
  // If the validation is correct,then we ask what to know if can activate or deactivate the dark functionality
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}
// if we want to activate or deactivate the dark functionality
themeButton.addEventListener("click", () => {
  // adding or removing the moon
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // we use the storage to save the action our current user choose to do
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*-----------------Active scroll-------------------*/
// we creating a variable called sections that it will use a method called querySelectorAll
// this method presents us a list of elements match whose match the specific group of selectors
// on which we appoint this method.
// grabs all anchor elements with an id attribute set
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  // the use of pageXOffset or pageYOffset property gives us the document scrolled position
  // from the upper left corner of the window.
  // However, the pageXOffset is for horizontal pixels.
  // here we getting the current scroll position
  const scrollY = window.pageAOffset;
  // we looping through sections to get height, top and id values for each
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    // if the current scroll position enters the space where current section on screen is,
    // add .active class to corresponding navigation link, else remove it.
    // to identify which link needs an active class, we using sectionId variable we are
    // getting while looping through sections as an selector
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*-----------------Scroll Animation--------------------*/
// the ScrollReveal is a js animation library that gives us the ability to add some animations 
// to our pages. We are able to make any HTML element to fade from any direction, distance, duration or style.
// here we adding the code bellow to initialize the library
const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 2000,
  reset: true
});
// we are including a js object that matches the name of our ScrollReveal
// in order to adjust functionality with the keywords we are using in our documentation
sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .menu__content, .contact__data, 
            .contact__button, .footer__content`{
              // we are passing a sequence interval in our method, in milliseconds
    interval: 200
})