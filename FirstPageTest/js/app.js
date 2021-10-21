this.pct = 0
this.isRotated = false
function run(namePath, pct){
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
var starPath = document.querySelector(namePath);

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
  var divTop = document.getElementById("startDrawn").offsetTop
  /* define the beginning of a div and yours percentage
  7051 = 100%
  1165 = x
  7051x = 1165*100
  x = (1165*100)/7051
  */
  var regraTres = (divTop*100)/(document.documentElement.scrollHeight - document.documentElement.clientHeight)
  regraTres = pct
  // What % down is it? 
  // https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
  // Had to try three or four differnet methods here. Kind of a cross-browser nightmare.
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
  this.pct = scrollPercentage
  console.log(document.documentElement.scrollHeight - document.documentElement.clientHeight);
  // console.log(document.documentElement.clientHeight);
  
  var percentPage = regraTres/100

  // the lines will be drawn before 20% of scroll
  if( (scrollPercentage-percentPage)<=0){ 
      scrollPercentage = 0
  }else{
      scrollPercentage-=percentPage
      // 100/82 = 1.28205128205
      scrollPercentage *= 100/Math.abs(((percentPage*100)-100))
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
    starPath.style.strokeDasharray =pathLength + ' ' + pathLength ;
    
  }
  if(this.pct>0.9){
    this.isRotated = true;
  }else{
    this.isRotated = false
  }
});

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    // markers: true,
    start: "top 6%",
    trigger: ".testinho",
    toggleClass:{targets:".nav", className:"nav-active" }
})
}

run('#star-path', 20);
run('#star-path2', 35);
run('#star-path3', 90);
run('#star-path4', 90);

function rotate(ang, className){
  let svgs = document.getElementsByClassName(className)
  for(let svg of svgs){
    svg.style.transform = `rotate(-${ang}deg)`;
  }
}

rotate(12, 'star-svg');
