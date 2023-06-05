
$(document).ready(function() {
	
	$("#menuPanel").panel();
	$('#menuListview').listview().listview('refresh');	

  $("#img").click(function(){
    $("#about-me").slideToggle("slow");
  });

  $(function() {
    // Open Popup
    $('[popup-open]').on('click', function() {
        var popup_name = $(this).attr('popup-open');
 $('[popup-name="' + popup_name + '"]').fadeIn(300);
    });
 
    // Close Popup
    $('[popup-close]').on('click', function() {
 var popup_name = $(this).attr('popup-close');
 $('[popup-name="' + popup_name + '"]').fadeOut(300);
 window.location.reload();
    });
 
    // Close Popup When Click Outside
    $('.popup').on('click', function() {
 var popup_name = $(this).find('[popup-close]').attr('popup-close');
 $('[popup-name="' + popup_name + '"]').fadeOut(300);
 window.location.reload();
    }).children().click(function() {
 return false;
    });
 
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

