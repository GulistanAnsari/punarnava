
$(window).scroll(function () {

    // sticky Header
    var scroll = $(window).scrollTop();
    if (scroll >= 35) {
        $("header").addClass("sticky");
    } else {
        $("header").removeClass("sticky");

    } 
});

$( document ).ready(function() {


    jQuery(function($) {
        var path = window.location.href; 
        // because the 'href' property of the DOM element is the absolute path
        $('.navbar-light .navbar-nav .nav-link').each(function() {
          if (this.href === path) {
            $(this).addClass('active');
          }
        });
      });

      $(window).on('load resize', function () {
        if ($(window).width() >= 992) {
            $('.dropdown').hover(
                function() { $(this).addClass('show').find('.dropdown-menu').addClass('show'); },
                function() { $(this).removeClass('show').find('.dropdown-menu').removeClass('show'); }
            );
        }
    });
    

    $('.burger').click(function () {
        $('.burger').toggleClass('clicked');
    });




    $(".step1-next").click(function(){
        $(".section-1").addClass("d-none");
        $(".section-2").removeClass("d-none");
        $(".step1").addClass("activated");
        $(".step2").addClass("active");
    });
    $(".step2-next").click(function(){
        $(".section-2").addClass("d-none");
        $(".section-3").removeClass("d-none");
        $(".step2").addClass("activated");
        $(".step3").addClass("active");
    });
    $(".step3-next").click(function(){
        $(".section-3").addClass("d-none");
        $(".section-4").removeClass("d-none");
        $(".step3").addClass("activated");
        $(".step4").addClass("active");
    });
    $(".step2-prev").click(function(){
        $(".section-2").addClass("d-none");
        $(".section-1").removeClass("d-none");
        $(".step2").removeClass("active");
        $(".step1").removeClass("activated");
    });
    $(".step3-prev").click(function(){
        $(".section-3").addClass("d-none");
        $(".section-2").removeClass("d-none");
        $(".step3").removeClass("active");
        $(".step2").removeClass("activated");
    });





    
    const our_insurance = new Swiper(".our-insurance-slider", {
        slidesPerView: 1, 
        spaceBetween: 20, 
        centeredSlides: true, 
        loop: true, 
        slideToClickedSlide: true, 

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    
        breakpoints: {
            768: {
                slidesPerView: 2, 
                spaceBetween: 10
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 15
            }
        }
    });


    // const testimonials = new Swiper(".testimonials-slider", {
    //     slidesPerView: 1, 
    //     spaceBetween: 20, 
    //     centeredSlides: true, 
    //     loop: true, 
    //     slideToClickedSlide: true, 
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //       },
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    
    //     breakpoints: {
    //         767: {
    //             slidesPerView: 1, 
    //         },
    //         768: {
    //             slidesPerView: 1, 
    //             spaceBetween: 10
    //         },
    //         1024: {
    //             slidesPerView: 2,
    //             spaceBetween: 15
    //         }
    //     }
    // });



    // Initialize Swiper
// Initialize Swiper



// Initialize Swiper
const testimonials = new Swiper(".testimonials-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    allowTouchMove: false,
    loop: true,
    slideToClickedSlide: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        767: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
    },
});

// Function to animate the active slide
const animateActiveSlide = () => {
    // Reset all testimonials boxes
    const allBoxes = document.querySelectorAll(".testimonials-box");
    gsap.set(allBoxes, { opacity: 0, x: "-10%" });

    // Animate only the active box
    const activeBox = document.querySelector(".swiper-slide-active .testimonials-box");
    if (activeBox) {
        gsap.to(activeBox, {
            opacity: 1,
            x: "0%",
            duration: 2,
            ease: "power2.out",
        });
    }
};



