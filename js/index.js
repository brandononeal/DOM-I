const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM<br> Is<br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street<br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// logo img
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// nar bar
const nav1 = document.querySelector('nav a')
const nav2 = nav1.nextElementSibling
const nav3 = nav2.nextElementSibling
const nav4 = nav3.nextElementSibling
const nav5 = nav4.nextElementSibling
const nav6 = nav5.nextElementSibling
const navItem = document.querySelector('nav')
const nav7 = document.createElement('a')
nav7.href = '#'
nav7.textContent = 'World'
navItem.appendChild(nav7)
const nav0 = document.createElement('a')
nav0.href = '#'
nav0.textContent = 'Hello'
navItem.prepend(nav0)
const navItems = document.querySelectorAll('nav a')

nav1.textContent = siteContent['nav']['nav-item-1']
nav2.textContent = siteContent['nav']['nav-item-2']
nav3.textContent = siteContent['nav']['nav-item-3']
nav4.textContent = siteContent['nav']['nav-item-4']
nav5.textContent = siteContent['nav']['nav-item-5']
nav6.textContent = siteContent['nav']['nav-item-6']
navItems.forEach(link => {
  link.style.color = 'green'
})

// h1
const h1 = document.querySelector('h1')
h1.innerHTML = siteContent['cta']['h1']

// cta img
const cta = document.querySelector('#cta-img')
cta.setAttribute('src', siteContent['cta']['img-src'])

// get started button
const button = document.querySelector('button')
button.textContent = siteContent['cta']['button']

// top content
const featuresHeader = document.querySelector('.top-content .text-content:nth-of-type(1) h4')
const featuresContent = document.querySelector('.top-content .text-content:nth-of-type(1) p')
const aboutHeader = document.querySelector('.top-content .text-content:nth-of-type(2) h4')
const aboutContent = document.querySelector('.top-content .text-content:nth-of-type(2) p')
featuresHeader.textContent = siteContent['main-content']['features-h4']
featuresContent.textContent = siteContent['main-content']['features-content']
aboutHeader.textContent = siteContent['main-content']['about-h4']
aboutContent.textContent = siteContent['main-content']['about-content']

// middle img
const middleImg = document.querySelector('#middle-img')
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

// bottom content
const servicesHeader = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4')
const servicesContent = document.querySelector('.bottom-content .text-content:nth-of-type(1) p')
const productHeader = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4')
const productContent = document.querySelector('.bottom-content .text-content:nth-of-type(2) p')
const visionHeader = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4')
const visionContent = document.querySelector('.bottom-content .text-content:nth-of-type(3) p')
servicesHeader.textContent = siteContent['main-content']['services-h4']
servicesContent.textContent = siteContent['main-content']['services-content']
productHeader.textContent = siteContent['main-content']['product-h4']
productContent.textContent = siteContent['main-content']['product-content']
visionHeader.textContent = siteContent['main-content']['vision-h4']
visionContent.textContent = siteContent['main-content']['vision-content']

// contact
const contact = document.querySelector('.contact h4')
const address = document.querySelector('.contact p')
const phone = address.nextElementSibling
const email = phone.nextElementSibling
contact.textContent = siteContent['contact']['contact-h4']
address.innerHTML = siteContent['contact']['address']
phone.textContent = siteContent['contact']['phone']
email.textContent = siteContent['contact']['email']

// footer
const footer = document.querySelector('footer p')
footer.textContent = siteContent['footer']['copyright']
