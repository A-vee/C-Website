document.addEventListener("contextmenu",
    (e) => {
      e.preventDefault();
    }
  )
function loader()
{
    var preloader=document.querySelectorAll(".postloader")
    var loader=document.querySelectorAll("#loader #span")
    var count=0;
    const interval=setInterval(()=>
    {
    
    gsap.to(
        loader, {
        width: `${count}%`,
        duration: 0.5,
        ease: "power.out",
    })
    count+=1;
    if(count==100)
        {
            clearInterval(interval)
            gsap.to(preloader,{
                opacity:0,
                display:"none"
                    })
        }
    },50)
    
}
   

window.onload=loader;