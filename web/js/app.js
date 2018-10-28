$(function(){

    var hamburger = $(".menu-handle"),
        menu = $(".menu");

    $( hamburger ).click(function() {
      $(this).toggleClass("open");
      $(menu).toggleClass("open");
    });


    // var images = $(".product-images"),
    //     buybox = $(".product-buybox");
    //
    // function getDuration() {
    //     return $(images).height() - $(buybox).height() - 32;
    // }
    //
    // var controller = new ScrollMagic.Controller({
    //     globalSceneOptions: {
    //         triggerHook: 'onLeave'
    //     }
    // });
    // var scene = new ScrollMagic.Scene({triggerElement: ".product-images", duration: getDuration})
    //     .setPin(".product-buybox")
    //     .addTo(controller);
    //
    // $(window).on("resize", function(e) {
    //   if ($(window).width() < 600) {
    //     scene.enabled(false);
    //     $(".scrollmagic-pin-spacer").css("width", "100%");
    //     controller.update(true);
    // } else if (!scene.enabled()) {
    //     scene.enabled(true);
    //     $(".scrollmagic-pin-spacer").css("width", "35%");
    //     controller.update(true);
    //   }
    // });
    //
    // if ($(window).width() < 600 ) {
    //     scene.enabled(false);
    //     $(".scrollmagic-pin-spacer").css("width", "100%");
    //     controller.update(true);
    // }




});
