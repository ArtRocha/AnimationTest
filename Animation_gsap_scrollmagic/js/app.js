
gsap.registerPlugin(ScrollTrigger);

// gsap.to(".plane",{
//     x:300,
//     duration: 3,
//     scrollTrigger: {
//         trigger: ".plane",
//         star:"top 60%",
//         end:"top 40%",
//         toggleActions: "play pause resume complete",
//         scrub: true,
//         markers:true
//     }
// })

const tl = gsap.timeline({
    scrollTrigger:{
    trigger:".plane",
    // markers:true,
    start:"top 70%",
    end: "bottom 0%",
    scrub:true,
    toggleActions: "restart none none none",
    
    // end:"top 30%",
    
    pin: ".plane",
    pinSpacing: true

}});

tl.to(".plane",{x:300, duration:2})
.to(".plane", {x:500, y:-200, rotate:-90, duration: 2 })
.to(".plane",{x:300,y:-300,rotate:-180, duration: 2})
.to(".plane",{x:200, y:-200,rotate:-270, duration:2})
.to(".plane",{x:100,y:-100,rotate:-315, duration:2})
.to(".plane",{x:900,y:-400,rotate:-390, duration:3})
.to(".plane",{x:1500,y:-5,rotate:-310, duration:2})


const tt = gsap.timeline({
    scrollTrigger:{
    trigger:".towers",
    // markers:true,
    start:"top 50%",
    end: "top 30%",
    // scrub:true,
    markers:true,
    toggleActions: "restart none none none",
    
    // end:"top 30%",
    
    // pin: ".towers",
    // pinSpacing: true

}});

tt.to(".towers",{x:0, y:500, duration:5})


window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // document.getElementById("tt").style.backgroundRepeat= `no-repeat`
        document.getElementById("simblinsT").style.backgroundSize= `50%`;
        // console.log(document.body.offsetHeight);
        document.body.style.height = document.body.offsetHeight + "px"
        // console.log(document.body.offsetHeight + "px");
        // document.getElementById("tt").style.backgroundImage= `url("images/3IsK.gif");`
        
    }else{
        document.getElementById("simblinsT").style.backgroundSize= `0%`;
    }
};

// var altura = document.getElementById("toris");
// var verificAltura = altura.offsetHeight;