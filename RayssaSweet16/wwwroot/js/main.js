(function($) {
"use strict";

/*------------------------------------------------------------------
[Table of contents]

1. PRE DEFINE FUNCTION
2. THE HAEART MENU TOGGLE JS
3. THE HEART VAGAS ANIMATE JS
4. THE HEART JARALAX JS
5. THE HEART SLIDER JS
6. THE HEART GIFT REGISTY GALLERY JS
7. THE HEART GROOMSMAN SLIDER JS
8. THE HEART GROOMSMAN SLIDER 2 JS JS
9. THE HEART MAGNIFIC POPUP JS
10.THE HEART V7 JS
11.THE HEART WOW JS
12.COUNTDOWN
13.CONTACT FORM INIT
14.THE HEART MENU SOOMTH SCROLL JS
15.THE HEART STICKU MENU
16.RESIZE EVENT
17.THE HEART PRELOADER JS
18.THE HEAR GALLERY GRID JS
19.THE HEART JOURNAL GRID JS



-------------------------------------------------------------------*/

/*--------------------------------------------------------------
 1. PRE DEFINE FUNCTION
------------------------------------------------------------*/

/* is_exist() */
jQuery.fn.is_exist = function(){
  return this.length;
}

/* theHeartautoHeight() */
function theHeartautoHeight (){
  var introduction_image = $('.the-heart-intruduction-content-img'),
      introduction_txt = $('.the-heart-intruduction-content-txt');

  introduction_txt.css('height', introduction_image.outerHeight());
  
  var mamorey_image = $('.the-heart-memoragble-days-img'),
      memorey_txt = $('.the-heart-memoragble-days-content');
  
  memorey_txt.css('height', mamorey_image.outerHeight());
  
  var attending_content = $('.the-heart-attending-content'),
      attending_form = $('.the-heart-attending-form');

  attending_content.css('height', attending_form.outerHeight());
}


$(function(){

/*--------------------------------------------------------------
2.THE HAEART MENU TOGGLE JS
------------------------------------------------------------*/
$(".menu-toggle").on("click", function(e){
	$(".the-heart-main-meun").slideToggle(500);
  return false;
});


/*--------------------------------------------------------------
3.THE HEART VAGAS ANIMATE JS
------------------------------------------------------------*/
var $loaded = $('#loded');
if($loaded.is_exist()) {
  $loaded.vegas({
      slides: [
          { src: 'http://via.placeholder.com/2000x1200' },
          { src: 'http://via.placeholder.com/2000x1200' },
          { src: 'http://via.placeholder.com/2000x1200' },
           { src: 'http://via.placeholder.com/2000x1200' }
      ],
      animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
  });
}

theHeartautoHeight();

/*--------------------------------------------------------------
4.THE HEART JARALAX JS
------------------------------------------------------------*/
if($('.jarallax').is_exist()) {
  jarallax(document.querySelectorAll('.jarallax'));
	jarallax(document.querySelectorAll('.jarallax-keep-img'), {
	    keepImg: true,
	});
}

/*--------------------------------------------------------------
5.THE HEART SLIDER JS
------------------------------------------------------------*/
var $heart_slider = $('.the-heart-slider');
if($heart_slider.is_exist()) {
  $heart_slider.owlCarousel({
      // rtl:true,
      loop:true,
      // margin:10,
      nav:true,
      items:1,
      dots:false,
      autoplay:true,
      autoplayTimeout:4000,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      navText: ["<img src='img/slidernav-left.png' alt='Slider Nav' />",
      "<img src='img/slidernav-right.png' alt='Slider Nav' />"],
      navigation: true,
  });
}

/*--------------------------------------------------------------
6.THE HEART GIFT REGISTY GALLERY JS
------------------------------------------------------------*/
var $gift_gallery = $('.the-heart-gift-registy-gallery');
if($gift_gallery.is_exist()) {
  $gift_gallery.owlCarousel({
    // rtl:true,
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    pagination: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:4
        }
    }
  });
}

/*--------------------------------------------------------------
7.THE HEART GROOMSMAN SLIDER JS
------------------------------------------------------------*/
var $groomsman_slider = $('.the-heart-groomsman-slider');
if($groomsman_slider.is_exist()) {
  $groomsman_slider.owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    pagination: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });
}
/*--------------------------------------------------------------
8.THE HEART GROOMSMAN SLIDER 2 JS JS
------------------------------------------------------------*/
var $groomsman_slider2 = $('.the-heart-groomsman-slider-2');
if($groomsman_slider2.is_exist()) {
  $groomsman_slider2.owlCarousel({
    // rtl:true,
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    pagination: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });
}

/*--------------------------------------------------------------
9.THE HEART MAGNIFIC POPUP JS
------------------------------------------------------------*/
var $the_heartpopup = $('.the-heart-popup');
if($the_heartpopup.is_exist()) {
  $the_heartpopup.magnificPopup({
      type: 'image',
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
          verticalFit: true,
      },
      gallery: {
          enabled: false
      },
      zoom: {
          enabled: true,
          duration: 500, // don't foget to change the duration also in CSS
          opener: function(element) {
              return element.find('img');
          }
      }
  });
}

