/* Banner slider */
 $(document).ready(function () {
      var owl = $(".bannerSlider");
      owl.owlCarousel({
        margin: 0,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoPlaySpeed: 3000,
        autoPlayTimeout: 3000,
        // slideSpeed: 300,
        // paginationSpeed: 400,
        // mouseDrag: true,
        // singleItem: true,
        // animateIn: 'fadeIn',
        // animateOut: 'fadeOut',
        responsive: {
          0: {
            loop: true,
            margin: 0,
            center: true,
            startPosition: 0,
            nav: false,
            navElement: "v",
            slideBy: 1,
            // autoWidth: true,
            items: 1,
          },
          600: {
            items: 1,
            dots: false,
          },
          1000: {
            loop: true,
            center: true,
            startPosition: 0,
            nav: false,
            dots: false,
            navElement: "v",
            slideBy: 1,
            // autoWidth: true,
            items: 1,
          },
          1380: {
            loop: true,
            center: true,
            dots: false,
            startPosition: 0,
            nav: false,
            // autoWidth: true,
            items: 1,
          },
        },
      });
    });
    /* Banner slider End */

    /* Highlights */
    $(document).ready(function () {
      var owl = $(".custom0");
      owl.owlCarousel({
        margin: 20,
        nav: true,
        loop: false,
        dots: false,
        responsive: {
          0: {
            loop: true,
            margin: 10,
            center: true,
            startPosition: 0,
            nav: true,
            navElement: "v",
            slideBy: 1,
            // autoWidth: true,
            items: 1.2,
          },
          600: {
            items: 3,
          },
          1000: {
            loop: true,
            center: true,
            dots: false,
            startPosition: 0,
            nav: true,
            navElement: "v",
            slideBy: 1,
            // autoWidth: true,
            items: 4,
          },
          1380: {
            loop: true,
            center: true,
            dots: false,
            startPosition: 0,
            nav: true,
            navElement: "v",
            slideBy: 1,
            // autoWidth: true,
            items: 4.5,
          },
        },
      });
    });
     /* Highlights  END*/

      /* Plans & Pricing */

      $(document).ready(function () {
      var owl = $(".custom2");
      owl.owlCarousel({
        margin: 10,
        nav: true,
        loop: true,
        startPosition: 0,
        navElement: "v",
        center: true,
        dots: false,
        responsive: {
          0: {
            margin: 25,
            loop: false,
            center: false,
            dots: false,
            startPosition: 0,
            nav: true,
            navElement: "v",
            slideBy: 1,
            // autoWidth: true,
            items: 3,
          },
          600: {
            margin: 25,
            loop: false,
            center: false,
            dots: false,
            startPosition: 0,
            nav: true,
            navElement: "v",
            slideBy: 1,
            // autoWidth: true,
            items: 3,
          },
          1000: {
            margin: 25,
            loop: false,
            center: false,
            dots: false,
            startPosition: 0,
            nav: true,
            navElement: "v",
            slideBy: 1,
            // autoWidth: true,
            items: 3,
          },
          // 1380: {
          //   margin: 25,
          //   loop: false,
          //   center: true,
          //   dots: false,
          //   startPosition: 1,
          //   nav: true,
          //   // autoWidth: true,
          //   items: 4.5,
          // },
        },
      });
    });

    /* costsheet */

     $(".expandCost").click(function () {
      $(".paper").css("height", "550px")
      setTimeout(() => {
        $(".costrigger").trigger("click")
      }, 200)
    })

    /* Gallery */

    $(document).ready(function () {
      var owl = $(".custom1");
      owl.owlCarousel({
        margin: 15,
        nav: true,
        loop: true,
        responsive: {
          0: {
            loop: true,
            center: true,
            dots: false,
            startPosition: 1,
            nav: true,
            navElement: "v",
            slideBy: 1,
            // autoWidth: true,
            items: 1.2,
          },
          600: {
            items: 3,
          },
          1000: {
            loop: true,
            center: false,
            dots: false,
            startPosition: 1,
            nav: true,
            navElement: "v",
            slideBy: 1,
            // autoWidth: true,
            items: 4,
          },
          // 1380: {
          //   loop: true,
          //   center: true,
          //   dots: false,
          //   startPosition: 1,
          //   nav: true,
          //   // autoWidth: true,
          //   items: 3,
          // },
        },
      });
    });

    Fancybox.bind('[data-fancybox="gallery"]', {
      Hash: false,
      Thumbs: false,
      // compact: false,
      // contentClick: "toggleCover",
      wheel: "slide",
      Toolbar: {
        display: {
          left: [],
          // middle: [],
          right: ["close"],
        },
      },
      Images: {
        Panzoom: {
          panMode: "mousemove",
          mouseMoveFactor: 1.1,
          mouseMoveFriction: 0.12
        },
      },
      //
    });

    /* Testimonial */

     