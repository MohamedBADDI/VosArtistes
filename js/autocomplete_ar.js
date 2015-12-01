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
        var selectprix1 = $("#prix1 option:selected").val();
        var selectprix2 = $("#prix2 option:selected").val();
        var selectformat = $("#Format option:selected").val();

        $.post( 'restOeuvres.php',  {
                TypeOeuvre : selectTypeOeuvre,
                style : selectstyle,
                prix1 : selectprix1,
                prix2 : selectprix2,
                format : selectformat,
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


        return false;
    }
});

});


$(function() {

$("#tags1").keyup(function() {
  
        var selectTypeOeuvre = $("#SelTest option:selected").val();
        var selectstyle = $("#style option:selected").val();
        var selectprix1 = $("#prix1 option:selected").val();
        var selectprix2 = $("#prix2 option:selected").val();
        var selectformat = $("#Format option:selected").val();
        var nameart = $("#tags1").val();

        if (nameart=="")
        {
            $.post( 'restOeuvres.php',  {
                    TypeOeuvre : selectTypeOeuvre,
                    style : selectstyle,
                    prix1 : selectprix1,
                    prix2 : selectprix2,
                    format : selectformat,
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