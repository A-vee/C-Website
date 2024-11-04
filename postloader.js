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
        duration: 0.2,
        ease: "power.out",
    })
    count+=1;
    if(count==100)
        {
            gsap.to(preloader,{
                opacity:0,
                display:"none"
                    })
        }
    },10)
    
}
   

window.onload=loader;