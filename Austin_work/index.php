<!DOCTYPE html>
<html>

<head>

	<title>New Multi-touch Table Microsite</title>

	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	
	<link rel="stylesheet" type="text/css" href="css/kube.min.css" />
	<link href='https://fonts.googleapis.com/css?family=Lato:300' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Roboto:900,700,400,300' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="style.css"/>
	<link rel="stylesheet" href="css/colorbox.css" />

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	<script src="js/colorbox-master/jquery.colorbox-min.js"></script>	
 	<script src="js/kube.min.js"></script>
	<script src="js/snap.svg.js"></script>
	
	<script src="js/svg-n-movie.js"></script>
	<script src="js/main.js"></script>
		<script>
			$(document).ready(function(){
				//Examples of how to assign the Colorbox event to elements
				$(".group1").colorbox({rel:'group1'});
				$(".group2").colorbox({rel:'group2', transition:"fade"});
				$(".group3").colorbox({rel:'group3', transition:"none", width:"75%", height:"75%"});
				$(".group4").colorbox({rel:'group4', slideshow:true});
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
				$('.share-dialog-tab-desk').colorbox({inline:true, width:"80%", height:"80%"});
				
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
<div class="skip_animation">
	<a id="skip_animation">Skip Animation</a>
</div>
<div class="svg_animation">
	<svg id="svg"></svg>
</div>

<video id="video">
</video>

<div class="units-row units-split" id="starting_links">

	<div class="unit-push-10 unit-20">
		<a id="ideumicon" href="http://ideum.com" target="_blank">
			<img src="images/ideum_logo.png">
		</a>
	</div>
	
	<div class="unit-push-60 unit-30">
		<a id="downloadicon" href="">
			<img src="images/download.png" height="64px" width="64px">
		</a>
		<a id="socialicon" class="tablet-n-desktop share-dialog-tab-desk cboxElement" href="#home-share">
			<img src="images/share_this.png">
		</a>
		<a id="tableicon" href="http://ideum.com/touch-tables/platform/" target="_blank">
			<img src="images/table_icon.png">
		</a>
	</div>
</div>

<section class="unit-push-10 unit-20" id="menu">
	<nav id="tablemenu" class="nav">
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
</section>

<section class="unit-push-40 unit-20" id="text">
	<div id="content-information">This is pre-click content is hidden from the user but is useful for SEO purposes. It is the counterpart of the text found in the javascript below.</div>
</section>

<section id="scrollnav" class="unit-push-80 unit-5">

	<div class="up-down-arrows">
		<div id="up_arrow">
			<img src="images/up_arrow.png">
		</div>
		<div id="down_arrow" class="on goto1a">
			<img src="images/down_arrow.png">
		</div>
		<div id="dig_deeper" class="on" width="10%">
			<p>DIG DEEPER</p>
		</div>
	</div>
</section>

<div class="units-row units-split" id="content-scroller">
	<a class="anchorlink" name="section1"></a>
	<section id="section1">

		<div id="content-display-1" class="text-display unit-push-40 unit-25">
			This section 1 content is hidden from the user but is useful for SEO purposes. It is the counterpart of the text found in the javascript below.
		</div>
		<div id="content-display-1a" class="text-display unit-push-40 unit-25">
			This section 1a content is hidden from the user but is useful for SEO purposes. It is the counterpart of the text found in the javascript below.
		</div>
		<div id="content-display-1b" class="text-display unit-push-40 unit-25">
			This section 1b content is hidden from the user but is useful for SEO purposes. It is the counterpart of the text found in the javascript below.
		</div>
	</section>

	<a class="anchorlink" name="section2"></a>
	<section id="section2">

		<div id="content-display-2" class="text-display unit-push-40 unit-25">
			This section 2 content is hidden from the user but is useful for SEO purposes. It is the counterpart of the text found in the javascript below.
		</div>
	</section>

	<a class="anchorlink" name="section3"></a>
	<section id="section3">

		<div id="content-display-3" class="text-display unit-push-40 unit-25">
			This section 3 content is hidden from the user but is useful for SEO purposes. It is the counterpart of the text found in the javascript below.
		</div>
		<div id="ready_start">
			<p style="font-size: 40px; text-align: center;">Ready to start?</p>
			<img id="nm_phone_nmbr" src="images/nm_nbr.png"/>&nbsp;&nbsp;&nbsp;&nbsp;(505) 702-1110 ext.1</br>
			<img id="us_can_phone_nmbr" src="images/us_can.png"/>&nbsp;&nbsp;&nbsp;&nbsp;(855) 898-6824</br>
			<img id="inquiry" src="images/web_default.png" onmouseover="this.src='images/web_selected.png'" onmouseout="this.src='images/web_default.png'"/>&nbsp;&nbsp;&nbsp;&nbsp;online inquiry form</br>
			<img id="sales" src="images/email_default.png" onmouseover="this.src='images/email_selected.png'" onmouseout="this.src='images/email_default.png'"/>&nbsp;&nbsp;&nbsp;&nbsp;sales@ideum.com</br></br>
			<p style="text-align: center;">Platforms are sold domestically and internationally.</br>We also rent the Platforms in the US and Canada.</p>
		</div>
	</section>
</div>

<!-- begin hidden content for front-page-share -->
<div style='display:none'>
  <div id='home-share' class="share-dialog">
    <img class="ideum-icon" src="/images/social/logo.png" alt="Ideum" title="Ideum">
    <p>Like what you see? Share this.</p>
    <!-- Facebook -->
    <a href="http://www.facebook.com/sharer.php?u=http%3A%2F%2Fideum.com%2F" target="_blank"><img class="sharing-icon" 
    src="/images/social/facebook.png" alt="Facebook"></a>
    <!-- Twitter -->
    <a href="http://twitter.com/share?url=http://ideum.com/&amp;text=Ideum - Exhibit Design + Multitouch Software and Hardware" target="_blank"><img class="sharing-icon" 
    src="/images/social/twitter.png" alt="Twitter"></a>
    <!-- Google+ -->
    <a href="https://plus.google.com/share?url=http%3A%2F%2Fideum.com%2F" target="_blank"><img class="sharing-icon" 
    src="/images/social/google.png" alt="Google"></a>
    <!-- LinkedIn -->
    <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=http%3A%2F%2Fideum.com%2F" target="_blank"><img class="sharing-icon" 
    src="/images/social/linkedin.png" alt="LinkedIn"></a>
    <!-- Pinterest -->
    <a href="javascript:void((function()%7Bvar%20e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8');e.setAttribute('src','http://assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);document.body.appendChild(e)%7D)());"><img class="sharing-icon" 
    src="/images/social/pinterest.png" alt="Pinterest"></a>
    <!-- Tumblr-->
    <a href="http://www.tumblr.com/share/link?url=http%3A%2F%2Fideum.com%2F" target="_blank"><img class="sharing-icon"  
    src="/images/social/tumblr.png" alt="Tumblr" /></a>
  </div>
</div>
<!-- end hidden content for page-share - revealed when user clicks 'Share This Page' link in footer -->

</body>
</html>