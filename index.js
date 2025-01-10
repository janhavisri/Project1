// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Shery Mouse Follower
Shery.mouseFollower();

// Shery Magnet Effect
Shery.makeMagnet(".magnet");

// Shery Hover With Media Circle
Shery.hoverWithMediaCircle(".hvr", {
  videos: ["videos/1.mp4", "videos/2.mp4", "videos/3.mp4"],
});

// Scroll Animation for Left Section
gsap.to(".fleft-element", {
  scrollTrigger: {
    trigger: "#featuredimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".fleft-element.last",
    scrub: 1,
  },
  y: "-300%",
  ease: "Power1.easeOut",
});

// Shery Image Effect with ScrollTrigger
let sections = document.querySelectorAll(".fleft-element");

Shery.imageEffect(".images", {
  style: 5,
  slideStyle: (setScroll) => {
    sections.forEach(function(section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        onUpdate: function(prog){
        // console.log(prog);
        setScroll(prog.progress + index);
        },
      });
    });
  },
});

