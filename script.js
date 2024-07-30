// HAMBURGER FUNCTIONALITY
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton");
  const navbarLinks = document.getElementById("navbarLinks");

  toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
  });
});



// DROP DOWN FUNTIONALITY 
document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('myForm');
  var dropdownInput = document.getElementById('dropdown-input');
  var options = document.getElementById('options');
  var dropdownLabel = document.getElementById('dropdown-label');

  dropdownInput.addEventListener('click', function(event) {
      event.stopPropagation();
      options.style.display = options.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', function(event) {
      if (event.target !== dropdownInput) {
          options.style.display = 'none';
      }
  });

  options.addEventListener('click', function(event) {
      if (event.target.matches('div[data-value]')) {
          dropdownInput.value = event.target.textContent;
          dropdownInput.setAttribute('data-value', event.target.getAttribute('data-value'));
          options.style.display = 'none';
      }
  });
})

//MAILING
var form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    var dropdownInput = document.getElementById('dropdown-input');
    var fname = document.getElementById('first-name').value;
    var lname = document.getElementById('last-name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('Phone').value
    var message = document.getElementById('message').value
    var enquiredProduct = dropdownInput.getAttribute('data-value');



    var businessEmail = "sambhav1218@gmail.com";
    var subject = `Enquiry About the ${enquiredProduct}`;
    var body = `Hi, I ${fname} ${lname}  
                \n Phone : ${phone} 
                \n Email : ${email} 
                \n Enquired Product : ${enquiredProduct}
                \n Message : ${message}`;

    var gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(businessEmail) + "&su=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.open(gmailLink, '_blank');
});
