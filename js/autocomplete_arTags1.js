 $(function() {
      $( "#tags" ).autocomplete({
      source: 'autocomplete_art.php'
    });
  });



 $(function() {

    $( "#tags1" ).autocomplete({
      source: 'autocomplete_art.php',
        focus: function( event, ui ) {
            //$( "#tags" ).val( ui.item.label );
           $( "#tags1" ).val( ui.item.value );
            return false;
        },
        select: function( event, ui ) {
            var selectTypeOeuvre = $("#SelTest option:selected").val();
            var selectstyle = $("#style option:selected").val();


            $.post( 'restArtistes.php',  {
                    TypeOeuvre : selectTypeOeuvre,
                    style : selectstyle,
                    nameart : $("#tags1").val()

                },
                function(data){  $( "#artist_right" ).html(data);
                    $(".oeuvres").on({
                        mouseenter: function () {
                            //$(this).addClass("hover");
                            $( this ).children(".oeuvres_detail").addClass( "visible" );
                        },
                        mouseleave:function () {
                            //$(this).removeClass("hover");
                            $( this ).children(".oeuvres_detail").removeClass( "visible" );
                        }
                    });
                }, 'html' );
            scl=false;
            scroll = false;
            return false;
        }
    });

  });
//  $(function(){

// $(".select").change(function(){
//         scroll = true;
//         selectTypeOeuvre = $("#type option:selected").val();
//         selectstyle = $("#style2 option:selected").val();
//         nameart = $("#tags").val();

//         //alert(nameart);

//         if (  selectstyle=="" && selectTypeOeuvre=="All"  )
//         {
//             location.reload(); 
//         }
//         else
//         {
            
//             $.post( 'restArtistes.php',  {
//                 TypeOeuvre : selectTypeOeuvre,
//                 style : selectstyle,
//                 nameart : nameart

//             },
//             function(data){  $( "#artist_right" ).html(data);
//                 $(".oeuvres").on({
//                     mouseenter: function () {
//                         //$(this).addClass("hover");
//                         $( this ).children(".oeuvres_detail").addClass( "visible" );
//                     },
//                     mouseleave:function () {
//                         //$(this).removeClass("hover");
//                         $( this ).children(".oeuvres_detail").removeClass( "visible" );
//                     }
//                 });
//             }, 'html' );
//         };



//     });

 $(function() {
  $("#tags1").keyup(function() {
       
       var selectTypeOeuvre = $("#SelTest option:selected").val();
       var selectstyle = $("#style option:selected").val(); 
       var nameart = $("#tags1").val();
        
       //alert(nameart);
        if (nameart=="")
        {
            if (selectTypeOeuvre=="All" && selectstyle=="") {
                  scl=true;
                  
                } else{
                  scl=false;

                };
            $.post( 'restArtistes.php',  {
                    TypeOeuvre : selectTypeOeuvre,
                    style : selectstyle,
                    nameart : nameart

                },
                function(data){  $( "#artist_right" ).html(data);
                    $(".oeuvres").on({
                        mouseenter: function () {
                            //$(this).addClass("hover");
                            $( this ).children(".oeuvres_detail").addClass( "visible" );
                        },
                        mouseleave:function () {
                            //$(this).removeClass("hover");
                            $( this ).children(".oeuvres_detail").removeClass( "visible" );
                        }
                    });
                }, 'html' );
          };
          
        });


 });