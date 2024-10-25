// Select DOM elements for the mobile menu and logo
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#logo');

// Function to display the mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

// Add event listener to toggle the mobile menu on click
menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#Home');
    const aboutMenu = document.querySelector('#About');
    const servicesMenu = document.querySelector('#Services');
    const contactMenu = document.querySelector('#Contact');
    const galleryMenu = document.querySelector('#Gallery'); 
    let scrollPos = window.scrollY;

    if (window.innerWidth > 960) {
        if (scrollPos < 600) {
            homeMenu.classList.add('highlight');
            aboutMenu.classList.remove('highlight');
            servicesMenu.classList.remove('highlight');
            galleryMenu.classList.remove('highlight');
            contactMenu.classList.remove('highlight');
        } else if (scrollPos >= 600 && scrollPos < 1400) {
            aboutMenu.classList.add('highlight');
            homeMenu.classList.remove('highlight');
            servicesMenu.classList.remove('highlight');
            galleryMenu.classList.remove('highlight');
            contactMenu.classList.remove('highlight');
        } else if (scrollPos >= 1400 && scrollPos < 2345) {
            servicesMenu.classList.add('highlight');
            aboutMenu.classList.remove('highlight');
            galleryMenu.classList.remove('highlight');
            contactMenu.classList.remove('highlight');
        } else if (scrollPos >= 2345 && scrollPos < 3000) { 
            galleryMenu.classList.add('highlight');
            servicesMenu.classList.remove('highlight');
            contactMenu.classList.remove('highlight');
        } else if (scrollPos >= 3000) { 
            contactMenu.classList.add('highlight');
            galleryMenu.classList.remove('highlight');
            servicesMenu.classList.remove('highlight');
        }
    }

    if (elem && (window.innerWidth < 960 || scrollPos < 600)) {
        elem.classList.remove('highlight');
    }
};

// Add event listeners for scroll and click to trigger highlightMenu
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Close mobile menu when clicking on a link
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

