
let pos = 0
window.addEventListener('scroll', (e)=>{
    let content = document.querySelector('.row');
    let contenPosition = content.getBoundingClientRect().top;
    console.log(e)
    let screenPosition = window.innerHeight/1.4;
    if(contenPosition<screenPosition){
        content.classList.add('active');
    }else{
        content.classList.remove('active')
    }
})
// Get a reference to the <path>
var starPath = document.querySelector('#star-path');

// Get length of path... ~577px in this case
var pathLength = starPath.getTotalLength();


// Make very long dashes (the length of the path itself)
starPath.style.strokeDasharray = pathLength + ' ' + pathLength;

// Offset the dashes so the it appears hidden entirely
starPath.style.strokeDashoffset = pathLength;

// Jake Archibald says so
// https://jakearchibald.com/2013/animated-line-drawing-svg/
starPath.getBoundingClientRect();

// When the page scrolls...
window.addEventListener("scroll", function(e) {
 
  // What % down is it? 
  // https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
  // Had to try three or four differnet methods here. Kind of a cross-browser nightmare.
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
  console.log(scrollPercentage);
    
  // the lines will be drawn before 20% of scroll
  if( (scrollPercentage-0.18)<=0){
      scrollPercentage = 0
  }else{
      scrollPercentage-=0.18
      // 100/78 = 1.28205128205
      scrollPercentage *= 1.28205128205
  }
  if(scrollPercentage >= 0.30){starPath.style.opacity=`${scrollPercentage*100}%`}else{starPath.style.opacity="10%"}
  var drawLength = pathLength * (scrollPercentage);

  
  // Draw in reverse
  starPath.style.strokeDashoffset = pathLength - drawLength;
    
  // When complete, remove the dash array, otherwise shape isn't quite sharp
 // Accounts for fuzzy math
  if (scrollPercentage >= 0.99 ) {
    starPath.style.strokeDasharray = "none";
    
  } else {
    starPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    
  }
  
});

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    // markers: true,
    start: "top 6%",
    trigger: ".testinho",
    toggleClass:{targets:".nav", className:"nav-active" }
})

// const test = gsap.timeline({
//     scrollTrigger:{
//     trigger:".row",
//     // markers:true,
//     start:"top 70%",
//     end: "top 40%",
//     onUpdate:(self) => console.log(self),
//     scrub:true,
//     toggleActions: "restart none none none",
    
//     // end:"top 30%",
    
//     pin: ".col",
//     pinSpacing: true

// }});

// test.to(".col",{ x:500, duration:3})

// let oldValue = 0
// let newValue = 0
// let pos = 0
// window.addEventListener('scroll', (e) => {
//   newValue = window.pageYOffset;
//   if (oldValue < newValue) {
//       pos++;
//     console.log("Up"+pos);
//   } else if (oldValue > newValue) {
//       pos--;
//     console.log("Down"+pos);
//   }
//   oldValue = newValue;
// });