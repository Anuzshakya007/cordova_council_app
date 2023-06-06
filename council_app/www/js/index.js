
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

