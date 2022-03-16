// Interactivity stuff

interactiveElementVariableRefferences = {
  hamburger: document.querySelector('.header .navbar .nav-list .hamburger'),
  mobileMenu: document.querySelector('.header .navbar .nav-list ul'),
  menuItem: document.querySelectorAll('.header .navbar .nav-list ul li a'),
  header: document.querySelector('.header.container'),

  handleHamburgerClick() {
    this.hamburger.addEventListener('click', () => {
      this.hamburger.classList.toggle('active');
      this.mobileMenu.classList.toggle('active');
    });
  },

  handleMenuClick() {
    this.menuItem.forEach(item => {
      item.addEventListener('click', () => {
        this.hamburger.classList.toggle('active');
        this.mobileMenu.classList.toggle('active');
      })
    });
  },

  handleScrollBasedHeaderChange() {
    document.addEventListener('scroll', () => {
      let scroll_position = window.scrollY;
      if (scroll_position > 250) {
        this.header.style.backgroundColor = '#29323c';
      } else {
        this.header.style.backgroundColor = '#0000001f';
      }
    });
  },
// create intervals outside of the for loop so you can create an infinite amount, and have clearInterval clear all intervals
  handleMenuItemUnhover() {
    const navMenuItem = document.getElementsByClassName('menuItem');
    let j = 0;
    let array = [];
    for (let i = 0; i < navMenuItem.length; i++) {
      navMenuItem[i].addEventListener('mouseout', () => {
        navMenuItem[i].className = 'menuItem unhovered';
        array[j] = setInterval(() => {
          navMenuItem[i].className = 'menuItem';
        }, 1000);
        j++;
      });
      //navMenuItem[i].addEventListener('mouseover', () => {
      //  navMenuItem[i].className = '';
      //  navMenuItem.removeEventListener('mouseover', );
      //  clearInterval(array[j]);
      //});
    }
  }
};

// DOM Manipulation
DOMManipulator = {
  createCommonElements(type) {
    const itemDiv = document.createElement('div');
    const paragraph = document.createElement('p');
    const image = document.createElement('img');
  
    if (type === "service") {
      const parentDiv = document.getElementById("service-bottom");
      const title = document.createElement('h2');
  
      elementRefferences = {
        itemDiv: itemDiv,
        paragraph: paragraph,
        title: title,
        image: image,
        parentDiv: parentDiv
      }
      return elementRefferences;
  }
    const parentDiv = document.getElementById("project-items");
    const itemInfoDiv = document.createElement('div');
    const itemImageDiv = document.createElement('div');
    const subtitle = document.createElement('h2');
    const title = document.createElement('h1');
  
    elementRefferences = {
      itemDiv: itemDiv,
      paragraph: paragraph,
      title: title,
      image: image,
      parentDiv: parentDiv,
      itemInfoDiv: itemInfoDiv,
      itemImageDiv: itemImageDiv,
      subtitle: subtitle
    }
    return elementRefferences;
  },
  
  assignAttributes(type, titleText, imgSrc, paragraphText, subTitleText) {
    elementRefferences.paragraph.textContent = paragraphText;
    elementRefferences.title.textContent = titleText;
    elementRefferences.image.src = imgSrc;
  
    if (type === "service") {
      elementRefferences.itemDiv.className = "service-item";
    } else {
      elementRefferences.itemDiv.className = "project-item";
      elementRefferences.itemInfoDiv.className = "project-item-info"
      elementRefferences.itemImageDiv.className = "project-item-image";
      elementRefferences.subtitle.textContent = subTitleText;
    }
  },

  createServiceItem(titleText="Title", imgSrc="https://img.icons8.com/bubbles/100/000000/services.png", paragraphText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum exercitationem optio, omnis veniam saepe provident quia recusan.") {
  // default parameters written here to improve readability

  this.createCommonElements("service");
  this.assignAttributes("service", titleText, imgSrc, paragraphText);

  elementRefferences.parentDiv.appendChild(elementRefferences.itemDiv);
  elementRefferences.itemDiv.appendChild(elementRefferences.image);
  elementRefferences.itemDiv.appendChild(elementRefferences.title);
  elementRefferences.itemDiv.appendChild(elementRefferences.paragraph);
  },

  createProjectItem(titleText="Title", imgSrc="./image/card-2.jpg", paragraphText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tenetur quasi corrupti voluptate. Voluptatibus ipsam fugit aliquam, quae necessitatibus repudiandae.", subTitleText="Subtitle", imgAltText="project image") {

    this.createCommonElements(undefined);
    this.assignAttributes(undefined, titleText, imgSrc, paragraphText, subTitleText);

    elementRefferences.parentDiv.appendChild(elementRefferences.itemDiv);
    elementRefferences.itemDiv.appendChild(elementRefferences.itemInfoDiv);
    elementRefferences.itemDiv.appendChild(elementRefferences.itemImageDiv);

    elementRefferences.itemImageDiv.appendChild(elementRefferences.image);
    elementRefferences.itemInfoDiv.appendChild(elementRefferences.title);
    elementRefferences.itemInfoDiv.appendChild(elementRefferences.subtitle);
    elementRefferences.itemInfoDiv.appendChild(elementRefferences.paragraph);
  }
};

// Calling event handlers
interactiveElementVariableRefferences.handleHamburgerClick();
interactiveElementVariableRefferences.handleMenuClick();
interactiveElementVariableRefferences.handleScrollBasedHeaderChange();
interactiveElementVariableRefferences.handleMenuItemUnhover();

// Calling creation functions for the service and projects sections
DOMManipulator.createServiceItem("Web Design");
DOMManipulator.createServiceItem("HTML");
DOMManipulator.createServiceItem("CSS/SCSS");
DOMManipulator.createServiceItem("JavaScript");

DOMManipulator.createProjectItem("Portfolio Website", 
                                "./image/portfolioWebsiteProject.png",
                                "The purpose of this is to solifity my understanding of HTML and CSS. Afterwards, I converted it to SCSS. Removed HTML bloat with Js.",
                                "Uses HTML, SCSS, Js",
                                "notebook image");
DOMManipulator.createProjectItem("Project 2");
DOMManipulator.createProjectItem("Project 3");

console.log("hi");