/*--------------------------------------------------------------
10.THE HEART V7 JS
------------------------------------------------------------*/
var $bg_heart = $('.bg_heart');
if($bg_heart.is_exist()) {
  var love = setInterval(function() {
      var r_num = Math.floor(Math.random() * 40) + 1;
      var r_size = Math.floor(Math.random() * 65) + 10;
      var r_left = Math.floor(Math.random() * 100) + 1;
      var r_bg = Math.floor(Math.random() * 25) + 100;
      var r_time = Math.floor(Math.random() * 5) + 5;
      $bg_heart.append("<div class='heart_7' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);-webkit-animation:love_7 " + r_time + "s ease;-moz-animation:love_7 " + r_time + "s ease;-ms-animation:love_7 " + r_time + "s ease;animation:love_7 " + r_time + "s ease'></div>");

      $bg_heart.append("<div class='heart_7' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);-webkit-animation:love_7 " + (r_time + 5) + "s ease;-moz-animation:love_7 " + (r_time + 5) + "s ease;-ms-animation:love_7 " + (r_time + 5) + "s ease;animation:love_7 " + (r_time + 5) + "s ease'></div>");

  }, 500);
}
/*--------------------------------------------------------------
11.THE HEART WOW JS
------------------------------------------------------------*/
if($('.wow').length > 0) {
	new WOW().init();
}

/*--------------------------------------------------------------
12. COUNTDOWN
------------------------------------------------------------*/
var $heart_countdown = $('#heart_countdown');
if($heart_countdown.is_exist()) {
  $heart_countdown.countDown({
    targetDate: {
      'day':    12,
      'month':  3,
      'year':   2018,
      'hour':   11,
      'min':    13,
      'sec':    0
    },
    omitWeeks: true
  });
}

/*--------------------------------------------------------------
13. CONTACT FORM INIT
--------------------------------------------------------------*/
$( "#heart-rsvp-form" ).on( "submit", function( e ) {
        
  //Stop form submission & check the validation
  e.preventDefault();
  
  // Variable declaration
  var error       = false,
    name          = $('#the_heart_name').val(),
    email         = $('#the_heart_email').val(),
    guests       = $('#the_heart_guest').val(),
    mail_fail     = $('#mail_fail'),
    mail_success  = $('#mail_success'),
    submit_btn    = $('#rsvp_submit');
  
  // Form field validation
  if(name.length <= 1){
    var error = true;
    $('#the_heart_name').addClass('error_field');
  } else {
    $('#the_heart_name').removeClass('error_field');
  }
  if(email.length <= 6 || email.indexOf('@') == '-1'){
    var error = true;
    $('#the_heart_email').addClass('error_field');
  } else {
    $('#the_heart_email').removeClass('error_field');
  }


  if (error == true) {
    $(mail_success).fadeOut(500);
    $(mail_fail).slideDown(800);
  };

  // If there is no validation error, next to process the mail function
  if(error == false){

      $(mail_success).hide();
      $(mail_fail).hide();
      $.ajax({
      url: $(this).attr('action'),
      data: $(this).serialize(),
      type: 'POST',
      success: function() {
        $('.single-form-item input, .single-form-item textarea').val('');
        $(mail_fail).fadeOut(500);
        $(mail_success).slideDown(800);
        $('.error_field').removeClass('error_field');
      },
      error: function() {
        $(mail_success).fadeOut(500);
        $(mail_fail).slideDown(800);
      }
      });

  }
});   


/*--------------------------------------------------------------
14. THE HEART MENU SOOMTH SCROLL JS
--------------------------------------------------------------*/
$('.the-heart-main-meun ul li a').on('click',function(e){
  var href = $(this).attr("href"),
    hrefFirst = href[0];

  if(href.length > 1 && hrefFirst === '#' && $(href).offset()){
    var offsetTop = href === "#" ? 0 : $(href).offset().top - 0;
    $('html, body').stop().animate({ 
        scrollTop: offsetTop,
    }, 500, "easeInOutCirc");
    e.preventDefault();
  }
  return false;
});



});/*End document ready*/




/*--------------------------------------------------------------
15.THE HEART STICKU MENU
------------------------------------------------------------*/
$(window).on('scroll', function(){

  var $logo_section = $('.the-heart-menu-and-logo-section');
  if ( $logo_section.is_exist() ) {
    if ($(window).scrollTop() > 50) {
      $logo_section.addClass('sticky-menu');
    } else {
      $logo_section.removeClass('sticky-menu');
    }
  }

});



/*--------------------------------------------------------------
16.  Resize Event
------------------------------------------------------------*/
$(window).on("resize" ,function(){
  theHeartautoHeight();
});



