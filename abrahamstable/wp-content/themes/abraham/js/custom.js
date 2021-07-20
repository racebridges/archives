jQuery(function(){	
var lis = jQuery(".prayers div.blog_post");

for(var i = 0; i < lis.length; i+=4) {

  lis.slice(i, i+4).wrapAll("<div class='prayer_row'></div>");
}
});



jQuery(document).ready(function($){
   $('.candle').delay(1500).css('opacity', '100');
});
