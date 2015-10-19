// navigation and scroll functions
// ==========================================================================

(function() { // any attempt to scroll will take one to next section (up or down)
  var delay = false;

  $(document).on('mousewheel DOMMouseScroll', function(event) {
    event.preventDefault();
    if(delay) return;

    delay = true;
    setTimeout(function(){delay = false},1100)

    var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

    var a= document.getElementsByClassName('anchorlink');
    if(wd < 0) {
      for(var i = 0 ; i < a.length ; i++) {
        var t = a[i].getClientRects()[0].top;
        if(t >= 40) break;
      }
    }
    else {
      for(var i = a.length-1 ; i >= 0 ; i--) {
        var t = a[i].getClientRects()[0].top;
        if(t < -20) break;
      }
    }
    $('html,body').animate({
      scrollTop: a[i].offsetTop
    });
  });
})();

$(document).ready(function($) {

  var $win = $(window); // set the win var
  var winvh = $win.height(); // Get the window height.

  var $tableContent = '<div id="contact"><div id="text-block">This Multitouch Table (section 1) content is visible to the user but is not useful for SEO purposes it gets switched out via javascript.</div></div>';
  var $galleryContent = '<div id="gallery" class="row" style="height:100%"><div class="one-fourth" id="fish-n-ships"><a class="touchme" href="#"></a></div><div class="one-fourth" id="welding"></div><div class="one-fourth" id="gestures"></div><div class="one-fourth" id="bugged"></div>';
  var $contactContent = '<div id="contact"><div id="text-block">This Contact (section 3) content is visible to the user but is not useful for SEO purposes it gets switched out via javascript.</div></div>';

  $('#content-information').on('mouseenter', '#fish-n-ships', function( event ) {
    //console.log('fish-n-ships is being hovered over');
  $('#content-information').on('mouseenter', '#fish-n-ships', function( event ) {
    //console.log('fish-n-ships is being hovered over');
    $("#fish-n-ships .touchme").css("visibility", "visible");
    $("#fish-n-ships").css("width", "40%");
    $("#welding").css("width", "20%");
    $("#gestures").css("width", "20%");
    $("#bugged").css("width", "20%");
  }).on('mouseleave', '#bugged', function( event ) {
    //console.log('fish-n-ships is no longer being hovered over');
=======
  }).on('mouseleave', '#fish-n-ships', function( event ) {
    //console.log('fish-n-ships is no longer being hovered over');
    $("#fish-n-ships .touchme").css("visibility", "hidden");
    $("#fish-n-ships").css("width", "25%");
    $("#welding").css("width", "25%");
    $("#gestures").css("width", "25%");
    $("#bugged").css("width", "25%");
  });

  $('#content-information').on('mouseenter', '#welding', function( event ) {
    //console.log('welding is being hovered over');
    $("#welding .touchme").css("visibility", "visible");
    $("#fish-n-ships").css("width", "20%");
    $("#welding").css("width", "40%");
    $("#gestures").css("width", "20%");
    $("#bugged").css("width", "20%");
  }).on('mouseleave', '#bugged', function( event ) {
    //console.log('welding is no longer being hovered over');
  }).on('mouseleave', '#welding', function( event ) {
    //console.log('welding is no longer being hovered over');
    $("#welding .touchme").css("visibility", "hidden");
    $("#fish-n-ships").css("width", "25%");
    $("#welding").css("width", "25%");
    $("#gestures").css("width", "25%");
    $("#bugged").css("width", "25%");
  });

  $('#content-information').on('mouseenter', '#gestures', function( event ) {
    //console.log('gestures is being hovered over');
    $("#gestures .touchme").css("visibility", "visible");
    $("#fish-n-ships").css("width", "20%");
    $("#welding").css("width", "20%");
    $("#gestures").css("width", "40%");
    $("#bugged").css("width", "20%");
  }).on('mouseleave', '#gestures', function( event ) {
    //console.log('gestures is no longer being hovered over');
    $("#gestures .touchme").css("visibility", "hidden");
    $("#fish-n-ships").css("width", "25%");
    $("#welding").css("width", "25%");
    $("#gestures").css("width", "25%");
    $("#bugged").css("width", "25%");
  });

  $('#content-information').on('mouseenter', '#bugged', function( event ) {
    //console.log('bugged is being hovered over');
    $("#bugged .touchme").css("visibility", "visible");
    $("#fish-n-ships").css("width", "20%");
    $("#welding").css("width", "20%");
    $("#gestures").css("width", "20%");
    $("#bugged").css("width", "40%");
  }).on('mouseleave', '#bugged', function( event ) {
    //console.log('bugged is no longer being hovered over');

    $("#bugged .touchme").css("visibility", "hidden");
    $("#fish-n-ships").css("width", "25%");
    $("#welding").css("width", "25%");
    $("#gestures").css("width", "25%");
    $("#bugged").css("width", "25%");
  });
  

  // Nav button content
    // ================================================================================================================
    $('#section1navitem1').click(function(){ // if #section1navitem1 clicked 

      $('#tablemenu').addClass('section1');
      $('#section1').addClass('section1');
      $('#section1navitem').addClass('on');

      $('#tablemenu').removeClass('section2');
      $('#section2').removeClass('section2');
      $('#section2navitem').removeClass('on');

      $('#tablemenu').removeClass('section3');
      $('#section3').removeClass('section3');
      $('#section3navitem').removeClass('on');

      $('#section1navitem').addClass('on');
      $('#section1-navitem1').removeClass('on');
      $('#section1-navitem2').removeClass('on');

      $('#up_arrow').removeClass('on');
      $('#up_arrow').removeClass('goto1');
      $('#up_arrow').removeClass('goto1a');

      $('#down_arrow').addClass('on');
      $('#down_arrow').addClass('goto1a');
      $('#down_arrow').removeClass('goto1b');

      $('#dig_deeper').addClass('on');

      document.getElementById("content-information").innerHTML = $tableContent;
      document.getElementById("table").style.display="block";
      document.getElementById("table").style.display="block";
      document.getElementById("latest-in-touch").style.display="none";
      document.getElementById("key-features").style.display="none";
      document.getElementById("gallery").style.display="none";
      document.getElementById("contact").style.display="none";
    });

    $('#up_arrow').click(function(){ // if #up_arrow clicked
      
      if ( $(this).hasClass("goto1") ) { // and if it has the goto1 class appended

        $("#text-block").text("This Multitouch Table (section 1) content is visible to the user but is not useful for SEO purposes it gets switched out via javascript.");

        $('#up_arrow').removeClass('on');
        $('#up_arrow').removeClass('goto1');
        $('#up_arrow').removeClass('goto1a');

        $('#down_arrow').addClass('on');
        $('#down_arrow').addClass('goto1a');
        $('#down_arrow').removeClass('goto1b');

        $('#dig_deeper').addClass('on');


        $('#section1navitem2').removeClass('on');
        $('#section1navitem3').removeClass('on');
      } 

      else if ( $(this).hasClass("goto1a") ) {// and if it has the goto1a class appended
        $("#text-block").text("This Latest In Touch (section 1a) content is visible to the user but is not useful for SEO purposes it gets switched out via javascript.");

        $('#section1-navitem1').removeClass('on');
        $('#section1-navitem2').removeClass('on');
        $('#section1navitem2').removeClass('on');
        $('#section1navitem3').removeClass('on');

        document.getElementById("table").style.display="block";
        document.getElementById("latest-in-touch").style.display="none";
        document.getElementById("key-features").style.display="none";

      } 

      else if ( $(this).hasClass("goto1a") ) {// and if it has the goto1a class appended

        $('#up_arrow').addClass('on');
        $('#up_arrow').addClass('goto1');
        $('#up_arrow').removeClass('goto1a');

        $('#down_arrow').addClass('on');
        $('#down_arrow').removeClass('goto1a');
        $('#down_arrow').addClass('goto1b');

        $('#dig_deeper').addClass('on');


        $('#section1navitem2').addClass('on');
        $('#section1navitem3').removeClass('on');

        $('#section1-navitem1').addClass('on');
        $('#section1-navitem2').removeClass('on');
        $('#section1navitem2').addClass('on');
        $('#section1navitem3').removeClass('on');

        document.getElementById("table").style.display="none";
        document.getElementById("latest-in-touch").style.display="block";
        document.getElementById("key-features").style.display="none";

      }

    });

    $('#down_arrow').click(function(){ // if #down_arrow clicked
      
      if ( $(this).hasClass("goto1a") ) { // and if it has the goto1a class appended

        $("#text-block").text("This Latest In Touch (section 1a) content is visible to the user but is not useful for SEO purposes it gets switched out via javascript.");

        $('#up_arrow').addClass('on');
        $('#up_arrow').addClass('goto1');
        $('#up_arrow').removeClass('goto1a');

        $('#down_arrow').addClass('on');
        $('#down_arrow').removeClass('goto1a');
        $('#down_arrow').addClass('goto1b');

        $('#dig_deeper').addClass('on');

        $('#section1navitem2').addClass('on');
        $('#section1navitem3').removeClass('on');
      } 

      else if ( $(this).hasClass("goto1b") ) { // and if it has the goto1b class appended
        $("#text-block").text("This Key Features (section 1b) content is visible to the user but is not useful for SEO purposes it gets switched out via javascript.");
        $('#section1-navitem1').addClass('on');
        $('#section1-navitem2').removeClass('on');
        $('#section1navitem2').addClass('on');
        $('#section1navitem3').removeClass('on');

        document.getElementById("table").style.display="none";
        document.getElementById("latest-in-touch").style.display="block";
        document.getElementById("key-features").style.display="none";

      } 

      else if ( $(this).hasClass("goto1b") ) { // and if it has the goto1b class appended

        $('#up_arrow').addClass('on');
        $('#up_arrow').removeClass('goto1');
        $('#up_arrow').addClass('goto1a');

        $('#down_arrow').removeClass('on');
        $('#down_arrow').removeClass('goto1a');
        $('#down_arrow').removeClass('goto1b');

        $('#dig_deeper').removeClass('on');


        $('#section1navitem2').removeClass('on');
        $('#section1navitem3').addClass('on');

        $('#section1-navitem1').removeClass('on');
        $('#section1-navitem2').addClass('on');
        $('#section1navitem2').removeClass('on');
        $('#section1navitem3').addClass('on');

        document.getElementById("table").style.display="none";
        document.getElementById("latest-in-touch").style.display="none";
        document.getElementById("key-features").style.display="block";
      }

    });


    $('#section1navitem2').click(function(){ // if #section1navitem2 (Lates in Touch) is clicked 
      $("#text-block").text("This Latest In Touch (section 1a) content is visible to the user but is not useful for SEO purposes it gets switched out via javascript.");

    $('#section1navitem2').click(function(){ // if #section1navitem2 (Latest in Touch) is clicked 

      $('#up_arrow').addClass('on');
      $('#up_arrow').addClass('goto1');
      $('#up_arrow').removeClass('goto1a');

      $('#down_arrow').addClass('on');
      $('#down_arrow').removeClass('goto1a');
      $('#down_arrow').addClass('goto1b');
 
      $('#dig_deeper').addClass('on');


      $('#section1navitem2').addClass('on');
      $('#section1navitem3').removeClass('on');
    });

    $('#section1navitem3').click(function(){ // if #section1navitem3 (Key Features) is clicked 
      $("#text-block").text("This Key Features (section 1b) content is visible to the user but is not useful for SEO purposes it gets switched out via javascript.");

      $('#section1-navitem1').addClass('on');
      $('#section1-navitem2').removeClass('on');
      $('#section1navitem2').addClass('on');
      $('#section1navitem3').removeClass('on');

      document.getElementById("table").style.display="none";
      document.getElementById("latest-in-touch").style.display="block";
      document.getElementById("key-features").style.display="none";

    });

    $('#section1navitem3').click(function(){ // if #section1navitem3 (Key Features) is clicked 

      $('#up_arrow').addClass('on');
      $('#up_arrow').removeClass('goto1');
      $('#up_arrow').addClass('goto1a');

      $('#down_arrow').removeClass('on');
      $('#down_arrow').removeClass('goto1a');
      $('#down_arrow').removeClass('goto1b');

      $('#dig_deeper').removeClass('on');

      $('#section1navitem2').removeClass('on');
      $('#section1navitem3').addClass('on');
    });

    $('#section2navitem').click(function(){ // if #section2navitem (Gallery) clicked 
      $("#text-block").text("This Gallery (section 2 - clicked) content is visible to the user but is not useful for SEO purposes it gets switched out via javascript.");

      $('#section1-navitem1').removeClass('on');
      $('#section1-navitem2').addClass('on');
      $('#section1navitem2').removeClass('on');
      $('#section1navitem3').addClass('on');

      document.getElementById("table").style.display="none";
      document.getElementById("latest-in-touch").style.display="none";
      document.getElementById("key-features").style.display="block";

    });

    $('#section2navitem').click(function(){ // if #section2navitem (Gallery) clicked 


      $("#text-block").style.visibility='hidden';

      $('#tablemenu').removeClass('section1');
      $('#section1').removeClass('section1');
      $('#section1navitem').removeClass('on');

      $('#tablemenu').addClass('section2');
      $('#section2').addClass('section2');
      $('#section2navitem').addClass('on');

      $('#tablemenu').removeClass('section3');
      $('#section3').removeClass('section3');
      $('#section3navitem').removeClass('on');

      $('#up_arrow').removeClass('on');
      $('#down_arrow').removeClass('on');
      $('#dig_deeper').removeClass('on');

      document.getElementById("table").style.display="none";
      document.getElementById("latest-in-touch").style.display="none";
      document.getElementById("key-features").style.display="none";
      document.getElementById("gallery").style.display="block";
      document.getElementById("contact").style.display="none";

    });

    $('#section3navitem').click(function(){ // if #section3navitem (Contact) is clicked 

      $('#tablemenu').removeClass('section1');
      $('#section1').removeClass('section1');
      $('#section1navitem').removeClass('on');

      $('#tablemenu').removeClass('section2');
      $('#section2').removeClass('section2');
      $('#section2navitem').removeClass('on');

      $('#tablemenu').addClass('section3');
      $('#section3').addClass('section3');
      $('#section3navitem').addClass('on');

      $('#up_arrow').removeClass('on');
      $('#down_arrow').removeClass('on');
      $('#dig_deeper').removeClass('on');


      document.getElementById("contact").innerHTML = $contactContent;

      document.getElementById("table").style.display="none";

      //document.getElementById("contact").innerHTML = $contactContent;

      document.getElementById("table").style.display="none";
      document.getElementById("latest-in-touch").style.display="none";
      document.getElementById("key-features").style.display="none";
      document.getElementById("gallery").style.display="block";
      document.getElementById("contact").style.display="none";

    });

  $win.on("scroll", function () { // on scroll do this
    //console.log($(this).scrollTop());

    if ( ($(this).scrollTop() == winvh) ){ // if scrolled to gallery

      $('#tablemenu').removeClass('section1');
      $('#section1').removeClass('section1');
      $('#section1navitem').removeClass('on');

      $('#tablemenu').addClass('section2');
      $('#section2').addClass('section2');
      $('#section2navitem').addClass('on');

      $('#tablemenu').removeClass('section3');
      $('#section3').removeClass('section3');
      $('#section3navitem').removeClass('on');

      $('#up_arrow').removeClass('on');
      $('#down_arrow').removeClass('on');
      $('#dig_deeper').removeClass('on');

      document.getElementById("content-information").innerHTML = $galleryContent;

      document.getElementById("table").style.display="none";
      document.getElementById("gallery").style.display="block";
      //document.getElementById("content-information").innerHTML = $galleryContent;

      document.getElementById("table").style.display="none";document.getElementById("table").style.display="none";
      document.getElementById("latest-in-touch").style.display="none";
      document.getElementById("key-features").style.display="none";document.getElementById("gallery").style.display="block";
      document.getElementById("contact").style.display="none";

    }

    else if ( ($(this).scrollTop() > winvh) && ($(this).scrollTop() <= winvh*2) ){ // if scrolled to contact

      $('#tablemenu').removeClass('section1');
      $('#section1').removeClass('section1');
      $('#section1navitem').removeClass('on');

      $('#tablemenu').removeClass('section2');
      $('#section2').removeClass('section2');
      $('#section2navitem').removeClass('on');

      $('#tablemenu').addClass('section3');
      $('#section3').addClass('section3');
      $('#section3navitem').addClass('on');

      $('#up_arrow').removeClass('on');
      $('#down_arrow').removeClass('on');
      $('#dig_deeper').removeClass('on');

      document.getElementById("content-information").innerHTML = $contactContent;

      document.getElementById("table").style.display="none";
      //document.getElementById("content-information").innerHTML = $contactContent;

      document.getElementById("table").style.display="none";
      document.getElementById("latest-in-touch").style.display="none";
      document.getElementById("key-features").style.display="none";
      document.getElementById("gallery").style.display="none";
      document.getElementById("contact").style.display="block";

    }

    else { // if scrolled to Multitouch Table

      $('#tablemenu').addClass('section1');
      $('#section1').addClass('section1');
      $('#section1navitem').addClass('on');

      $('#tablemenu').removeClass('section2');
      $('#section2').removeClass('section2');
      $('#section2navitem').removeClass('on');

      $('#tablemenu').removeClass('section3');
      $('#section3').removeClass('section3');
      $('#section3navitem').removeClass('on');

      $('#section1navitem').addClass('on');

      $('#up_arrow').removeClass('on');
      $('#up_arrow').removeClass('goto1');
      $('#up_arrow').removeClass('goto1a');

      $('#down_arrow').addClass('on');
      $('#down_arrow').addClass('goto1a');
      $('#down_arrow').removeClass('goto1b');

      $('#dig_deeper').addClass('on');


      var $tableContent = '<div id="table"><div id="text-block">This Multitouch Table (section 1) content is visible to the user but is not useful for SEO purposes it gets switched out via javascript.</div></div>';
      document.getElementById("content-information").innerHTML = $tableContent;

      document.getElementById("table").style.display="block";

      document.getElementById("table").style.display="block";
      document.getElementById("latest-in-touch").style.display="none";
      document.getElementById("key-features").style.display="none";
      document.getElementById("gallery").style.display="none";
      document.getElementById("contact").style.display="none";
    }
    

  }).on("resize", function(){ // if the user resizes the window
     winvh = $(this).height(); // get the new height value
  }); 
  
});

$(function() { // this does the smooth scrolling for anchor click events
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 750);
        return false;
      }
    }
  });
});

