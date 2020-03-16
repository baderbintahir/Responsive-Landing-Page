/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


/**
 * Define Global Variables
 * 
*/

const menu = ['Home', 'Section 1', 'Section 2', 'Section 3'];


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function point(){
    const anchors = document.querySelectorAll('a');
    const anchorsArr = Array.from(anchors);

    anchorsArr.forEach(el => {

        el.addEventListener('mouseenter', event => {
            event.target.style.textDecoration = 'underline';
        });

        el.addEventListener('mouseleave', event => {
            event.target.style.textDecoration = 'none';
        });
    });
}

function hideNavbar(){

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector('.navbar__menu').style.top = "0";
            // console.log(prevScrollpos);
        } else {
                document.querySelector('.navbar__menu').style.top = "0";
                document.querySelector('html').addEventListener('mousemove', () => {
                    document.querySelector('.navbar__menu').style.top = "0";
                });

                setTimeout(() => {
                    document.querySelector('.navbar__menu').style.top = "-50px";
                }, 1000);
        }
        prevScrollpos = currentScrollPos;
    }
    
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav(menueEntries){

    for (let menueEntry of menueEntries) {
        const ul = document.getElementById("navbar__list");
        const navListElement = document.createElement('li');
        const navElement = document.createElement('a');
        navListElement.appendChild(navElement);
    
        navElement.textContent = menueEntry;
        navElement.href = '#';
    
        ul.appendChild(navListElement);
    }
}


// Add class 'active' to section when near top of viewport
function active(){
    const li = document.querySelectorAll('li');
    const liArr = Array.from(li);

    liArr.forEach(el => {
        el.addEventListener('click', event => {

        const activeLi = document.querySelectorAll(".active");
        const activeLiArr = Array.from(activeLi);
        activeLiArr.forEach(el => {
            el.classList.remove('active');
        });
        
        el.classList.add('active');
        
        });
    });
}


// Scroll to anchor ID using scrollTO event
function scrollToAnchorID(){
    const anchors = document.querySelectorAll('a');
    const anchorsArr = Array.from(anchors);

    anchorsArr.forEach((el, i) => {
        el.addEventListener('click', event => {
            console.log(el);
            if(el.firstChild.nodeValue == "Home"){
                window.scrollTo(0,0);
            } else{
                el.href = '#section' + i;
            }
        });
    });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav(menu);

// Scroll to section on link click
scrollToAnchorID();

// Set sections as active
active();

// Highlight links when hover over them
point();

// Hiding navbar
hideNavbar();