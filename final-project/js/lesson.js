// Function to customize the effects of the owl carousel library within the document, used it to resolve overlapping,merging, and heavy spacing/mobility issues
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin: 80,
        center: true,
        merge: false,
        responsiveClass:true,
        autoWidth: true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:true
            },
            1000:{
                items:1,
                nav:true
            }
        }
    });
});


