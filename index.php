<!DOCTYPE html>
<html>

<head>

	<title>New Multi-touch Table Microsite</title>

	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	
	<link rel="stylesheet" type="text/css" href="css/kube.min.css" />
	<link href='http://fonts.googleapis.com/css?family=Roboto:900,700,400,300' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="style.css"/>

	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.js"></script>	
 	<script src="js/kube.min.js"></script>
	<script src="snap.svg.js"></script>
	<script src="js/svg-n-movie.js"></script>
	<script src="main.js"></script>

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
 

<div class="svg_animation">
	<svg id="svg"></svg>
	<svg id="svg2"></svg>
</div>


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
		<a id="socialicon" href="">
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
		<div id="dig_deeper" class="on">
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

	</section>

</div>

</body>
</html>