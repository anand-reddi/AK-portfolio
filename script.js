//nav bar toggle
const toggleMenuClicked = () => {
    const body = document.body;
    const openIcon = document.getElementById("open-icon");
    const closeIcon = document.getElementById("close-icon");

    body.classList.toggle("open");

    if (body.classList.contains("open")) {
      openIcon.style.display = "none";
      closeIcon.style.display = "flex";
    } else {
      openIcon.style.display = "flex";
      closeIcon.style.display = "none";
    }
  };


//background gradient code
  var i = 0;

  setInterval(() => {
    document.body.style.background =
      "linear-gradient(135deg,#ee9ca7 0%, #ffdde1 " +
      i +
      "%, darkorchid 100%)";
    document.body.style.backgroundRepeat = "no-repeat";
    // document.body.style.backgroundSize="360px 570px";

    i++;

    if (i == 60) {
      i = 0;
    }
  }, 100);


  //dark mode toggle 
//   function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//   }


//mouse animation 
const coords = {x: 0, y: 0 };
const circles = document.querySelectorAll('.circle');
console.log(circles);

circles.forEach(function(circle) {
  circle.x = 0;
  circle.y = 0;
});

window.addEventListener('mousemove', function(e) {
  coords.x = e.clientX;
  coords.y = e.clientY;

});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach( function(circle, index) {
    circle.style.left = x - 15 + "px";
    circle.style.top = y - 15 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;
    
    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.2;
    y += (nextCircle.y - y) * 0.2;
  });
  
  requestAnimationFrame(animateCircles);
}

animateCircles();

window.addEventListener('click', function() {
  circles.forEach(function(circle) {
    circle.style.transform = 'scale(1.4)';
  });
});


      /**
 * skills toggle
 */
      const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }
      const toggleBtnBox = document.querySelector("[data-toggle-box]");
      const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
      const skillsBox = document.querySelector("[data-skills-box]");
      
      for (let i = 0; i < toggleBtns.length; i++) {
        toggleBtns[i].addEventListener("click", function () {
      
          elemToggleFunc(toggleBtnBox);
          for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
          elemToggleFunc(skillsBox);
      
        });
      }


// landing page animations
      window.addEventListener('scroll', reveal);
    
      function reveal(){
        var reveals = document.querySelectorAll('.reveal');
  
        for(var i = 0; i < reveals.length; i++){
  
          var windowheight = window.innerHeight;
          var revealtop = reveals[i].getBoundingClientRect().top;
          var revealpoint = 150;
  
          if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
          }
          else{
            reveals[i].classList.remove('active');
          }
        }
      }