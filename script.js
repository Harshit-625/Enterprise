// HAMBURGER FUNCTIONALITY
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton");
  const navbarLinks = document.getElementById("navbarLinks");

  toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
  });

  // HOMEPAGE ANIMATIONS
  gsap.from(".main h1 , .main p", {
    y: 100,
    duration: 2,
    opacity: 0,
    stagger: 1,
  });

  gsap.from(".card img", {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".card",
    },
  });

  gsap.from(".dealer-div", {
    scale: 0.75,
    duration: 1,
    opacity: 0,
    stagger: 1,
    scrollTrigger: {
      trigger: ".dealer-div",
    },
  });

  gsap.from(".product-card", {
    scale: 0.75,
    duration: 1,
    opacity: 0,
    stagger: .75,
    scrollTrigger: {
      trigger: ".dealer-div",
    },
  });

  // PRODUCTS PAGE ANIMATONs
  gsap.utils.toArray(".product-attribute").forEach((attributeSection) => {
    gsap.from(attributeSection.querySelectorAll(".attr"), {
      y: -10,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3,
      scrollTrigger: {
        trigger: attributeSection,
        start: "top 40%",
      },
    });
  });

  gsap.utils.toArray(".product-attribute-even").forEach((attributeSection) => {
    gsap.from(attributeSection.querySelectorAll(".attr-even"), {
      y: -10,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3,
      scrollTrigger: {
        trigger: attributeSection,
        start: "top 40%",
      },
    });
  });
});

// DROP DOWN FUNTIONALITY
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("myForm");
  var dropdownInput = document.getElementById("dropdown-input");
  var options = document.getElementById("options");
  var dropdownLabel = document.getElementById("dropdown-label");

  dropdownInput.addEventListener("click", function (event) {
    event.stopPropagation();
    options.style.display =
      options.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", function (event) {
    if (event.target !== dropdownInput) {
      options.style.display = "none";
    }
  });

  options.addEventListener("click", function (event) {
    if (event.target.matches("div[data-value]")) {
      dropdownInput.value = event.target.textContent;
      dropdownInput.setAttribute(
        "data-value",
        event.target.getAttribute("data-value")
      );
      options.style.display = "none";
    }
  });
});
// MAP 
const map = L.map('map').setView([28.608516672889674, 77.10339931800362], 15); // Set coordinates and zoom level

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

L.marker([28.608516672889674, 77.10339931800362]).addTo(map) // Set marker location
    .bindPopup('Syncpolymer Soltuions')
    .openPopup();
//MAILING
var form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  var dropdownInput = document.getElementById("dropdown-input");
  var fname = document.getElementById("first-name").value;
  var lname = document.getElementById("last-name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("Phone").value;
  var message = document.getElementById("message").value;
  var enquiredProduct = dropdownInput.getAttribute("data-value");

  var businessEmail = "sambhav1218@gmail.com";
  var subject = `Enquiry About the ${enquiredProduct}`;
  var body = `Hi, I ${fname} ${lname}  
                \n Phone : ${phone} 
                \n Email : ${email} 
                \n Enquired Product : ${enquiredProduct}
                \n Message : ${message}`;

  var gmailLink =
    "https://mail.google.com/mail/?view=cm&fs=1&to=" +
    encodeURIComponent(businessEmail) +
    "&su=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);
  window.open(gmailLink, "_blank");
});
