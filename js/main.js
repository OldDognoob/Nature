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
function scrollHeader(){
    const nav = document.getElementById('header')
    //When the property is greater than 200 viewport height, add to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the property is greater than 560 viewport height, added to the a tag 
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*-----------------Dark/Light functionality-------------------- */
// create a variables const of themeButton and add the method getElementById to get the info from our document
const themeButton = document.getElementById('theme-button')
// create variable darkThem
const darkTheme = 'dark-theme'
// create variable iconTheme
const iconTheme = 'bx-sun'

//we are using the localStorage method to stored and passed the key name 
// that will return the key value we are hopping or in the end null
// if the key is not there.
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//at this point we are validate the interface of dark and light functionality
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// if the user choose a topic then:
if (selectedTheme) {
    // If the validation is correct,then we ask what to know if can activate or deactivate the dark functionality
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
  }
// if we want to activate or deactivate the dark functionality 
themeButton.addEventListener('click', () => {
    // adding or removing the moon
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
   // we use the storage to save the action our current user choose to do
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*-----------------Active scroll-------------------*/
// we creating a variable called sections that it will use a method called querySelectorAll
// this method presents us a list of elements match whose match the specific group of selectors
// on which we appoint this method.
// grabs all anchor elements with an id attribute set
const sections=document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageAOffset
    
}