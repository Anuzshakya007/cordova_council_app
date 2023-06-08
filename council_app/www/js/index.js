
const baseURL = 'http://localhost:';

const port ="3000";

$(document).ready(function() {
	
	$("#menuPanel").panel();
	$('#menuListview').listview().listview('refresh');	

  $(".more-about-me").click(function(){
    $("#about-me").slideToggle("slow");
  });
  
  $("#showLogin").on("click", function(){
    console.log("in modal");
    $(".popup, .popup-content").addClass("active");
    $("#registration").addClass("blur");
  });

  $(".close, .popup").on("click", function(){
    $(".popup, .popup-content").removeClass("active");
    $("#registration").removeClass("blur");
  });

 }
 
); 

// End of document.ready function


$(document).on('pagecreate', '#home', function(event) {  
    
   $(".back").click(function(e) {
	   // correct/preferred way to change a page 
	   $("body").pagecontainer("change", "#home", { transition:'slide'});
   });   


// MENU --------------------------------

   $(".menu").click(function() {
         $("#menuPanel").panel("open");
     }
   );  	

   $("#homeLink").click(function(e) {
         $("body").pagecontainer("change", "#home",  {transition:"flip"});
     }
    );
	
   $("#logo").click(function(e) {
	 $("body").pagecontainer("change", "#about", {transition:"slide"});
     }
   );

// ------END MENU ----------

// Function to handle registration form submission
$("#registration_submit_button").on("click", (e) => {  
  e.preventDefault(); // Prevent form submission
  console.log("submit clicked");
  // Get the user input from the registration form
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('pwd').value;
  const confirmPassword = document.getElementById('confirm_pwd').value;

  // Validate password match
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // Create an object with the user data
  const userData = {
    fullName: fullName,
    email: email,
    password: password
  };

  $.ajax({
    method: "POST",
    contentType: "application/json; charset=utf-8", // important
    dataType : "json",
    url:  baseURL+ port +"/api/users", 
    data: JSON.stringify(userData)
    }).done(function( data, statusText, xhrObj) {
      console.log(JSON.stringify(userData));
      // Display a success message to the user or redirect to another page
      alert('Registration successful!');
      // Reset the form
      document.getElementById('registration_form').reset();
      $.mobile.pageContainer.pagecontainer("change", "#home", { "transition":"turn"  }); 
    }).error (function( xhr ) {
      console.error('Error:', xhr);
      alert('Registration failed. Please try again.');
    }) // end ajax

});

//login function
$("#login_submit_button").on("click", (e) => {  
  e.preventDefault(); // Prevent form submission
  console.log("submit clicked");
  // Get the user input from the registration form
  const email = document.getElementById('login_email').value;
  const password = document.getElementById('loginPass').value;

  $.ajax({
    method: "POST",
    headers: {  
      Authorization: `Bearer ${token}` //Add this line
   },
    contentType: "application/json; charset=utf-8", // important
    dataType : "json",
    url:  baseURL+ port +"/api/login", 
    data: JSON.stringify({ username: email, password })
    }).done(function( data, statusText, xhrObj) {
      // Reset the form
      document.getElementById('login_form').reset();
      $.mobile.pageContainer.pagecontainer("change", "#complaint-form", { "transition":"turn"  }); 
    }).error (function( xhr ) {
      console.error('Error:', xhr);
      document.getElementById('login_error').innerHTML = 'Invalid credentials';
    }) // end ajax
});

//complaint form submit function
$("#complaint_submit_button").on("click", (e) => {  
  event.preventDefault(); // Prevent form submission

  // Get the user input from the complaint form
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const complaintType = document.querySelector('input[name="complaint_type"]:checked').value;
  const description = document.getElementById('description').value;

  // Create an object with the complaint data
  const complaintData = {
    fullname: fullName,
    email: email,
    contactNumber: phone,
    complaints: complaintType,
    description: description
  };


  $.ajax({
    method: "POST",
    contentType: "application/json; charset=utf-8", // important
    dataType : "json",
    url:  baseURL+ port +"/api/form/:id", 
    data: JSON.stringify(complaintData)
    }).done(function( data, statusText, xhrObj) {
      // Reset the form
      document.getElementById('comlaintForm').reset();
      alert('Complaint submitted successfully!');
      $.mobile.pageContainer.pagecontainer("change", "#complaint-form", { "transition":"turn"  }); 
    }).error (function( xhr ) {
      console.error('Error:', xhr);
      alert('Complaint submission failed. Please try again.');
    }) // end ajax

});


// // Function to handle form submission
// function addComplaint(event) {


//   // Send the complaint data to the API
//   fetch('http:/localhost:3000/api/form', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(complaintData)
//   })
//     .then(response => response.json())
//     .then(result => {
//       // Process the API response
//       console.log(result);

//       // Display a success message to the user or redirect to another page
//       alert('Complaint submitted successfully!');
//       // Reset the form
//       document.getElementById('myForm').reset();
//     })
//     .catch(error => {
//       // Handle any errors
//       console.error('Error:', error);
//       alert('Complaint submission failed. Please try again.');
//     });
// }

// // Event listener to handle form submission
// document.getElementById('myForm').addEventListener('submit', addComplaint);

// Fetch the complaint list from the server
fetch('http://localhost:3000/api/form')
.then(response => response.json())
.then(data => {
  const listContainer = document.getElementById('listOfItems');
  data.forEach(item => {
    const listItem = document.createElement('div');
    listItem.textContent = item.description;
    listContainer.appendChild(listItem);
  });
})
.catch(error => {
  console.error('Error fetching complaint list:', error);
});

        $(`#displayApiData`).click(function (){
             fetchData();
        }) //API function call
        $(".clc").click(function(){
            $("#display").val($("#display").val() +$(this).val());
        });
        $(".clear").click(function(){
            $("#display").val('');
        });
        $(".result").click(function(){
            $("#display").val(eval($("#display").val()));
        });
  }
)
// -----End of page create------


$(document).on("swipeleft swiperight", function( e ) {
        
	if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swiperight"  ) {
				  e.preventDefault();
				$( "#menuPanel" ).panel( "open" );
	    }
	}
 }
);

// window.addEventListener('click', function(event) {
//   if (event.target == document.getElementById('mod_mec')) {
//     document.getElementById('mod_mec').style.display = "none";
//   }

