$(function(){
$("#btn_art_oeuvre").click(function(){

            var selectTypeOeuvre = $("#sel_type option:selected").val();
            var selectstyle = $("#sel_style option:selected").val();
            var nameart = $("#search_a_o").val();
            var selectprix1 = $("#prix1 option:selected").val();
            var selectprix2 = $("#prix2 option:selected").val();
            var selectformat = $("#Format option:selected").val();


 if (selectstyle=="" && selectTypeOeuvre=="All" && nameart=="") 
    {
  location.reload();
    } 
    else
    {

            $.post( 'restArtOeuvre.php',  {
                    TypeOeuvre : selectTypeOeuvre,
                    style : selectstyle,
                    prix1 : selectprix1,
                    prix2 : selectprix2,
                    format : selectformat,
                    nameart : $("#search_a_o").val()

                },
                function(data){  $( "#result" ).html(data);
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