
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

// Function to handle form submission
function registerUser(event) {
  event.preventDefault(); // Prevent form submission
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
    fullName,
    email,
    password
  };

  // Send the user data to the API
  fetch('http://localhost:3000/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
    .then(response => response.json())
    .then(result => {
      // Process the API response
      console.log(result);

      // Display a success message to the user or redirect to another page
      alert('Registration successful!');
      // Reset the form
      document.getElementById('myForm').reset();
    })
    .catch(error => {
      // Handle any errors
      console.error('Error:', error);
      alert('Registration failed. Please try again.');
    });
}

// Event listener to handle form submission
document.getElementById('myForm').addEventListener('submit', registerUser);

// Function to handle form submission
function addComplaint(event) {
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

  // Send the complaint data to the API
  fetch('http:/localhost:3000/api/form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(complaintData)
  })
    .then(response => response.json())
    .then(result => {
      // Process the API response
      console.log(result);

      // Display a success message to the user or redirect to another page
      alert('Complaint submitted successfully!');
      // Reset the form
      document.getElementById('myForm').reset();
    })
    .catch(error => {
      // Handle any errors
      console.error('Error:', error);
      alert('Complaint submission failed. Please try again.');
    });
}

// Event listener to handle form submission
document.getElementById('myForm').addEventListener('submit', addComplaint);

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

//login function
function login(form) {
  const email = form.email.value;
  const password = form.pwd.value;

  fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: email, password })
  })
    .then(response => {
      if (response.ok) {
        // Login successful, redirect to the home page
        window.location.href = '#home';
      } else {
        // Login failed, display error message
        alert('Invalid credentials');
      }
    })
    .catch(error => {
      console.error('Error logging in:', error);
      alert('An error occurred');
    });
}

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

