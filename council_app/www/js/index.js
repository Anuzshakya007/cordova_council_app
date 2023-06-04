/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
// document.addEventListener('deviceready', onDeviceReady, false);

// function onDeviceReady() {
//     // Cordova is now initialized. Have fun!

//     console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
//     document.getElementById('deviceready').classList.add('ready');
// }


$(document).ready(function() {
	
	$("#menuPanel").panel();
	$('#menuListview').listview().listview('refresh');	

  $("#img").click(function(){
    $("#about-me").slideToggle("slow");
  });

 }
 
); 


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