// Image arrays for each category
const galleryImages = {
    Fences: [
        { src: "images/Fence1.jpg", name: "Fence1" },
        { src: "images/Fence2.jpg", name: "Fence2" },
        { src: "images/Fence3.jpg", name: "Fence3" },
        { src: "images/Fence4.jpg", name: "Fence4" },
        { src: "images/Fence5.jpg", name: "Fence5" },
        { src: "images/Fence6.jpg", name: "Fence6" },
        { src: "images/Fence7.jpg", name: "Fence7" },
        { src: "images/Fence8.jpg", name: "Fence8" },
        { src: "images/Fence9.jpg", name: "Fence9" },
        { src: "images/Fence10.jpg", name: "Fence10" },
        { src: "images/Fence12.jpg", name: "Fence12" },
        { src: "images/Fence13.jpg", name: "Fence13" },
        { src: "images/Fence14.jpg", name: "Fence14" },
        { src: "images/Fence15.jpg", name: "Fence15" },
        { src: "images/Fence16.jpg", name: "Fence16" },
        { src: "images/Fence17.jpg", name: "Fence17" },
        { src: "images/Fence18.jpg", name: "Fence18" },
        { src: "images/Fence19.jpg", name: "Fence19" },
        { src: "images/Fence20.jpg", name: "Fence20" },
        { src: "images/Fence21.jpg", name: "Fence21" },
        { src: "images/Fence22.jpg", name: "Fence22" },
        { src: "images/Fence23.jpg", name: "Fence23" },
        { src: "images/Fence24.jpg", name: "Fence24" },
        { src: "images/Fence25.jpg", name: "Fence25" },
        { src: "images/Fence26.jpg", name: "Fence26" },
        { src: "images/Fence27.jpg", name: "Fence27" },
        { src: "images/Fence28.jpg", name: "Fence28" },
        { src: "images/Fence29.jpg", name: "Fence29" },
        { src: "images/Fence30.jpg", name: "Fence30" },
        { src: "images/Fence31.jpg", name: "Fence31" },
        { src: "images/Fence32.jpg", name: "Fence32" },
        { src: "images/Fence33.jpg", name: "Fence33" },
        { src: "images/Fence34.jpg", name: "Fence34" },
        { src: "images/Fence35.jpg", name: "Fence35" },
        { src: "images/Fence36.jpg", name: "Fence36" },
        { src: "images/Fence37.jpg", name: "Fence37" },
        { src: "images/Fence38.jpg", name: "Fence38" },
        { src: "images/Fence39.jpg", name: "Fence39" },
        { src: "images/Fence40.jpg", name: "Fence40" },
        { src: "images/Fence41.jpg", name: "Fence41" },
        { src: "images/Fence42.jpg", name: "Fence42" },
        { src: "images/Fence43.jpg", name: "Fence43" },
        { src: "images/Fence44.jpg", name: "Fence44" },
        { src: "images/Fence45.jpg", name: "Fence45" },
        { src: "images/Fence46.jpg", name: "Fence46" },
        { src: "images/Fence47.jpg", name: "Fence47" },
        { src: "images/Fence48.jpg", name: "Fence48" },
        { src: "images/Fence49.jpg", name: "Fence49" },
        { src: "images/Fence50.jpg", name: "Fence50" },
        { src: "images/Fence51.jpg", name: "Fence51" },
        { src: "images/Fence52.jpg", name: "Fence52" },
        { src: "images/Fence53.jpg", name: "Fence53" },
        { src: "images/Fence54.jpg", name: "Fence54" },
        { src: "images/Fence55.jpg", name: "Fence55" },
        { src: "images/Fence56.jpg", name: "Fence56" },
        { src: "images/Fence57.jpg", name: "Fence57" },
        { src: "images/Fence58.jpg", name: "Fence58" },
        { src: "images/Fence59.jpg", name: "Fence59" },
        { src: "images/Fence60.jpg", name: "Fence60" },
        { src: "images/Fence61.jpg", name: "Fence61" },
        { src: "images/Fence62.jpg", name: "Fence62" },
        { src: "images/Fence63.jpg", name: "Fence63" },
        { src: "images/Fence64.jpg", name: "Fence64" },
        { src: "images/Fence65.jpg", name: "Fence65" },
        { src: "images/Fence66.jpg", name: "Fence66" }
    ],    
    Gates: [
        { src: "images/Gate1.jpg", name: "Gate1" },
        { src: "images/Gate2.jpg", name: "Gate2" },
        { src: "images/Gate3.jpg", name: "Gate3" },
        { src: "images/Gate4.jpg", name: "Gate4" },
        { src: "images/Gate5.jpg", name: "Gate5" },
        { src: "images/Gate6.jpg", name: "Gate6" },
        { src: "images/Gate7.jpg", name: "Gate7" },
        { src: "images/Gate8.jpg", name: "Gate8" },
        { src: "images/Gate9.jpg", name: "Gate9" },
        { src: "images/Gate10.jpg", name: "Gate10" }
    ],    
    Stone: [
        { src: "images/Stone1.jpg", name: "Stone1" },
        { src: "images/Stone2.jpg", name: "Stone2" },
        { src: "images/Stone3.jpg", name: "Stone3" },
        { src: "images/Stone4.jpg", name: "Stone4" },
        { src: "images/Stone5.jpg", name: "Stone5" },
        { src: "images/Stone6.jpg", name: "Stone6" },
        { src: "images/Stone7.jpg", name: "Stone7" },
        { src: "images/Stone8.jpg", name: "Stone8" },
        { src: "images/Stone9.jpg", name: "Stone9" },
        { src: "images/Stone10.jpg", name: "Stone10" },
        { src: "images/Stone11.jpg", name: "Stone11" },
        { src: "images/Stone12.jpg", name: "Stone12" },
        { src: "images/Stone13.jpg", name: "Stone13" },
        { src: "images/Stone14.jpg", name: "Stone14" },
        { src: "images/Stone15.jpg", name: "Stone15" },
        { src: "images/Stone16.jpg", name: "Stone16" },
        { src: "images/Stone17.jpg", name: "Stone17" }
    ],    
    Sheds: [
        { src: "images/Shed1.jpg", name: "Shed1" },
        { src: "images/Shed2.jpg", name: "Shed2" },
        { src: "images/Shed3.jpg", name: "Shed3" },
    ],
    Commercial: [
        { src: "images/CShed1.jpg", name: "Shed1" },
        { src: "images/CShed2.jpg", name: "Shed2" },
        { src: "images/CShed3.jpg", name: "Shed3" }
    ],
    Drain: [
        { src: "images/Drain1.jpg", name: "Drain1" },
        { src: "images/Drain2.jpg", name: "Drain2" },
        { src: "images/Drain3.jpg", name: "Drain3" },
        { src: "images/Drain4.jpg", name: "Drain4" },
        { src: "images/Drain5.jpg", name: "Drain5" },
        { src: "images/Drain6.jpg", name: "Drain6" },
        { src: "images/Drain7.jpg", name: "Drain7" },
        { src: "images/Drain8.jpg", name: "Drain8" },
        { src: "images/Drain9.jpg", name: "Drain9" },
        { src: "images/Drain10.jpg", name: "Drain10" }
    ],    
};

// Current image index trackers
let currentImageIndex = {
    Fences: 0,
    Gates: 0,
    Stone: 0,
    Sheds: 0,
    Commercial: 0,
    Drain: 0
};

// Function to change the displayed image in a gallery
function changeImage(category, direction) {
    const gallery = galleryImages[category];

    // Update the index
    currentImageIndex[category] += direction;

    // Loop around if reaching the end or beginning of the gallery
    if (currentImageIndex[category] < 0) {
        currentImageIndex[category] = gallery.length - 1;
    }
    if (currentImageIndex[category] >= gallery.length) {
        currentImageIndex[category] = 0;
    }

    // Update the image in the gallery display
    const imgElement = document.getElementById(`${category}-image`);
    if (imgElement) {
        imgElement.src = gallery[currentImageIndex[category]].src;
        imgElement.alt = gallery[currentImageIndex[category]].name;
    }
}

// Initialize the first image displays
function initGallery() {
    for (const category in galleryImages) {
        changeImage(category, 0);
    }
}

// Initialize the gallery display when the page loads
window.onload = initGallery;

// Add event listeners to hide mobile menu on link click or logo click
menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

// EmailJS form submission integration
document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission from refreshing the page
    
    emailjs.sendForm('handymanproservicesdtx', 'template_29feagi', this)
        .then(function() {
            alert('SUCCESS! Your appointment request has been sent.');
        }, function(error) {
            alert('FAILED... Please try again.' + JSON.stringify(error));
        });
});