// Trigger animation when `.testimonials-sec` enters the viewport (first time)
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: ".testimonials-sec",
    start: "top 80%", // Start animation when 80% of the section is visible
    onEnter: () => {
        // Trigger GSAP animation for the first active slide
        animateActiveSlide();

        // Optional: Add section-wide animation (fade-in, etc.)
        gsap.from(".testimonials-sec", {
            opacity: 0,
            y: 50,
            duration: 2,
            ease: "power2.out",
        });
    },
});

// Trigger animation on Swiper slide change
testimonials.on("slideChangeTransitionStart", () => {
    animateActiveSlide();
});

// Initial animation for the first visible slide (when the page loads)
document.addEventListener("DOMContentLoaded", () => {
    animateActiveSlide();
});






// Trigger animation on slide change
testimonials.on("slideChangeTransitionStart", () => {
    animateActiveSlide();
});

// Initial animation on page load
document.addEventListener("DOMContentLoaded", () => {
    animateActiveSlide();
});





    const industry = new Swiper(".industry-expertise-slider", {
        slidesPerView: 1, 
        spaceBetween: 20, 
        loop: true, 
        slideToClickedSlide: false, 
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            767: {
                slidesPerView: 1, 
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 1, 
                spaceBetween: 10
            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 15
            }
        }
    });



    let SwiperTop = new Swiper('.marquee-slider', {
        spaceBetween: 0,
        // centeredSlides: true,
        slidesPerView: 1,
        speed: 10000,
        autoplay: {
          delay: 100,
        },
        loop: true,
        allowTouchMove: false,
        disableOnInteraction: true,
        breakpoints: {
          
          480: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }
      });
    
      // var services_slider = new Swiper(".services-slider", {
      //   slidesPerView: 3,
      //   spaceBetween: 20,
      //   grabCursor: false,
      //   parallax: false, 
      //   speed: 1000,  
      //   pagination: {
      //     el: ".swiper-pagination",
      //     clickable: true,
      //   },
      //   breakpoints: {
          
      //     480: {
      //       slidesPerView: 1,
      //     },
      //     768: {
      //       slidesPerView: 2,
      //     },
      //   }
      // });

      var services = new Swiper(".services-slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
            767: {
                slidesPerView: 1, 
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3, 
                spaceBetween: 10
            }
        }
      });
    
     // Blog-Insurance Start
      const blog_insurance_slider = new Swiper(".blog-insurance-slider", {
        slidesPerView: 1, 
        spaceBetween: 20, 
        parallax: false, 
        speed: 1000,   
        loop: true, 
        slideToClickedSlide: false, 
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            767: {
                slidesPerView: 1, 
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 1, 
                spaceBetween: 10
            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 15
            }
        }
    });
      // Blog-Insurance End  






    gsap.registerPlugin(ScrollTrigger);



  gsap.to(".horizontal-animation", {
    width: "20%", 
    duration: 2, 
    scrollTrigger: {
        trigger: ".animation-tri",
        start: "top 50%", 
        end: "bottom 50%", 
        toggleActions: "play none none reverse", 
    }
});




  gsap.to(".blue-horizontal", {
    width: "20%", 
    duration: 2, 
    scrollTrigger: {
        trigger: ".animation-tri-blue",
        start: "top 50%", 
        end: "bottom 50%", 
        toggleActions: "play none none reverse", 
    }
});

  gsap.to(".green-vertical", {
    height: "100%", 
    duration: 2, 
    scrollTrigger: {
        trigger: ".blog-about",
        start: "top 100%", 
        end: "bottom 100%", 
        toggleActions: "play none none reverse", 
    }
});







