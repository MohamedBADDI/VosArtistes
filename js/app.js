(function($) {

    $('#header__icon').click(function (e) {
        e.preventDefault();
        $('body').toggleClass('with--sidebar');
    });

    $('#site-cache').click(function (e) {
        $('body').removeClass('with--sidebar');
    })

    // $('#sos').click(function(e){
    // 	 e.preventDefault();
    //      $( '#ra' ).toggleClass( "visible" );

    // });

    $('#sos').click(function (e) {
        e.preventDefault();
        $('#ra').toggleClass("visible");


        if ($('#ra').hasClass('visible')) {
            $('.peloton').addClass("blur");
            $('.miniartistes').addClass("blur");

        } else {

            $('.peloton').removeClass("blur");
            $('.miniartistes').removeClass("blur");

        }


        var slideoutMenu = $('.slideout-menu');
        var slideoutMenuWidth = $('.slideout-menu').width();

        slideoutMenu.animate({
            left: -slideoutMenuWidth
        }, 250);

    });


    $('#sva').click(function (e) {
        e.preventDefault();
        $("#search_sub").toggleClass("visible");
    });

    // $('#ar').click(function(e){
    //         $( "#aaa" ).hide();
    //      $( "#bbb" ).show();
    // });

    $(':checkbox').change(function () {

        if ((!$('#art ').is(':checked') && !$('#oeu ').is(':checked') && !$('#eve ').is(':checked')) || ($('#art ').is(':checked') && $('#oeu ').is(':checked') && $('#eve ').is(':checked'))) {
            $('#aaa ').show();
            $('#bbb ').hide();
            $('#ccc ').hide();
            $('#eee ').hide();
            $('#fff ').hide();
        }
        else {
            if ($('#eve ').is(':checked') && !$('#art ').is(':checked') && !$('#oeu ').is(':checked')) {
                $('#aaa ').hide();
                $('#bbb ').hide();
                $('#ccc ').show();
                $('#eee ').hide();
                $('#fff ').hide();
            } else {
                if (($('#art ').is(':checked') && $('#oeu ').is(':checked')) && !$('#eve ').is(':checked')) {
                    $('#aaa ').hide();
                    $('#bbb ').show();
                    $('#ccc ').hide();
                    $('#eee ').hide();
                    $('#fff ').hide();
                }
                else {
                    if (($('#art ').is(':checked') && !$('#oeu ').is(':checked')) && !$('#eve ').is(':checked')) {
                        $('#aaa ').hide();
                        $('#bbb ').hide();
                        $('#ccc ').hide();
                        $('#eee ').show();
                        $('#fff ').hide();
                    }
                    else {
                        if ((!$('#art ').is(':checked') && $('#oeu ').is(':checked')) && !$('#eve ').is(':checked')) {
                            $('#aaa ').hide();
                            $('#bbb ').hide();
                            $('#ccc ').hide();
                            $('#eee ').hide();
                            $('#fff ').show();
                        }
                    }
                }


            }
        }
    });


    $(':checkbox').change(function () {

        if ((!$('#miniart ').is(':checked') && !$('#minioeu ').is(':checked') && !$('#minieve ').is(':checked')) || ($('#miniart ').is(':checked') && $('#minioeu ').is(':checked') && $('#minieve ').is(':checked'))) {
            $('#kkk ').show();
            $('#hhh ').hide();
            $('#ddd ').hide();
        } else {
            if ($('#minieve ').is(':checked') && !$('#miniart ').is(':checked') && !$('#minioeu ').is(':checked')) {
                $('#kkk ').hide();
                $('#hhh ').hide();
                $('#ddd ').show();
            } else {
                if (($('#miniart ').is(':checked') || $('#minioeu ').is(':checked')) && !$('#minieve ').is(':checked')) {
                    $('#kkk ').hide();
                    $('#hhh ').show();
                    $('#ddd ').hide();
                } else {
                    $('#kkk ').show();
                    $('#hhh ').hide();
                    $('#ddd ').hide();
                }
            }
        }


    });


})(jQuery);