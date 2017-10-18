//////////////////////////////////////////////////////////////////
// Testing JS is working. Delete when ready.
//////////////////////////////////////////////////////////////////
$(document).ready(function() {

// Scroll to on selected work link in header
  $( '#selected-work' ).click(function () {
    $( 'html, body' ).animate({
      scrollTop: $( '.goto' ).offset().top + 1
    }, 700
    );
    setTimeout(
    function()
    {
      $('header').removeClass('nav-up').addClass('nav-down');
    }, 800);

  });

// Scroll to top and fade in/out when project slider opens
  function topFade() {
    $( '#project' ).scrollTop(0);
    $( '.project-loadspot' ).removeClass( 'opacity' );
  };

  function toTop() {
    setTimeout(topFade, 300);
  };

  $( function() {
    if ($( 'header' ).hasClass( 'black' )) {
        $( '#info, #archive, #project' ).addClass( 'left-border' );
    }
  });


// Function for clicks to the ABOUT section
  function info(){
    if ($( '#archive' ).hasClass( 'archive-open' ) && !$( '#archive' ).hasClass( 'archive-open-more' )) {
      $( '#archive' ).addClass( 'archive-open-more' );
      $( '#archive' ).toggleClass( 'overflow' );
      $( '#info' ).toggleClass( 'info-open' );
      $( '#info .strip' ).toggleClass( 'cursor' );
      }
    else if ($( '#archive' ).hasClass( 'archive-open-more' ) && $( '#info' ).hasClass( 'info-open' )) {
        $( '#archive' ).removeClass( 'archive-open-more' );
        $( '#archive' ).removeClass( 'overflow' );
        $( '#info' ).toggleClass( 'info-open' );
        $( '#info .strip' ).toggleClass( 'cursor' );
      }
    else if($( '#project' ).hasClass( 'project-open' )) {
        $( '#info' ).toggleClass( 'info-open' );
        $( '#info .strip' ).toggleClass( 'cursor' );
        $( '#project' ).toggleClass( 'overflow' );
        //  $( '#project' ).toggleClass( 'blur' );
      }
    else {
        $( '#info' ).toggleClass( 'info-open' );
        $( '#info .strip' ).toggleClass( 'cursor' );
        $( '#image-index' ).toggleClass( 'blur cursor' );
        $( '.closer' ).toggleClass( 'show' );
        $( 'body' ).toggleClass( 'overflow' );
      }
  };

// Function for clicks to the INDEX section
  function archive(){
    if ($( '#info' ).hasClass( 'info-open' ) && $( '#archive' ).hasClass( 'archive-open-most' )) {
        $( '#info' ).toggleClass( 'info-open' );
        $( '#archive' ).addClass( 'archive-open' );
        $( '#archive' ).removeClass( 'archive-open-more archive-open-most overflow' );
        $( '#project' ).toggleClass( 'project-open' );
        $( '#info .strip, #project .strip' ).removeClass( 'cursor' );
      }
      else if ($( '#archive' ).hasClass( 'archive-open-most' ) && $( '#project' ).hasClass( 'project-open' ) && !$( '#info' ).hasClass( 'info-open' )) {
        $( '#archive' ).toggleClass( 'archive-open-most' );
        $( '#archive' ).removeClass( 'overflow' );
        $( '#project' ).toggleClass( 'project-open' );
        $( '#project .strip' ).toggleClass( 'cursor' );
        toTop();
      }
      else if ($( '#archive' ).hasClass( 'archive-open-more' ) && $( '#info' ).hasClass( 'info-open' )) {
        $( '#archive' ).toggleClass( 'archive-open-more' );
        $( '#archive' ).removeClass( 'overflow' );
        $( '#info' ).toggleClass( 'info-open' );
        $( '#info .strip' ).removeClass( 'cursor' );
      }
      else {
        $( '#archive' ).removeClass( 'archive-open-more' );
        $( '#archive' ).toggleClass( 'archive-open' );
        $( '#archive .strip' ).toggleClass( 'cursor' );
        $( '.archive-loadspot' ).scrollTop(0);
        $( '.archive-loadspot' ).toggleClass( 'scroll' );
        $( '#image-index' ).toggleClass( 'blur cursor' );
        $( '.closer' ).toggleClass( 'show' );
        $( 'body' ).toggleClass( 'overflow' );
      }
  };
// Function for clicks to the PROJECT section
  function projectClose() {
    if ($( '#info' ).hasClass( 'info-open' )) {
        $( '#info' ).toggleClass( 'info-open' );
        $( '#info .strip' ).toggleClass( 'cursor' );
        $( '#project' ).toggleClass( 'overflow' );
    }
    else if ($( '#archive' ).hasClass( 'archive-open' )) {
      $( '#project' ).toggleClass( 'project-open' );
      $( '#archive' ).toggleClass( 'archive-open-most' );
      $( '#project .strip' ).toggleClass( 'cursor' );
    }
    else {
      $( '#project' ).toggleClass( 'project-open' );
      $( '#project .strip' ).toggleClass( 'cursor' );
      $( '#image-index' ).toggleClass( 'blur cursor' );
      $( 'body' ).toggleClass( 'overflow' );
      $( '.closer' ).toggleClass( 'show' );
      toTop();
    }
  };

  function projectOpen(){
    if ($( '#info' ).hasClass( 'info-open' )) {
        $( '#info' ).toggleClass( 'info-open' );
        $( '#info .strip' ).toggleClass( 'cursor' );
    }
    else if ($( '#archive' ).hasClass( 'archive-open' )) {
      $( '#project' ).toggleClass( 'project-open' );
      $( '#archive' ).toggleClass( 'archive-open-most' );
      $( '#project .strip' ).toggleClass( 'cursor' );
      $( '#project-button' ).toggleClass( 'show-button' );
    }
    else {
      $( '#project' ).toggleClass( 'project-open' );
      $( '#project .strip' ).toggleClass( 'cursor' );
      $( '#project-button' ).toggleClass( 'show-button' );
      $( '#image-index' ).toggleClass( 'blur cursor' );
      $( '.closer' ).toggleClass( 'show' );
      $( 'body' ).toggleClass( 'overflow' );
    }
  };

  function close(){
    if ($( '#info' ).hasClass( 'info-open' ) || $( '#archive' ).hasClass( 'archive-open' ) || $( '#project' ).hasClass( 'project-open' )) {
        $( '#info' ).removeClass( 'info-open' );
        $( '#archive' ).removeClass( 'archive-open archive-open-more archive-open-most' );
        $( '#project' ).removeClass( 'project-open' );
        $( '#image-index' ).removeClass( 'blur cursor' );
        $( '.strip' ).removeClass( 'cursor' );
        $( '.closer' ).toggleClass( 'show' );
        $( 'body' ).toggleClass( 'overflow' );
        $( '#project' ).removeClass( 'overflow' );
        $( '#project-button' ).toggleClass( 'show-button' );
        toTop();
    }
  };

// Calling functions on various links and buttons
  $( '#info .strip' ).click(function() {
    info();
  });

  $( '#info-button' ).click(function() {
    info();
    $(this).toggleClass( 'rotate-close' );
    $('#info-button p').html($('#info-button p').text() == 'Close' ? 'About' : 'Close');
  });

  $( '#archive .strip' ).click(function() {
    archive();
  });

  $( '#archive-button' ).click(function() {
    archive();
    $(this).toggleClass( 'rotate-close' );
    $('#archive-button p').html($('#archive-button p').text() == 'Close' ? 'Index' : 'Close');
  });

  $( '#project .strip' ).click(function() {
    projectClose();
  });

  $( '.project-thumb' ).click(function() {
    projectOpen();
  });


  $( '.big-type li' ).click(function() {
    projectOpen();
  });

  $( '.orange-thumb' ).click(function() {
    projectOpen();
  });

  $( '.closer' ).click(function() {
    close();
  });

  $( '#project-button' ).click(function() {
    close();
  });



// Flickity carousels
 $('.main-carousel').flickity({
    // options
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    autoPlay: false,
    prevNextButtons: false,
    pageDots: false,
    cellSelector: 'img',
    imagesLoaded: true,
    percentPosition: false
  });

  $('.full-carousel').flickity({
    // options
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    autoPlay: false,
    prevNextButtons: false,
    pageDots: false,
    imagesLoaded: true
  });



// Image numbers
  var flkty = new Flickity('.main-carousel');
  var carouselStatus = document.querySelector('.carousel-status');

  function updateStatus() {
    var slideNumber = flkty.selectedIndex + 1;
    carouselStatus.textContent = '0' + slideNumber + '\u20140' + flkty.slides.length;
  }
  updateStatus();
  flkty.on( 'select', updateStatus );


  // Image captions
  var $carousel = $('.main-carousel').flickity({

  });
  var $caption = $('.caption');
  // Flickity instance
  var flktyCap = $carousel.data('flickity');
    $carousel.on( 'select.flickity', function() {
    // set image caption using img's alt
      $caption.text( flktyCap.selectedElement.alt )
  });


  // Photoroller
  $( '.project-thumb' ).photoroller({
      nodes: 'img'
  });

/*
  // Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    lastScrollTop = st;
}
*/


});// end ready
