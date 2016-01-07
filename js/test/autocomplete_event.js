 $(function() {
   
    $( "#search_event" ).autocomplete({
      source: 'autocomplete_event.php'
    });
  });
  


$(function() {

    $( "#search_event1" ).autocomplete({

      source: 'autocomplete_event.php',
        
        focus: function( event, ui ) {
        
        
           $( "#search_event1" ).val( ui.item.value );
        
            return false;
        },
        select: function( event, ui ) {
           

            var selectVille = $("#ville option:selected").val();
            var selectTypeEvent = $("#typeEvent option:selected").val();
            var selectDu = $("#dpd3").val();
            var selectAu = $("#dpd4").val();
            var nameArtiste=$("#nameArtiste").val();
            var nomEvent=$("#search_event1").val();
  // TypeEvent :selectTypeEvent ,

            $.post( 'restEvenments.php', {
                    Du : selectDu,
                    Au : selectAu,
                    Ville :selectVille ,
                    nomEvent : $( "#search_event1" ).val(),
                    nomArtiste : $("#nameArtiste").val()
                    
                },
                function(data){  $( "#artist_right" ).html(data);}, 'html' );


            return false;
        }
    });

  });

// $(function() {

//     $( "#nameArtiste" ).autocomplete({

//       source: 'autocomplete_art.php',
        
//         focus: function( event, ui ) {
        
        
//            $( "#nameArtiste" ).val( ui.item.value );
        
//             return false;
//         },
//         select: function( event, ui ) {

//             var selectVille = $("#ville option:selected").val();
//             var selectTypeEvent = $("#typeEvent option:selected").val();
//             var selectDu = $("#dpd3").val();
//             var selectAu = $("#dpd4").val();
//             var nameArtiste=$("#nameArtiste").val();
//             var nomEvent=$( "#search_event1" ).val();

// // alert(nameArtiste);
// // TypeEvent :selectTypeEvent ,

//             $.post( 'restEvenments.php',  {
//                     Du : selectDu,
//                     Au : selectAu,
//                     Ville :selectVille ,
//                     nomEvent : $( "#search_event1" ).val(),
//                     nomArtiste : $("#nameArtiste").val()
                    

//                 },
//                 function(data){  $( "#artist_right" ).html(data);


//                // if (Modernizr.touch) {
//         //     // show the close overlay button
//         //     $(".close-overlay").removeClass("hidden");
//         //     // handle the adding of hover class when clicked
//         //     $(".img").click(function(e){
//         //         if (!$(this).hasClass("hover")) {
//         //             $(this).addClass("hover");
//         //         }
//         //     });
//         //     // handle the closing of the overlay
//         //     $(".close-overlay").click(function(e){
//         //         e.preventDefault();
//         //         e.stopPropagation();
//         //         if ($(this).closest(".img").hasClass("hover")) {
//         //             $(this).closest(".img").removeClass("hover");
//         //         }
//         //     });
//         // } else {
//         //     // handle the mouseenter functionality
//         //     $(".img").mouseenter(function(){
//         //         $(this).addClass("hover");
//         //     })
//         //     // handle the mouseleave functionality
//         //     .mouseleave(function(){
//         //         $(this).removeClass("hover");
//         //     });
//         // }
//             }, 'html' );
//             return false;
//         }
//     });

//   });
 $(function(){

    $(".select3").change(function(){

            var selectVille = $("#ville option:selected").val();
            var selectTypeEvent = $("#typeEvent option:selected").val();
            var selectDu = $("#dpd3").val();
            var selectAu = $("#dpd4").val();
            var nameArtiste=$("#nameA option:selected").val();
            var nameEvent= $( "#search_event1 option:selected" ).val();


		            // TypeEvent :selectTypeEvent ,
              $.post( 'restEvenments.php',  {
                    Du : selectDu,
                    Au : selectAu,
                    Ville :selectVille ,
                    nomEvent : nameEvent,
                    nomArtiste : nameArtiste
                   

                },
                function(data){  $( "#artist_right" ).html(data);}, 'html' );
        

                 });
   




 });