gsap.to(".blue-vertical", {
    height: "60%", 
    duration: 2, 
    scrollTrigger: {
        trigger: ".blog-about",
        start: "top 100%", 
        end: "bottom 100%", 
        toggleActions: "play none none reverse", 
    }
});




    document.querySelectorAll(".blue-bg").forEach((e) => {
        gsap.from(e, { x: "10%",  duration: 4, scrollTrigger: { trigger: e, start: "left 90%", toggleActions: "play none none reverse" } });
      });

    document.querySelectorAll(".img-animation").forEach((e) => {
        gsap.from(e, { y: "-10%",  duration: 2, scrollTrigger: { trigger: e, start: "top 100%", toggleActions: "play none none reverse" } });
      });
    // document.querySelectorAll(".testimonials-box").forEach((e) => {
    //     gsap.from(e, { x: "-10%",  duration: 1, scrollTrigger: { trigger: e, start: "left 80%", toggleActions: "play none none reverse" } });
    //   });



    const spans = gsap.utils.toArray(".map span");
  
    spans.forEach((span) => {
      // Randomize animation properties
      const randomX = gsap.utils.random(-50, 50); // Random horizontal offset
      const randomY = gsap.utils.random(-50, 50); // Random vertical offset
      const randomDelay = gsap.utils.random(0.1, 0.5); // Random delay
  
      // Animate each span individually
      gsap.from(span, {
        x: randomX,
        y: randomY,
        opacity: 0,
        duration: 3,
        delay: randomDelay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".map",
          start: "top center",
          toggleActions: "play none none reverse",
        },
      });
    });

    
    
    document.addEventListener("DOMContentLoaded", () => {
        // Animation for the left-line
    gsap.to(".vertical-line", {
        height: "100%", // Target height
        duration: 2, // Animation lasts 2 seconds
        scrollTrigger: {
            trigger: ".animaton-blue",
            start: "top 50%", // Start when .form-div reaches the top 10% of the viewport
            end: "bottom 50%", // End when .form-div's bottom reaches the viewport's bottom
            toggleActions: "play none none reverse", // Controls the behavior on scroll
        }
    });
    gsap.to(".vertical-line-inner", {
        height: "50%", // Target height
        duration: 2, // Animation lasts 2 seconds
        scrollTrigger: {
            trigger: ".animaton-blue",
            start: "top 50%", // Start when .form-div reaches the top 10% of the viewport
            end: "bottom 50%", // End when .form-div's bottom reaches the viewport's bottom
            toggleActions: "play none none reverse", // Controls the behavior on scroll
        }
    });
    // Animation for the left-line
    gsap.to(".left-line", {
        height: "50%", // Target height
        duration: 2, // Animation lasts 2 seconds
        scrollTrigger: {
            trigger: ".animaton-blue",
            start: "top 50%", // Start when .form-div reaches the top 10% of the viewport
            end: "bottom 50%", // End when .form-div's bottom reaches the viewport's bottom
            toggleActions: "play none none reverse", // Controls the behavior on scroll
        }
    });

    // Animation for the right-line
    gsap.to(".right-line", {
        height: "50%", // Target height
        duration: 2, // Animation lasts 2 seconds
        scrollTrigger: {
            trigger: ".animaton-blue",
            start: "top 50%", // Start when .form-div reaches the top 10% of the viewport
            end: "bottom 50%", // End when .form-div's bottom reaches the viewport's bottom
            toggleActions: "play none none reverse", // Controls the behavior on scroll
        }
    });
});





  document.querySelectorAll(".blog-img, .blog-card, .policies-item, .expertise-item, .vision-mission, .card, .figure").forEach((e) => {
    gsap.from(e, { y: "5%", opacity: 0, duration: 2, ease: "power1.out", scrollTrigger: { trigger: e, start: "top 80%", toggleActions: "play none none reverse" } });
  });


  document.querySelectorAll(".vision-img").forEach((e) => {
    gsap.from(e, { y: "-5%", opacity: 0, duration: 2, ease: "power1.out", scrollTrigger: { trigger: e, start: "top 80%", toggleActions: "play none none reverse" } });
  });

  document.querySelectorAll(".choose-item").forEach((e) => {
    gsap.from(e, { x: "-10%", opacity: 0, duration: 2, ease: "power1.out", scrollTrigger: { trigger: e, start: "top 80%", toggleActions: "play none none reverse" } });
  });




});