/*--------------------------------------------------------------
 Winow Load event
------------------------------------------------------------*/
$(window).on("load" ,function(){

theHeartautoHeight();
/*--------------------------------------------------------------
17.THE HEART PRELOADER JS
------------------------------------------------------------*/
$('#prelaoder').fadeOut(450);

/*--------------------------------------------------------------
18.THE HEAR GALLERY GRID JS
------------------------------------------------------------*/
var $container = $('.the-heart-gallery-grid');
if($container.is_exist()) {

	var colWidth = function () {
	var w = $container.width(), 
	  columnNum = 1,
	  columnWidth = 0;
	if (w > 1200) {
	  columnNum  = 3;
	} else if (w > 900) {
	  columnNum  = 3;
	} else if (w > 600) {
	  columnNum  = 2;
	} else if (w > 450) {
	  columnNum  = 2;
	} else if (w > 385) {
	  columnNum  = 1;
	}
	columnWidth = Math.floor(w/columnNum);
	$container.find('.the-heart-gallery-item').each(function() {
	  var $item = $(this),
	    multiplier_w = $item.attr('class').match(/the-heart-gallery-item-w(\d)/),
	    multiplier_h = $item.attr('class').match(/the-heart-gallery-item-h(\d)/),
	    width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth,
	    height = multiplier_h ? columnWidth*multiplier_h[1]*0.4-12 : columnWidth*0.5;
	  $item.css({
	    width: width,
	    //height: height
	  });
	});
	return columnWidth;
	},
	isotope = function () {
	$container.isotope({
	  resizable: false,
	  itemSelector: '.the-heart-gallery-item',
	  masonry: {
	    columnWidth: colWidth(),
	    gutterWidth: 3
	  }
	});
	};
	isotope();
	$(window).resize(isotope);
	var $optionSets = $('.rs-portfolio-nav .option-set'),
	$optionLinks = $optionSets.find('li');
	$optionLinks.on('click',function(){
	var $this = $(this);
	var $optionSet = $this.parents('.option-set');
	$optionSet.find('.selected').removeClass('selected');
	$this.addClass('selected');

	// make option object dynamically, i.e. { filter: '.my-filter-class' }
	var options = {},
	  key = $optionSet.attr('data-option-key'),
	  value = $this.attr('data-option-value');
	// parse 'false' as false boolean
	value = value === 'false' ? false : value;
	options[ key ] = value;
	if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
	// changes in layout modes need extra logic
	changeLayoutMode( $this, options )
	} else {
	// creativewise, apply new options
	$container.isotope( options );
	}
	return false;
	}); 
	
} // End Lenght


/*--------------------------------------------------------------
19.THE HEART JOURNAL GRID JS
------------------------------------------------------------*/
var $journal_grid = $('.the-heart-journal-grid');
if($journal_grid.is_exist()) {

	var $journal_grid = $('.the-heart-journal-grid'),
	colWidth = function () {
	var w = $journal_grid.width(), 
	  columnNum = 1,
	  columnWidth = 0;
	if (w > 1200) {
	  columnNum  = 3;
	} else if (w > 900) {
	  columnNum  = 3;
	} else if (w > 600) {
	  columnNum  = 2;
	} else if (w > 450) {
	  columnNum  = 2;
	} else if (w > 385) {
	  columnNum  = 1;
	}
	columnWidth = Math.floor(w/columnNum);
	$journal_grid.find('.the-heart-journal-grid-item').each(function() {
	  var $item = $(this),
	    multiplier_w = $item.attr('class').match(/the-heart-journal-grid-item-w(\d)/),
	    multiplier_h = $item.attr('class').match(/the-heart-journal-grid-item-h(\d)/),
	    width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth,
	    height = multiplier_h ? columnWidth*multiplier_h[1]*0.4-12 : columnWidth*0.5;
	  $item.css({
	    width: width,
	    //height: height
	  });
	});
	return columnWidth;
	},
	isotope = function () {
	$journal_grid.isotope({
	  resizable: false,
	  itemSelector: '.the-heart-journal-grid-item',
	  masonry: {
	    columnWidth: colWidth(),
	    gutterWidth: 3
	  }
	});
	};
	isotope();
	$(window).resize(isotope);
	var $optionSets = $('.rs-portfolio-nav .option-set'),
	$optionLinks = $optionSets.find('li');
	$optionLinks.on('click',function(){
	var $this = $(this);
	var $optionSet = $this.parents('.option-set');
	$optionSet.find('.selected').removeClass('selected');
	$this.addClass('selected');

	// make option object dynamically, i.e. { filter: '.my-filter-class' }
	var options = {},
	  key = $optionSet.attr('data-option-key'),
	  value = $this.attr('data-option-value');
	// parse 'false' as false boolean
	value = value === 'false' ? false : value;
	options[ key ] = value;
	if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
	// changes in layout modes need extra logic
	changeLayoutMode( $this, options )
	} else {
	// creativewise, apply new options
	$journal_grid.isotope( options );
	}
	return false;
	}); 

} // End Lenght



}); // End window LODE


})(jQuery);
