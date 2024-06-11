// jquery slider packege
// slick slider //owl carusel // swiper slider
$(function () {
  // slick slider
  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    // arrows: false,
    centerMode: true,
    prevArrow:
      '<button class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
    nextArrow:
      '<button class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
        },
      },
    ],
  });

  // owl carusel
  $(".owl-carousel").owlCarousel({
    margin: 30,
    nav: true,
    navText: ["<button>next</button>", "<button>prev</button>"],
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  // isotope
  // init Isotope
  var $grid = $(".grid").isotope({
    // options
  });
  // filter items on button click
  $(".filter-button-group").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });

  // piechart
  $(".chart").easyPieChart({
    barColor: "green",
    trackColor: "yellow",
    scaleColor: "transparent",
    lineWidth: 6,
    animate: {
      duration: 3000,
      enabled: true,
    },
  });
});
