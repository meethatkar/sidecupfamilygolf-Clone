var crsr = document.querySelector("#cursor");
var crsr_blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x-7+"px"
    crsr.style.top = dets.y-7+"px"
    crsr_blur.style.left = dets.x-200+"px"
    crsr_blur.style.top = dets.y-200+"px"
    console.log(crsr.style.left);
})

gsap.to("#navbar",{
    backgroundColor: "#000",
    height:"105px",
    duration: 1,
    scrollTrigger:{
        trigger: "#navbar",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top 11%",
        scrub: 1.5
    }
})

gsap.to("#main",{
    backgroundColor: "#000000f3",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -65%",
        scrub: 1.5
    }
})

gsap.to("#about-us img,#about-us-in",{
    // y: 90,
    opacity: 1,
    duration:1,
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        start: "top 80%",
        end: "top 65%",
        // markers:true,
        scrub: 1
    },
});

gsap.to("#cards",{
    scale: 1.04,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger: "#cards",
        scroller: "body",
        start: "top 70%",
        end: "top 60%",
        // markers:true,
        scrub:1
    },
});

gsap.to("#colon1", {
    y: 40,
    x: 40,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
    //   markers:true,
      start: "top 45%",
      end: "top 35%",
      scrub: 4,
    },
  });

  gsap.to("#colon2",{
    y:-50,
    x:-40,
    scrollTrigger:{
        trigger:"#colon2",
        scroller: "body",
        start: "top 110%",
        end: "top 100%",
        // markers:true,
        scrub: 4
    },
  });

  var nav_H4_All = document.querySelectorAll("#navbar h4");
//   console.log(nav_H4_All);
nav_H4_All.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale= 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
        crsr.style.cursor = "pointer"
    });
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale= 1
        crsr.style.backgroundColor = "#95C11E"
        crsr.style.border = "1px solid #95C11E"
        crsr.style.cursor = "default"

    });
});

gsap.to(".elem",{
    y:37,
    duration:1,
    scrollTrigger:{
        trigger:".elem",
        scroller:"body",
        // markers:true,
        start: "top 94%",
        end: "top 84%",
        scrub:1,
    }
})
