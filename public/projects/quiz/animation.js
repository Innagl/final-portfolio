gsap.registerPlugin(MotionPathPlugin);


gsap.to("#book", {
   duration: 8,
   ease: "power1.inOut",
   repeat: -1, // Infinite loop
   motionPath: {
      path: "#path",
      align: "#path",
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
      start: 0,
      end: 0.9
   }
});