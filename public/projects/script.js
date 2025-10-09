// Particles.js configuration
particlesJS("particles-js", {
   "particles": {
      "number": {
         "value": 180,
         "density": {
            "enable": true,
            "value_area": 800
         }
      },
      "color": {
         "value": "#ffffff"
      },
      "shape": {
         "type": "circle",
         "stroke": {
            "width": 0,
            "color": "#000000"
         },
         "polygon": {
            "nb_sides": 5
         }
      },
      "opacity": {
         "value": 0.5,
         "random": false,
         "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
         }
      },
      "size": {
         "value": 1,
         "random": true,
         "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
         }
      },
      "line_linked": {
         "enable": true,
         "distance": 150,
         "color": "#ffffff",
         "opacity": 0.4,
         "width": 1
      },
      "move": {
         "enable": true,
         "speed": 6,
         "direction": "none",
         "random": false,
         "straight": false,
         "out_mode": "out",
         "bounce": false,
         "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
         }
      }
   },
   "interactivity": {
      "detect_on": "canvas",
      "events": {
         "onhover": {
            "enable": true,
            "mode": "grab"
         },
         "onclick": {
            "enable": true,
            "mode": "push"
         },
         "resize": true
      },
      "modes": {
         "grab": {
            "distance": 140,
            "line_linked": {
               "opacity": 1
            }
         },
         "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
         },
         "repulse": {
            "distance": 200,
            "duration": 0.4
         },
         "push": {
            "particles_nb": 4
         },
         "remove": {
            "particles_nb": 2
         }
      }
   },
   "retina_detect": true
});


gsap.registerPlugin(ScrollTrigger);


gsap.defaults({
   ease: "power3"
});


gsap.set(".box", {
   y: 100
});


ScrollTrigger.batch(".box", {
   interval: 0.1,
   batchMax: 5,
   onEnter: batch => gsap.to(batch, {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      overwrite: true
   }),
   onLeave: batch => gsap.to(batch, {
      opacity: 0.8,
      y: -20,
      stagger: 0.1,
      overwrite: true
   }),
   onEnterBack: batch => gsap.to(batch, {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      overwrite: true
   }),
   onLeaveBack: batch => gsap.to(batch, {
      opacity: 0.8,
      y: 20,
      stagger: 0.1,
      overwrite: true
   }),
   start: "top 60%",
   end: "bottom 40%"
});

ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".box", {
   y: 0
}));

// hover animation
gsap.utils.toArray(".box").forEach(box => {
   box.addEventListener("mouseenter", () => {
      gsap.to(box, {
         scale: 1.05,
         y: -5,
         duration: 0.3,
         ease: "power2.out"
      });
   });

   box.addEventListener("mouseleave", () => {
      gsap.to(box, {
         scale: 1,
         y: 0,
         duration: 0.3,
         ease: "power2.out"
      });
   });
});


// CIRCLE 
const duration = 1;
let isPlaying = true;

let tween = gsap.to("#round", {
   rotation: 360,
   duration: 4,
   repeat: -1,
   ease: "none"
});

document.querySelector("button").addEventListener("click", (e) => {
   isPlaying ? tween.seek(0).pause() : tween.play();

   isPlaying = !isPlaying;
   console.log(isPlaying);
});