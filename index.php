<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>

	<title>Newer Multi-touch Table Microsite</title>

	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no minimal-ui">
	
	<link rel="stylesheet" type="text/css" href="css/style.css"/>
	<link rel="stylesheet" type="text/css" href="css/normalize.css"/>
	<link rel="stylesheet" type="text/css" href="css/skeleton.css"/>
	<link rel="stylesheet" href="css/colorbox.css" />

	<link href='https://fonts.googleapis.com/css?family=Lato:3900,700,400,300' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Roboto:900,700,400,300' rel='stylesheet' type='text/css'>

	<!-- <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.js"></script> -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

	<script src="snap.svg.js"></script>
	<script src="js/svg-n-movie.js"></script>
	<script src="js/main.js"></script>
	<script src="js/jquery.colorbox.js"></script>

	<script>
		$(document).ready(function(){
			//Examples of how to assign the Colorbox event to elements
			$(".group1").colorbox({rel:'group1'});
			$(".group2").colorbox({rel:'group2', transition:"fade"});
			$(".group3").colorbox({rel:'group3', transition:"none", width:"75%", height:"75%"});
			$(".group4").colorbox({rel:'group4', slideshow:true});
			$("a.gallery").colorbox({rel:"group1"});
			$(".ajax").colorbox();
			$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
			$(".vimeo").colorbox({iframe:true, innerWidth:500, innerHeight:409});
			$(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});
			$(".inline").colorbox({inline:true, width:"50%"});
			$(".callbacks").colorbox({
				onOpen:function(){ alert('onOpen: colorbox is about to open'); },
				onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
				onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
				onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
				onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
			});

			$('.non-retina').colorbox({rel:'group5', transition:'none'})
			$('.retina').colorbox({rel:'group5', transition:'none', retinaImage:true, retinaUrl:true});
			
			//Example of preserving a JavaScript event for inline calls.
			$("#click").click(function(){ 
				$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
				return false;
			});
		});
	</script>

</head>

<body>
<!-- this will be mobile menu -->
<!--
<div class="navigation-toggle" data-tools="navigation-toggle" data-target="#tablemenu-mobile">
	<a id="ideumicon-mobile" href="http://ideum.com" target="_blank">
		<img src="images/ideum_logo.png" style="float:right;max-height:40px;">
	</a>
	<span>Menu</span>
</div>
<nav id="tablemenu-mobile">
	<ul>
		<li id="section1navitem" class="on"><a id="section1navitem1" href="#section1">The Multitouch Table</a>
			<ul>
				<li><a href="#" id="section1navitem2">LATEST IN TOUCH</a></li>
				<li><a href="#" id="section1navitem3">KEY FEATURES</a></li>
			</ul>
		</li>	
		<li id="section2navitem"><a href="#section2">Gallery</a></li>
		<li id="section3navitem"><a href="#section3">Contact</a></li>
	</ul>
</nav>
 -->
 
<!--
<div class="skip_animation">
	<a id="skip_animation">Skip Animation</a>
</div>

<div class="svg_animation">
	<svg id="svg"></svg>
</div>

<video id="video">
</video>
-->

<div class="row" id="starting_links">

	<div class="two columns left-side" id="logo">

		<a id="ideumicon" href="http://ideum.com" target="_blank">
			<img src="images/ideum_logo.png">
		</a>

	</div>

	<div class="eight columns">&nbsp;<!-- nothing to see here - placeholder -->&nbsp;</div>
	
	<div class="two columns right-side" id="utility">

		<a id="downloadicon" href="http://ideum.com/spec-sheets/Ideum-Specs-Platform.pdf">
			<img src="images/download.png" height="64px" width="64px">
		</a>
		<a id="socialicon" href="#">
			<img src="images/share_this.png">
		</a>
		<a id="tableicon" href="http://ideum.com/touch-tables/platform/" target="_blank">
			<img src="images/table_icon.png">
		</a>

	</div>
	
</div>

