


function loader() {
  var a = document.querySelectorAll(".loader");
  var b = document.querySelectorAll(".preloader");
  var main = document.querySelectorAll(".main");
  var bar2 = document.querySelectorAll("#bar-2");
  var bar1 = document.querySelectorAll("#bar-1");
  var loader = document.querySelectorAll(".loader");
  var full = document.querySelectorAll(".full-loader");
  var text=document.querySelectorAll(".preloader #text");
  var footer=document.querySelectorAll(".preloader #footer a");
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
        text,
        {
          duration:1,
          opacity:0,
          ease: "elasticity",
        }
      )
      gsap.to(footer,{
        duration:1,
        opacity:0,
        ease: "elasticity",
      })
      gsap.to(
        bar2,
        {
         
          delay: 0.5,
          rotate: "90deg",
          
        x:"-2rem",
        y:"6.7rem",
          ease: "power4.inOut",
          overflow: "hidden",
          duration: 1,
          height:"98%"
        },
        "<"
      );
      gsap.to(loader, { delay: 1, rotate: 20 });
      gsap.to(
        bar1,
        {
          delay: 1,
          duration: 1,
          overflow: "hidden",
          scale: 30,
          backgroundColor: "white",
          ease: "expo.Out",
        },
        "<"
      );
      gsap.to(
        bar2,
        {
          duration: 1,

          scale: 50,
          backgroundColor: "white",
          ease: "expo.inOut",
        },
        "<"
      );

      gsap.to(
        b,
        {
          delay: 0.1,
          display: "none",
        },
        "<"
      );
      gsap.to(
        main,
        { duration: 1, display: "flex" ,  ease: "power2.inOut" },
        "<"
      );
    }
  }, 50);
}
window.onload = loader;
