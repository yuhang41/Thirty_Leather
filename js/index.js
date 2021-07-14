AOS.init({
  duration: 1200,
})

//聯絡客服的顯示
document.querySelector('.more-button').addEventListener('click', function () {
    document.querySelector('.chatbot').classList.toggle('active');
});


//Pagination Swiper
var myswiper1 = new Swiper('.myswiper1', {
  // effect: 'fade',
  autoplay: {
    delay: 3000,
  },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
    },
});

// Initialize Swiper 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 1350px
      1550:{
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1350:{
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },      
    }
  });


// 滾動顯示
window.onwheel = wheelslide;
// window scroll function
function wheelslide(e)
{
  var moveEffect = document.getElementById('move');
  
  // scrolling downward
  if(e.deltaY > 0)
  {
    if(moveEffect.style.right == '650px' || moveEffect.style.right == ''){
      moveEffect.style.right = '323px';
      moveEffect.style.opacity = '1';
    } 
    
  }
  else
  {
    if(moveEffect.style.right == '323px'){
      moveEffect.style.right = '650px';
      moveEffect.style.opacity = '0';
    }
   
  }
}


//navbar
//When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};
// Get the navbar
var navbar = document.getElementById("navbar");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
//取得banner的高度
var bannerHeight = document.querySelector('.swiper-container').offsetHeight;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= bannerHeight) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//試穿資訊按鈕操控
let photo_Button = document.querySelector('.photo-button');
let closes = document.querySelector('.studio-photo-close');
let studio_Photo = document.querySelector('.studio-photo');
closes.addEventListener('click',function(){  
  studio_Photo.classList.remove('active');
  
},false);
photo_Button.addEventListener('click',function(){
  studio_Photo.classList.add('active');
});




//slide in on scroll 
// window.onscroll = function() {myFunction()};
let shortLine = document.querySelector('.short-line');
let longLine = document.querySelector('.long-line');
let svgScissors = document.querySelectorAll('.scissors');
console.log(svgScissors);

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    longLine.className="long-line";
    shortLine.className="short-line";
    svgScissors.className = "scissors";
  } else {
    longLine.className="";
    shortLine.className="";
    svgScissors.className ="";
  }
}

// //svg animation
// var $doc = $(document),
//     $win = $(window),
//     $svg = $('svg').drawsvg(animate),
//     max = $doc.height() - $win.height();

//     $win.on('scroll',function(){
//       var p = $win.scrollTop() / max;
//       $svg.drawsvg('progress',p);
//     });

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
const sliderImages = document.querySelectorAll('.slide-in');

let scissors = document.getElementById('scissors')
let scissorsStyle = getComputedStyle(scissors);
let scissorsHeight = parseFloat(scissorsStyle.height.replace("px", ""));

let sew = document.getElementById('sew')
let sewStyle = getComputedStyle(sew);
let sewHeight = parseFloat(sewStyle.height.replace("px", ""));
let sewLine =document.querySelector('.sew-line');
let sewFinger = document.querySelector('.finger');
console.log(sewFinger);


function checkSlide() {
  sliderImages.forEach(sliderImage => {
    const slideInAtSc = (window.scrollY + window.innerHeight) - scissorsHeight / 2;
    let scissorsTop = scissors.getBoundingClientRect().top;
    // bottom of the image
    const imageBottomSc = scissorsTop + scissorsHeight;
    const isHalfShownSc = slideInAtSc > scissorsTop;
    const isNotScrolledPastSc = window.scrollY < imageBottomSc;
    if (isHalfShownSc && isNotScrolledPastSc) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }

    // half way through the image
    const slideInAt = (window.scrollY + window.innerHeight) - sewHeight / 2;
    let sewTop = sew.getBoundingClientRect().top;
    // bottom of the image
    const imageBottom = sewTop + sewHeight*3.5;
    const isHalfShown = slideInAt > sewTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    console.log(imageBottom,window.scrollY);
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
      // sewLine.classList.add("sew-line");
      // sewFinger.classList.add("finger");
    } else {
      sliderImage.classList.remove('active');
      // sewLine.classList.remove("sew-line");
      // sewFinger.classList.remove("finger");
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
