function locoMotiveScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locoMotiveScroll();

function cursorEffect() {
  const page1Content = document.querySelector("#page1-content");
  const cursor = document.querySelector("#cursor");

  page1Content.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
    });
  });

  page1Content.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });

  page1Content.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}
cursorEffect();

function page2Animation() {
  gsap.to(".page2-box", {
    duration: 3,
    width: "100%",
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "700vh 40%",
      end: "725vh 37%",
      scrub: 2,
    },
  });

  gsap.from(".elem h1", {
    y: 120,
    stagger: 0.25,
    duration: 1,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 40%",
      end: "top 37%",
      scrub: 2,
    },
  });
  //That for h3 and h4---------------

  gsap.from(".hero-text h3,.hero-text h4", {
    y: 120,
    stagger: 0.25,
    duration: 1,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 40%",
      end: "top 37%",
      scrub: 1.8,
    },
  });
}
page2Animation();

function page4Animation() {
  gsap.to(".page4-box", {
    duration: 3,
    width: "100%",
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#main",
      start: "750vh 40%",
      end: "800vh 37%",
      scrub: 2,
      // markers:true
    },
  });

  gsap.from(".p4elem h1", {
    y: 120,
    stagger: 0.25,
    duration: 1,
    scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
      start: "top 40%",
      end: "top 37%",
      scrub: 2,
    },
  });

  gsap.from(".htext h3", {
    y: 120,
    stagger: 0.25,
    duration: 1,
    scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
      start: "top 40%",
      end: "top 37%",
      scrub: 1.8,
    },
  });
}
page4Animation();

function page5Animation() {}
page5Animation();

function page6Animation() {
  gsap.to(".page6-box", {
    duration: 3,
    width: "100%",
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
      start: "750vh 40%",
      end: "800vh 37%",
      scrub: 2,
      // markers:true
    },
  });

  gsap.from(".p6elem h1", {
    y: 120,
    stagger: 0.25,
    duration: 1,
    scrollTrigger: {
      trigger: "#page6",
      scroller: "#main",
      start: "top 40%",
      end: "top 37%",
      scrub: 2,
    },
  });

  gsap.from(".htext1 h3", {
    y: 120,
    stagger: 0.25,
    duration: 1,
    scrollTrigger: {
      trigger: "#page6",
      scroller: "#main",
      start: "top 40%",
      end: "top 37%",
      scrub: 1.8,
    },
  });
}
page6Animation();

function page7Animation() {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 500,
      disableOnInteraction: true,
    },
    direction: "horizontal",
    speed: 1000,
  });
}
page7Animation();

function loaderH1() {
  const lt = gsap.timeline();
  lt.from("#loader h3", {
    x: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
  });
  lt.to("#loader h3", {
    x: -10,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
  });
  lt.to("#loader", {
    opacity: 0,
  });
  lt.from("#page1-content h1 span", {
    y: 200,
    opacity: 0,
    stagger: 0.02,
    duration: 0.5,
    delay: -0.5,
  });
  lt.to("#loader", {
    display: "none",
  });
}
loaderH1();

function footerFun(){
  const footer = gsap.timeline();

footer.from("#page9-top", {
  y: -250,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#page8",
    scroller: "#main",
    start: "40vh 40%",
    end: "50vh 37%",
    scrub: 5,
    marker: true,
  },
});

footer.from("#page9-mid", {
  y: -120,
  opacity: 0,
  duration: 2,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#page9",
    scroller: "#main",
    start: "top 40%",
    end: "top 37%",
    scrub: 3,
  },
});

footer.from("#page9-bottom .path1", {
  y: -220,
  opacity: 0,
  duration: 0.4,
  stagger: 0.3,
  delay: 0.2,
  scrollTrigger: {
    trigger: "#page9",
    scroller: "#main",
    start: "30vh 40%",
    end: "50vh 37%",
    scrub: 2,
  },
});

footer.from("#page9-bottom .path2", {
  y: -220,
  opacity: 0,
  duration: 0.3,
  stagger: 0.3,
  delay: 0.2,
  scrollTrigger: {
    trigger: "#page9",
    scroller: "#main",
    start: "30vh 40%",
    end: "50vh 37%",
    scrub: 2,
  },
});
footer.from("#page9-bottom .path3", {
  y: -220,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
  delay: 0.3,
  scrollTrigger: {
    trigger: "#page9",
    scroller: "#main",
    start: "30vh 40%",
    end: "50vh 37%",
    scrub: 3,
  },
});
footer.from("#page9-bottom .path4", {
  y: -220,
  opacity: 0,
  duration: 0.7,
  stagger: 0.3,
  delay: 0.4,
  scrollTrigger: {
    trigger: "#page9",
    scroller: "#main",
    start: "30vh 40%",
    end: "50vh 37%",
    scrub: 4,
  },
});
footer.from("#page9-bottom .path5", {
  y: -220,
  opacity: 0,
  duration: 0.9,
  stagger: 0.3,
  delay: 0.5,
  scrollTrigger: {
    trigger: "#page9",
    scroller: "#main",
    start: "30vh 40%",
    end: "50vh 37%",
    scrub: 4,
  },
});
footer.from("#page9-bottom .path6", {
  y: -220,
  opacity: 0,
  duration: 1.1,
  stagger: 0.3,
  delay: 0.5,
  scrollTrigger: {
    trigger: "#page9",
    scroller: "#main",
    start: "30vh 40%",
    end: "50vh 37%",
    scrub: 3,
  },
});
footer.from("#page9-bottom .path7", {
  y: -220,
  opacity: 0,
  duration: 1.3,
  stagger: 0.3,
  delay: 0.3,
  scrollTrigger: {
    trigger: "#page9",
    scroller: "#main",
    start: "30vh 40%",
    end: "50vh 37%",
    scrub: 2,
  },
});
footer.from("#page9-bottom .path8", {
  y: -220,
  opacity: 0,
  duration: 1.4,
  stagger: 0.3,
  delay: 0.3,
  scrollTrigger: {
    trigger: "#page9",
    scroller: "#main",
    start: "30vh 40%",
    end: "50vh 37%",
    scrub: 2,
  },
});
}

footerFun();