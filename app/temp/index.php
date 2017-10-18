<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <!-- Always force latest IE rendering engine (even in intranet) -->
	  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- Important stuff for SEO, don't neglect. (And don't dupicate values across your site!) -->
  	<title>Form</title>
  	<meta name="author" content="Dan Flynn" />
  	<meta name="description" content="A selection of commissioned and collaborative work by Dan Flynn." />
    <!-- Don't forget to set your site up: http://google.com/webmasters -->
  	<meta name="google-site-verification" content="" />
  	<meta name="Copyright" content="Dan Flynn" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- Favicon & Stylesheet -->
    <link rel="shortcut icon" href="img/favi.ico" />
    <link rel="stylesheet" href="css/style.css" type="text/css" />
    <!-- Modernizr. Add latest build if needed
    <script src="js/libs/modernizr.min.js" type="text/javascript"></script>
    -->
    <!-- Twitter: see https://dev.twitter.com/docs/cards/types/summary-card for details -->
  	<meta name="twitter:card" content="summary" />
  	<meta name="twitter:site" content="@function_Form" />
  	<meta name="twitter:title" content="Form" />
  	<meta name="twitter:description" content="A selection of commissioned and collaborative work by Dan Flynn." />
  	<meta name="twitter:url" content="http://url.com/img/socialcard" />
  	<!-- Facebook (and some others) use the Open Graph protocol: see http://ogp.me/ for details -->
  	<meta property="og:title" content="Form" />
  	<meta property="og:description" content="A selection of commissioned and collaborative work by Dan Flynn." />
  	<meta property="og:url" content="http://byForm.co/" />
  	<meta property="og:image" content="http://url.com/img/socialcard" />

    <script>
      function sendAJAX (){
        event.preventDefault();
        $( '#project' ).load( 'agi.html' )
      }

    </script>
  </head>

  <body>
    <!-- Main Page content -->
    <header>
      <ul>
        <li class="header-title" >
          <a href="agi.php" onclick="sendAJAX()">
            F01
            <div>&#x21C4;</div>
          </a>
        </li>
        <li class="header-selected">
          <a href="#" id="selected-work" >
            <div>&#x2192;</div>
            Selected work
          </a>
        </li>
        <li class="header-contact"><!--<a href="#">Phone</a> &#x2022; <a href="#">Email</a> &#x2022; <a href="#">Social</a>--></li>
      </ul>
    </header>
    <main id="image-index">
      <div class="closer">
      </div>
      <div id="index-hero">
        <section>
          <h2></h2>
          <h2 href="dada">A selection of <u>commissioned</u> and <u>collaborative</u> projects, with a specific focus on the intersection of <u>identity</u>, <u>motion</u> and <u>digital</u> design.</h2>
        </section>
        <div class="main-carousel">
          <a href="#"><img src="../img/AGI-homepage-2.jpg" alt="Alliance Graphique International"></a>
          <a href="#"><img src="../img/google-zoo-business-cards-2up.jpg" alt="Google Zoo"></a>
          <a href="#"><img src="../img/bb-wines-logo.jpg" alt="Bill Byron wines"></a>
          <a href="#"><img src="../img/ubank-debit-card-2-up-2.jpg" alt="UBANK"></a>
        </div>
        <div class="carousel-caption">
          <ul>
            <li class="carousel-link">View Project</li>
            <li class="caption"></li>
            <li class="carousel-status"></li>
          </ul>
        </div>
      </div>

      <div id="index-projects">
        <ul class="project-thumb" href="agi.php">
          <li><img src="../img/ubank-debit-card-2-up-2.jpg"></li>
          <li><img src="../img/ubank-forms.jpg"></li>
          <li><img src="../img/ubank-debit-card-2-up-2.jpg"></li>
          <li><img src="../img/ubank-forms.jpg"></li>
          <ul>
            <li>UBANK</li>
            <li>Digital, Identity</li>
            <li>&#x21B3; 2017</li>
          </ul>
        </ul>
        <ul class="project-thumb">
          <li><img src="../img/google-zoo-business-cards-2up.jpg"></li>
          <li><img src="../img/google-zoo-suite.jpg"></li>
          <li><img src="../img/google-zoo-logo-loop.gif"></li>
          <li><img src="../img/google-zoo-business-cards-2up.jpg"></li>
          <li><img src="../img/google-zoo-suite.jpg"></li>
          <li><img src="../img/google-zoo-logo-loop.gif"></li>
          <ul>
            <li>Google Zoo</li>
            <li>Digital, Identity</li>
            <li>&#x21B3; 2017</li>
          </ul>
        </ul>
        <ul class="project-thumb">
          <li><img src="../img/bb-wines-homepage-2.jpg"></li>
          <li><img src="../img/bb-wines-business-cards.jpg"></li>
          <li><img src="../img/bb-wines-logo.jpg"></li>
          <li><img src="../img/bb-wines-homepage-2.jpg"></li>
          <li><img src="../img/bb-wines-business-cards.jpg"></li>
          <li><img src="../img/bb-wines-logo.jpg"></li>
          <ul>
            <li>Bill Byron wines</li>
            <li>Digital, Identity, Motion</li>
            <li>&#x21B3; 2017</li>
          </ul>
        </ul>
        <ul class="project-thumb">
          <li><img src="../img/AGI-homepage-2.jpg"></li>
          <ul>
            <li>Bill Byron wines</li>
            <li>Digital, Identity, Motion</li>
            <li>&#x21B3; 2017</li>
          </ul>
        </ul>
        <ul class="project-thumb">
          <li><img src="../img/ubank-debit-card-2-up-2.jpg"></li>
          <ul>
            <li>Google Zoo</li>
            <li>Digital, Identity</li>
            <li>&#x21B3; 2017</li>
          </ul>
        </ul>
        <ul class="project-thumb">
          <li><img src="../img/google-zoo-logo-loop.gif"></li>
          <ul>
            <li>Google Zoo</li>
            <li>Digital, Identity</li>
            <li>&#x21B3; 2017</li>
          </ul>
        </ul>
        <ul class="project-thumb">
          <li><img src="../img/bb-wines-homepage-2.jpg"></li>
          <ul>
            <li>Google Zoo</li>
            <li>Digital, Identity</li>
            <li>&#x21B3; 2017</li>
          </ul>
        </ul>
        <ul class="project-thumb">
          <li><img src="../img/google-zoo-business-cards-2up.jpg"></li>
          <ul>
            <li>Google Zoo</li>
            <li>Digital, Identity</li>
            <li>&#x21B3; 2017</li>
          </ul>
        </ul>
        <ul class="project-thumb">
          <li><img src="../img/AGI-homepage-2.jpg"></li>
          <ul>
            <li>Bill Byron wines</li>
            <li>Digital, Identity, Motion</li>
            <li>&#x21B3; 2017</li>
          </ul>
        </ul>
      </div>
    </main>

    <!-- Sliders -->
    <div id="sliders">
    <!-- Archive Slider -->
      <div id="archive" >
        <div class="strip">
        <!--  <div class="circle">&#x2190;</div> -->
          <div class="sideways"><p>Index&nbsp;&#x2193;</p></div>
        </div>
        <main class="main">
          <section class="intro">
            <h1>Index</h1>
            <h2>An archive of work completed in various locations, with various teams over the past seven years. Updated frequently.</h2>
          </section>
          <section class="table">
            <ul class="rows">
              <li class="columns">
                <ul>
                  <li>Project&nbsp;&#x2193; </li>
                  <li>Scope&nbsp;&#x2193; </li>
                  <li>Year&nbsp;&#x2193; </li>
                </ul>
              </li>
              <li class="columns">
                <a href="#">
                  <ul>
                    <li>AGI</li>
                    <li>Digital</li>
                    <li>2017</li>
                  </ul>
                </a>
              <img src="../img/AGI-homepage-2.jpg">
              </li>
              <li class="columns">
                <a href="#">
                  <ul>
                    <li>Osko by BPAY</li>
                    <li>Identity, Motion</li>
                    <li>2017</li>
                  </ul>
                </a>
                <img src="../img/ubank-debit-card-2-up-2.jpg">
              </li>
              <li class="columns">
                <a href="#">
                  <ul>
                    <li>Foxtel</li>
                    <li>Digital, Identity, Motion</li>
                    <li>2017</li>
                  </ul>
                </a>
                <img src="../img/google-zoo-business-cards-2up.jpg">
              </li>
              <li class="columns">
                <a href="#">
                  <ul>
                    <li>Suncorp</li>
                    <li>Digital</li>
                    <li>2017</li>
                  </ul>
                </a>
                <img src="../img/ubank-debit-card-2-up-2.jpg">
              </li>
              <li class="columns">
                <a href="#">
                  <ul>
                    <li>UBANK</li>
                    <li>Identity, Motion</li>
                    <li>2017</li>
                  </ul>
                </a>
                <img src="../img/AGI-homepage-2.jpg">
              </li>
              <li class="columns">
                <a href="#">
                  <ul>
                    <li>Google Zoo</li>
                    <li>Digital, Identity, Motion</li>
                    <li>2017</li>
                  </ul>
                </a>
                <img src="../img/ubank-debit-card-2-up-2.jpg">
              </li>
              <li class="columns">
                <a href="#">
                  <ul>
                    <li>Matter</li>
                    <li>Digital</li>
                    <li>2017</li>
                  </ul>
                </a>
                <img src="../img/google-zoo-business-cards-2up.jpg">
              </li>
              <li class="columns">
                <a href="#">
                  <ul>
                    <li>Bill Byron wines</li>
                    <li>Identity, Motion</li>
                    <li>2017</li>
                  </ul>
                </a>
              </li>
              <li class="columns">
                <a href="#">
                  <ul>
                    <li>Foxtel</li>
                    <li>Digital, Identity, Motion</li>
                    <li>2017</li>
                  </ul>
                </a>
              </li>
              <li class="columns">
                <a href="#">
                  <ul>
                    <li>AGI</li>
                    <li>Digital</li>
                    <li>2017</li>
                  </ul>
                </a>
              </li>
              <li class="columns">
                <a href="#">
                  <ul>
                    <li>Osko by BPAY</li>
                    <li>Identity, Motion</li>
                    <li>2017</li>
                  </ul>
                </a>
              </li>
              <li class="columns">
                <a href="#">
                  <ul>
                    <li>Foxtel</li>
                    <li>Digital, Identity, Motion</li>
                    <li>2017</li>
                  </ul>
                </a>
              </li>


            </ul>

          </section>

        </main>
      </div>
      <!-- Project Slider -->
      <div id="project" class="project-open">
        <div class="strip">
          <div class="sideways"><p>Project Name Here&nbsp;&#x2193;</p></div>
        </div>
        </div>
      <!-- Info Slider -->
      <div id="info">
        <div class="strip">
        <!--  <div class="circle">&#x2190;</div> -->
          <div class="sideways"><p>About&nbsp;&#x2193;</p></div>
        </div>
        <main class="main">
          <section class="intro">
            <h1>About</h1>
            <h2>A selection of commissioned and collaborative work by Dan Flynn. Currently Creative Director @Maud, Melbourne. Previously @Spin, London.</h2>
          </section>
          <section class="text">
            <h3>Work</h3>
            <p>I have been fortunate enough to work on a diverse range of projects for clients big and small; including AGI, Delfina Foundation, Design Museum, Edmund de Waal, Foxtel, Google, Matthew Hilton and Wired.</p>

            <h3>Bio</h3>
            <p>Dan graduated from the Institute of Art, Design and Technology in 2009. Upon graduation he spent time at a number of Irish studios before moving to London to work at the acclaimed studio Spin. In 2014 Dan moved to Australia, establishing a freelance practice. Having collaborated on a number of high profile jobs with Maud, Dan now works as a Creative Director in the Sydney studio.</p>
          </section>
          <aside class="contact">
            <div>
              <h4>CV</h4>
              <ul>
                <li>Creative Director</li>
                <li>Maud, Sydney</li>
                <li >2015—</li>

                <li>Senior Designer</li>
                <li>Spin, London</li>
                <li>2010—2014</li>

                <li>Intern</li>
                <li>Atelier David Smith, <br />Detail &amp; Zero–G</li>
                <li>2009—2010</li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li>info@byForm.co</li>
                <li>@function_Form</li>
                <li>+61 439 849 717</li>
              </ul>
            </div>
          </aside>
        </main>
      </div>
    </div>

    <!-- Jquery here -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <!-- Local Jquery backup here, uncomment to use -->
    <!-- <script>window.jQuery || document.write("<script src='/js/libs/jquery-XXXX.min.js'>\x3C/script>")</script> -->
    <!-- Custom functions go here -->
    <script src="js/libs/flickity.pkgd.min.js"></script>
    <script src="js/libs/jquery.photoroller.min.js"></script>
    <script src="js/main.js" type="text/javascript"></script>
    <!-- <script>$(document).ready(initPage);</script> -->

    <!-- Asynchronous google analytics; this is the official snippet.
    	 Replace UA-XXXXXX-XX with your site's ID and uncomment to enable.
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-XXXXXX-XX', 'auto');
      ga('send', 'pageview');
    </script>
    -->
  </body>
</html>
