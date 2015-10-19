// SVG Animations which include timing and viewbox
// ==========================================================================

window.onload = function () {
    $('#skip_animation').click(function() {
        $('#skip_animation').fadeOut(250);
        $('svg').fadeOut(250);
        $('video').remove();
        $('html, body').attr('style', 'overflow-y: visible');
    });

    var window_width = window.innerWidth;
    var window_height = window.innerHeight;

	var s = Snap("svg");
    var g = s.group();
    var hand = Snap.load("/images/hand icon_centered.svg", function (loadedFragment) {
        g.append( loadedFragment);
        setTimeout(function(){g.animate({opacity:"0"}, 1000)}, 2000);
    });
    setTimeout(function(){
        var c1 = s.circle((window_width/2), (window_height/2), 8).attr({
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
        var text3 = 'PLATFORM 55 4K P-CAP MULTITOUCH TABLE'; 

        var text_animate1 = function () {  
            var svgTextElement = s.text((window_width/2), (window_height/2)-50, text1).attr({ fill: 'white', fontSize: '35px', opacity: "0", "text-anchor": "middle"});
            setTimeout( function() {svgTextElement.animate({opacity: "1"}, 500)}, 1500);
            setTimeout(function(){svgTextElement.animate({opacity:"0"}, 500)}, 2500);
        }
        setTimeout(text_animate1, 1900);

        var text_animate2 = function () {
            var svgTextElement2 = s.text((window_width/2), (window_height/2)-50, text2).attr({ fill: 'white', fontSize: '35px', opacity: "0", "text-anchor": "middle"});
            setTimeout( function() {svgTextElement2.animate({opacity: "1"}, 500)}, 2500);
            setTimeout(function(){svgTextElement2.animate({opacity:"0"}, 1000)}, 3500);
        }
        setTimeout(text_animate2, 2900);

        var text_animate3 = function () {
            var svgTextElement3 = s.text((window_width/2), (window_height/2)+50, text3).attr({ fill: 'white', fontSize: '35px', opacity: "0", "text-anchor": "middle"});
            setTimeout( function() {svgTextElement3.animate({opacity: "1"}, 500)}, 2500);
            setTimeout(function(){svgTextElement3.animate({opacity:"0"}, 2000)}, 3000);
        }
        setTimeout(text_animate3, 2900);

        setTimeout(function(){s.animate({opacity: 0}, 1500)}, 7200);

        setTimeout(function() {
            $('svg').remove();}, 8700);

        setTimeout(function(){
            var source = document.createElement('source');
            source.setAttribute('src', '/videos/Presenter.mp4');
            if ($('video').length == 0)
            {
                return;
            }
            else 
            {
                document.getElementById('video').appendChild(source);
                document.getElementById('video').style.height = "100%";
                document.getElementById('video').style.width = "50%";
                document.getElementById('video').setAttribute('style', '');
                document.getElementById('video').setAttribute('autoplay', 'autoplay');
                $('video').bind('ended', function() {
                    $(this).animate({opacity: 0}, 1500); });
            }
        }, 7200);

        setTimeout(function(){
            $('#skip_animation').fadeOut(1500);
        }, 7200);  

        setTimeout(function(){
            $('video').remove();}, 16000);

        setTimeout(function(){
            $('html, body').attr('style','overflow: visible');}, 3000);
    }, 500);

    $('#inquiry').click(function() {
        window.open('http://ideum.com/contact');
    });

    $('#sales').click(function() {
        window.location.href = 'mailto:sales@ideum.com';
    });
}