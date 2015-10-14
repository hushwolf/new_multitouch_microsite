// SVG Animations which include timing and viewbox
// ==========================================================================

window.onload = function () {
	var s = Snap("svg");
    var g = s.group();
    var hand = Snap.load("hand icon.svg", function (loadedFragment) {
        g.append( loadedFragment);
        g.transform("t6, -201");
        setTimeout(function(){g.animate({opacity:"0"}, 1000)}, 2000);
    });

    //s.attr({viewBox: "0 0 1000 1000"});
    //s.attr("preserveAspectRatio", "xMinYMin meet");
    var c1 = s.circle(500, 250, 8).attr({
        fill: 'none',
        stroke: 'white',
        strokeWidth: 4
    });

    var c2 = c1.clone();
    var c3 = c1.clone();
    var c4 = c1.clone();
    var c5 = c1.clone();
    var c6 = c1.clone();
    var c7 = c1.clone();
    var c8 = c1.clone();
    var c9 = c1.clone();
    var c10 = c1.clone();
    var c11 = c1.clone();
    var c12 = c1.clone();

    c1.animate({
        r: 1000
    }, 6000);

    var c2_animate = function () {
        c2.animate({
            r: 1000
        }, 6000);
    };
    var c3_animate = function () {
        c3.animate({
            r: 1000
        }, 6000);
    };
    var c4_animate = function () {
        c4.animate({
            r: 1000
        }, 6000);
    };
    var c5_animate = function () {
        c5.animate({
            r: 1000
        }, 6000);
    };
    var c6_animate = function () {
        c6.animate({
            r: 1000
        }, 6000);
    };
    var c7_animate = function () {
        c7.animate({
            r: 1000
        }, 6000);
    };
    var c8_animate = function () {
        c8.animate({
            r: 1000
        }, 6000);
    };
    var c9_animate = function () {
        c9.animate({
            r: 1000
        }, 6000);
    };
    var c10_animate = function () {
        c10.animate({
            r: 1000
        }, 6000);
    };
    var c11_animate = function () {
        c11.animate({
            r: 1000
        }, 6000);
    };
    var c12_animate = function () {
        c12.animate({
            r: 1000
        }, 6000);
    };

    setTimeout(c2_animate, 250);
    setTimeout(c3_animate, 500);
    setTimeout(c4_animate, 750);
    setTimeout(c5_animate, 1000);
    setTimeout(c6_animate, 1250);
    setTimeout(c7_animate, 1500);
    setTimeout(c8_animate, 1750);
    setTimeout(c9_animate, 2000);
    setTimeout(c10_animate, 2250);
    setTimeout(c11_animate, 2500);
    setTimeout(c12_animate, 2750);

    setTimeout(function(){c1.animate({opacity:"0"}, 2500)}, 1000);
    setTimeout(function(){c2.animate({opacity:"0"}, 2600)}, 1200);
    setTimeout(function(){c3.animate({opacity:"0"}, 2700)}, 1400);
    setTimeout(function(){c4.animate({opacity:"0"}, 2800)}, 1600);
    setTimeout(function(){c5.animate({opacity:"0"}, 2900)}, 1800);
    setTimeout(function(){c6.animate({opacity:"0"}, 3000)}, 2000);
    setTimeout(function(){c7.animate({opacity:"0"}, 3100)}, 2200);
    setTimeout(function(){c8.animate({opacity:"0"}, 3200)}, 2400);
    setTimeout(function(){c9.animate({opacity:"0"}, 3300)}, 2600);
    setTimeout(function(){c10.animate({opacity:"0"}, 3400)}, 2800);
    setTimeout(function(){c11.animate({opacity:"0"}, 3500)}, 3000);
    setTimeout(function(){c12.animate({opacity:"0"}, 3600)}, 3200);

    var text1 = 'Touch the world...';
    var text2 = '...with the';
    var text3 = 'PLATFORM 55 4K P-CAP MULTITOUCH TABLE' 

    var text_animate1 = function () {  
        var svgTextElement = s.text(500, 250, text1).attr({ fill: 'white', fontSize: '35px', opacity: "0", "text-anchor": "middle"});
        setTimeout( function() {svgTextElement.animate({opacity: "1"}, 500)}, 1500);
        setTimeout(function(){svgTextElement.animate({opacity:"0"}, 500)}, 2500);
    }
    setTimeout(text_animate1, 1900);

    var text_animate2 = function () {
        var svgTextElement2 = s.text(500, 250, text2).attr({ fill: 'white', fontSize: '35px', opacity: "0", "text-anchor": "middle"});
        setTimeout( function() {svgTextElement2.animate({opacity: "1"}, 500)}, 2500);
        setTimeout(function(){svgTextElement2.animate({opacity:"0"}, 1000)}, 3500);
    }
    setTimeout(text_animate2, 2900);

    var text_animate3 = function () {
        var svgTextElement3 = s.text(500, 300, text3).attr({ fill: 'white', fontSize: '35px', opacity: "0", "text-anchor": "middle"});
        setTimeout( function() {svgTextElement3.animate({opacity: "1"}, 500)}, 2500);
        setTimeout(function(){svgTextElement3.animate({opacity:"0"}, 2000)}, 3000);
    }
    setTimeout(text_animate3, 2900);

    setTimeout(function(){s.animate({opacity: 0}, 1500)}, 7200);

    setTimeout(function() {
        $('svg').remove();}, 8700);

    setTimeout(function(){
        var video = document.createElement('video');
        video.id = 'video';
        document.body.appendChild(video);
        var source = document.createElement('source');
        source.setAttribute('src', '/videos/Presenter.mp4');
        document.getElementById('video').appendChild(source);
        document.getElementById('video').style.height = "100%";
        document.getElementById('video').style.width = "50%";
        document.getElementById('video').setAttribute('style', '');
        document.getElementById('video').setAttribute('autoplay', 'autoplay');
        $('video').bind('ended', function() {
            $(this).animate({opacity: 0}, 1000); })
    }, 7200);

    setTimeout(function(){
        $('video').remove();}, 14000);

    //Page directing code, includes mouse scrolling events
    // =============================================================================================================
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


      // Nav button content
        // ================================================================================================================
        $('#section1navitem1').click(function(){ // if #section1navitem1 clicked 
            $('#section1navitem2').show();
            $('#section1navitem3').show();

            $("#content-information").text("This section 1 content is visible to the user but is not useful for SEO purposes it gets switched out via javascript.");

            $('#up_arrow').removeClass('on');
            $('#up_arrow').removeClass('goto1');
            $('#up_arrow').removeClass('goto1a');

            $('#down_arrow').addClass('on');
            $('#down_arrow').addClass('goto1a');
            $('#down_arrow').removeClass('goto1b');

            $('#dig_deeper').addClass('on');

            $('#section1navitem2').addClass('on');
            $('#section1navitem3').addClass('on');
        });

        $('#up_arrow').click(function(){ // if #up_arrow clicked
          
                if ( $(this).hasClass("goto1") ) {
              $("#content-information").text("This section 1 content is visible to the user but is not useful for SEO purposes it gets switched out via javascript.");

                $('#up_arrow').removeClass('on');
                $('#up_arrow').removeClass('goto1');
                $('#up_arrow').removeClass('goto1a');

                $('#down_arrow').addClass('on');
                $('#down_arrow').addClass('goto1a');
                $('#down_arrow').removeClass('goto1b');

              $('#dig_deeper').addClass('on');

              $('#section1navitem2').removeClass('on');
              $('#section1navitem3').removeClass('on');
            } else if ( $(this).hasClass("goto1a") ) {
                $("#content-information").text("This section 1a content is visible to the user but is not useful for SEO purposes it gets switched out via javascript.");

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

        });

        $('#down_arrow').click(function(){ // if #down_arrow clicked
          
                if ( $(this).hasClass("goto1a") ) {
                $("#content-information").text("This section 1a content is visible to the user but is not useful for SEO purposes it gets switched out via javascript.");

                $('#up_arrow').addClass('on');
                $('#up_arrow').addClass('goto1');
                $('#up_arrow').removeClass('goto1a');

                $('#down_arrow').addClass('on');
                $('#down_arrow').removeClass('goto1a');
                $('#down_arrow').addClass('goto1b');

              $('#dig_deeper').addClass('on');

              $('#section1navitem2').addClass('on');
              $('#section1navitem3').removeClass('on');
            } else if ( $(this).hasClass("goto1b") ) {
              $("#content-information").text("This section 1b content is visible to the user but is not useful for SEO purposes it gets switched out via javascript.");

                $('#up_arrow').addClass('on');
                $('#up_arrow').removeClass('goto1');
                $('#up_arrow').addClass('goto1a');

                $('#down_arrow').removeClass('on');
                $('#down_arrow').removeClass('goto1a');
                $('#down_arrow').removeClass('goto1b');

              $('#dig_deeper').removeClass('on');

              $('#section1navitem2').removeClass('on');
              $('#section1navitem3').addClass('on');
            }

        });

        $('#section1navitem2').click(function(){ // if #section1navitem2 clicked 
          $("#content-information").text("This section 1a content is visible to the user but is not useful for SEO purposes it gets switched out via javascript.");

          $('#up_arrow').addClass('on');
          $('#up_arrow').addClass('goto1');
          $('#up_arrow').removeClass('goto1a');

          $('#down_arrow').addClass('on');
          $('#down_arrow').removeClass('goto1a');
          $('#down_arrow').addClass('goto1b');
     
          $('#dig_deeper').addClass('on');

          $('#section1navitem1').removeClass('on');
          $('#section1navitem2').addClass('on');
          $('#section1navitem3').removeClass('on');
        });

        $('#section1navitem3').click(function(){ // if #section1navitem3 clicked 
          $("#content-information").text("This section 1b content is visible to the user but is not useful for SEO purposes it gets switched out via javascript.");

          $('#up_arrow').addClass('on');
          $('#up_arrow').removeClass('goto1');
          $('#up_arrow').addClass('goto1a');

          $('#down_arrow').removeClass('on');
          $('#down_arrow').removeClass('goto1a');
          $('#down_arrow').removeClass('goto1b');

          $('#dig_deeper').RemoveClass('on');

          $('#section1navitem1').removeClass('on');
          $('#section1navitem2').removeClass('on');
          $('#section1navitem3').addClass('on');
        });

      $win.on("scroll", function () { // on scroll do this
        //console.log($(this).scrollTop());

        if ( ($(this).scrollTop() <= winvh) ){ // if scrolled to multitouch table
            $("#content-information").text("This section 1 content is visible to the user but is not useful for SEO purposes it gets switched out via javascript.");

            $('#tablemenu').addClass('section1');
            $('#section1').addClass('section1');
            $('#section1navitem').addClass('on');

            $('#tablemenu').removeClass('section2');
            $('#section2').addClass('section2');
            $('#section2navitem').removeClass('on');

            $('#tablemenu').removeClass('section3');
            $('#section3').addClass('section3');
            $('#section3navitem').removeClass('on');

            $('#up_arrow').removeClass('on');
            $('#up_arrow').removeClass('goto1');
            $('#up_arrow').removeClass('goto1a');

            $('#down_arrow').addClass('on');
            $('#down_arrow').addClass('goto1a');
            $('#down_arrow').removeClass('goto1b');

          $('#dig_deeper').addClass('on');
            }

            else if ( ($(this).scrollTop() > winvh) && ($(this).scrollTop() <= winvh*2) ){ // iff scrolled to gallery
                $("#content-information").text("This section 2 content is visible to the user but is not useful for SEO purposes it gets switched out via javascript.");

                $('#tablemenu').addClass('section2');
                $('#section2').addClass('section2');
            $('#section2navitem').addClass('on');

            $('#tablemenu').removeClass('section1');
            $('#section1').addClass('section2');
            $('#section1navitem').removeClass('on');

            $('#tablemenu').removeClass('section3');
            $('#section3').addClass('section3');
            $('#section3navitem').removeClass('on');

            $('#up_arrow').removeClass('on');
            $('#down_arrow').removeClass('on');
          $('#dig_deeper').removeClass('on');
            }

            else { // if scrolled to contact
                $("#content-information").text("This section 3 content is visible to the user but is not useful for SEO purposes it gets switched out via javascript.");

                $('#tablemenu').addClass('section3');
                $('#section3').addClass('section3');
            $('#section3navitem').addClass('on');

            $('#tablemenu').removeClass('section1');
            $('#section1').addClass('section2');
            $('#section1navitem').removeClass('on');

            $('#tablemenu').removeClass('section2');
            $('#section2').addClass('section2');
            $('#section2navitem').removeClass('on');

            $('#section1navitem').removeClass('on');

            $('#up_arrow').removeClass('on');
            $('#down_arrow').removeClass('on');
          $('#dig_deeper').removeClass('on');
            }
            

      }).on("resize", function(){ // if the user resizes the window
         vh = $(this).height(); // get the new height value
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
}