<div class="row" id="content-display">

	<div class="two columns left-side" id="menu">
		
		<nav id="tablemenu" class="nav">
			<ul>
				<li id="section1navitem" class="on"><a id="section1navitem1" href="#section1">The Multitouch Table</a>
					<ul>
						<li id="section1-navitem1"><a href="#" id="section1navitem2">LATEST IN TOUCH</a></li>
						<li id="section1-navitem2"><a href="#" id="section1navitem3">KEY FEATURES</a></li>
					</ul>
				</li>	
				<li id="section2navitem"><a href="#section2">Gallery</a></li>
				<li id="section3navitem"><a href="#section3">Contact</a></li>
			</ul>
		</nav>
	</div>

	<div class="eight columns offset-by-two" id="content-information">

		<div id="table">

			<div id="text-block">
				The Platform 55 4K P-Cap Multitouch Table uses the latest in touch technology, graphics performance and industrial design for a world-class interactive experience. The Platform 55 is the new standard in quality and performance for any application.
			</div>

		</div>

		<div id="latest-in-touch">

		</div>

		<div id="key-features">

		</div>

		<div id="gallery" class="row">
			<div class="one-fourth" id="fish-n-ships">
				<div class="v-center-container">
					<a class="touchme v-center-element gallery" href="/images/gallery/fish-n-ships.jpg" title="Replace this with contextually appropriate caption."></a>
					<a class="gallery" href="http://ideum.com/wp-content/uploads/2014/09/inka-1800x800.jpg" title="Replace this with contextually appropriate caption."></a>
					<a class="gallery" href="http://ideum.com/wp-content/uploads/2015/03/medinet-habu-header.jpg" title="Replace this with contextually appropriate caption."></a>
				</div>
			</div>
			<div class="one-fourth" id="welding">
				<div class="v-center-container">
					<a class="touchme v-center-element gallery" href="/images/gallery/welding.jpg" title="Replace this with contextually appropriate caption."></a>
				</div>
			</div>
			<div class="one-fourth" id="gestures">
				<div class="v-center-container">
					<a class="touchme v-center-element gallery" href="/images/gallery/gestures.jpg" title="Replace this with contextually appropriate caption."></a>
				</div>
			</div>
			<div class="one-fourth" id="bugged">
				<div class="v-center-container">
					<a class="touchme v-center-element gallery" href="/images/gallery/bugged.jpg" title="Replace this with contextually appropriate caption."></a>
				</div>
			</div>
		</div>

	</div>

	<div class="two columns right-side" id="scrollnav">

		<div class="up-down-arrows">
			<div id="up_arrow">
				<img src="images/up_arrow.png">
			</div>
			<div id="down_arrow" class="on goto1a">
				<img src="images/down_arrow.png">
			</div>
			<div id="dig_deeper" class="on">
				<p>DIG DEEPER</p>
			</div>
		</div>

	</div>

</div>

<section class="row" id="content-scroller">

	<a class="anchorlink" name="section1"></a>
	<section class="one-column" id="section1">

		<div id="content-display-1" class="text-display">
			This section 1 content is hidden from the user but is useful for SEO purposes. It is the counterpart of the text found in the javascript below.
		</div>

		<div id="content-display-1a" class="text-display">
			This section 1a content is hidden from the user but is useful for SEO purposes. It is the counterpart of the text found in the javascript below.
		</div>

		<div id="content-display-1b" class="text-display">
			This section 1b content is hidden from the user but is useful for SEO purposes. It is the counterpart of the text found in the javascript below.
		</div>

	</section>

	<a class="anchorlink" name="section2"></a>
	<section  class="one-column" id="section2">

		<div id="content-display-2" class="text-display">
			This Gallery (section2) content is hidden from the user but is useful for SEO purposes. It is the counterpart of the text found in the javascript below.
		</div>

	</section>

	<a class="anchorlink" name="section3"></a>
	<section class="one-column" id="section3">

		<div id="content-display-3" class="text-display">
			This Contact (section 3) content is hidden from the user but is useful for SEO purposes. It is the counterpart of the text found in the javascript below.
		</div>

	</section>

</section>

</body>
</html>