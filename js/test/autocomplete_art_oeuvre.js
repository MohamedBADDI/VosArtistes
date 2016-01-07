$(function(){

$.widget( "custom.catcomplete", $.ui.autocomplete, {
_renderMenu: function( ul, items ) {
var that = this,
currentCategory = "";
$.each( items, function( index, item ) {
if ( item.category != currentCategory ) {
ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
currentCategory = item.category;
}
that._renderItemData( ul, item );
});
}
});

});
$(function() {
$( "#search_a_o" ).catcomplete({
delay: 0,
source: "autocomplete_art_oeuvre.php"
});
});