# E-Commerce-Website
A Full-Stack MERN E-Commerce application


* [Usage](#Usage)
* 
* [License](#license)

* [React](#react)

* [Contact](#contact)

* [CSS](#css)

## Usage

[Navigate to the website here.](https://austin-marlatt-portfolio.netlify.app/Portfolio)
@@ -30,3 +34,11 @@ Check out the other projects I have worked on at [Austin-Marlatt](https://github
This Web Application serves as a portfolio and Resume. It utilizes React /  Vite, as well as react-bootstrap components, to be able to render a page to upload items (including pictures, price, and title/description) to sell, and purchase other items already there.
 
 ## License

  This project is licenseed under MIT.

 ## React
 For the front end, some react-bootstrap components were installed and imported to files, to allow usage on the front page. This include the Carousels, on both the review and products page (iPhones only). The Carousels needed to be contained, and then adding the components of the individual parts (labled <Carousel.PartName(/)>) of what was being displayed in the Carousel. This included <Carousel.Item> and <Carousel.Caption/>.
 Another was Nav, Navbar, NavDropdown . This included <Navbar.Toggle aria-controls="responsive-navbar-nav" />
 and <Navbar.Collapse id="responsive-navbar-nav">, which allows for the "Hamburger Menu" to be utilized on the page, for any and all screens. The <Nav.Link> contains the href being sought (defined in main.jsx) and the text Name that appears on this </Nav.Link>;
 Form, Button, Alert on reviewForm.jsx. This allowed a Form to be created, allowing components to be rendered on the page. Form.Label allows for written text, and Form.Control allows one to include functions to be called within to allow value to be taken. The Button also allows for functions to get called by its verson of an "event listener"; 
 Accordion allows a title "button" to open a dropdown by clicking on the text within the Accordian. 

## contact
Every value input on the page is given a useState("") to track the changes made to those when something is inputted. While "Name*", "Phone Number", "Email*", and "Message" all track text values, the "subject" gives one limited value options that they can select from. When the "Send" button is clicked, then it calls the contactClick function (starting from line 10). This will take all the values inputted, and then the function contactSubmit (line 36) will compile them into an email to be sent in a new tab, via Outlook, Gmail, etc. as well as send the user back to the homepage, and then reset the vaules to their initial values. 

## css 
While some could be generically imported from style.css, for other pages, it required its own css file to be able to have effects. Given that the containers limited where the cards on the page could be, it ended up being easier to make the items within the <div></div> to be wrapped into a row, so that the Accordions, "add to cart" button, and price, could be in a row to the Product, so limiting the empty space on the page. 
