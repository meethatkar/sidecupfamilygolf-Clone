var crsr = document.querySelector("#cursor");
var crsr_blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x-11+"px"
    crsr.style.top = dets.y-11+"px"
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
    backgroundColor: "black",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -65%",
        scrub: 1.5
    }
})
