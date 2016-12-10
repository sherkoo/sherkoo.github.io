// Jquery scripts
$(document).ready(function(){

  // Image preloader
  //### THIS PRELOADER WORKS WELL BUT DOESN'T LOOK GREAT ###
  //###############################################################
  // $('.work-grid-item > .work-grid-item-img').each(function() {
  //   $(this).css({
  //     opacity: 0
  //   }).load(function() {
  //     $(this).animate({
  //       opacity: 1
  //     }, 1000);
  //   }).attr('src', $(this).data('src'))
  //   // wait and remove data-src
  //   .delay(100)
  //   .attr('data-src','');
  // });

  // Mobile Btn
  $('.mobile-btn').click(function(){
    $('.header-nav').toggle();
    return false;
  });

  // Show header nav on scroll down
  var lastScrollTop = 0;

  $(window).scroll(function(){
    console.log($(this).scrollTop());

    if($(this).scrollTop() >= 300){
      $('.header').addClass('header-shrink');
      // $('.header-nav').addClass('header-nav-shrink');
      // $('.header-logo').addClass('header-logo-fade');
      // $('.header-brand').animate({
      //   'opacity': 1
      // });
    } else {
      $('.header').removeClass('header-shrink');
      $('.header-nav').removeClass('header-nav-shrink');
      $('.header-logo').removeClass('header-logo-fade');
    }
  });

  // $('.work').imagesLoaded()
  // .always( function( instance ) {
  //   console.log('all images loaded');
  // })
  // .done( function( instance ) {
  //   console.log('all images successfully loaded');
  // })
  // .fail( function() {
  //   console.log('all images loaded, at least one is broken');
  // })
  // .progress( function( instance, image ) {
  //   var result = image.isLoaded ? 'loaded' : 'broken';
  //   console.log( 'image is ' + result + ' for ' + image.img.src );
  //   var $item = $( image.img );
  //   $item.addClass('is-loaded');
  // });

  // grab list of all image thumbs
  // $('.work-grid-item-img').each(function(){
  //   $(this).fadeIn(400);
  //
  // });
  // var workThumbs = $('.work').each('img ');
  // var workThumb = workThumbs.each('img');
  // // console.log(workThumb);
  // for (var i = 0; i < workThumbs.length; i++) {
  //   console.log(workThumbs[i]);
  // }

  // Fade in images on load
  // var image = new Image();
  // image.onload = function () {
  //    console.info("Image loaded !");
  //    //do something...
  //    alert('its loaded');
  //    image.animate({
  //      'opacity': 0
  //    });
  // }
  // image.onerror = function () {
  //    console.error("Cannot load image");
  //    //do something else...
  //    alert('NOT WAY');
  // }
  // image.src = "../img/shoe-1.jpg";


});
