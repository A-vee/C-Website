function loader() {
  var a = document.querySelectorAll(".loader");
  var b = document.querySelectorAll(".preloader");
  var main = document.querySelectorAll(".main");
  var bar2 = document.querySelectorAll("#bar-2");
  var full = document.querySelectorAll(".full-loader");

  var count = 0;

  const timer = setInterval(() => {
    count += 1;
    gsap.to(a, {
      width: `${count}%`,
      duration: 0.5,
      ease: "power2.out",
    });

    if (count >= 100) {
      clearInterval(timer);

      gsap.to(full, {
        backgroundColor: "black",
        ease: "elasticity",
      });
      gsap.to(
        bar2,
        {
          delay: 0.5,
          rotate: "90deg",
          y: "90",
          x: "-105",
          ease: "power4.inOut",
          overflow: "hidden",
          duration: 1,
        },
        "<"
      );

      gsap.to(
        bar2,
        {
          delay: 1,
          duration: 0.8,
          overflow: "hidden",
          scale: 31.5,
          backgroundColor: "white",
          ease: "power2.inOut",
        },
        "<"
      );

      gsap.to(
        b,
        {
          delay: 0.3,
          display: "none",
        },
        "<"
      );
      gsap.to(main, { delay: 0.4, display: "flex" }, "<");
    }
  }, 50);
}
window.onload = loader;
