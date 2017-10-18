//////////////////////////////////////////////////////////////////
// Testing JS is working. Delete when ready.
//////////////////////////////////////////////////////////////////
$(document).ready(function() {

  $( function() {
    if ($( 'header' ).hasClass( 'black' )) {
      $( '.columns' ).addClass( 'bottom-border' );
    }
  });


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

  $( '.columns' ).click(function() {
    projectOpen();
  });


// Flickity carousels
  $('.project-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    autoPlay: false,
    prevNextButtons: false,
    pageDots: false,
    imagesLoaded: true,
    freeScroll: true
  });

  $('.related-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: false,
    autoPlay: false,
    prevNextButtons: false,
    pageDots: false,
    imagesLoaded: true
  });

});// end ready
