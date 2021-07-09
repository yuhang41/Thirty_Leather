AOS.init({
    duration: 1200,
  })
 //左邊白色區域 
  let AllCommodity = document.querySelector('.AllCommodity');
  let Snowshoe = document.querySelector('.Snowshoe');
  
  function AllCommodityHandler(){
      AllCommodity.classList.toggle('active');
  }
  function SnowshoeHandler(){
      Snowshoe.classList.toggle('active');
  }
  AllCommodity.addEventListener('click',AllCommodityHandler);
  Snowshoe.addEventListener('click',SnowshoeHandler);
// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

//tab切換分頁
$(".tab").each(function (index) {
    $(this).click(function (e) {
        triggletab();
        triigletabcontent();
        $(this).toggleClass("active");
        $(".tab-c")
            .eq(index)
            .toggleClass("active");
    });
});
//to remove all tab headers
function triggletab() {
    $(".tab").each(function () {
        $(this).removeClass("active");
    });
}
//triggle the tab content
function triigletabcontent() {
    $(".tab-c").each(function () {
        $(this).removeClass("active");
    });
}

//shoes parallax
document.addEventListener("mousemove",parallax);
function parallax(e){
    this.querySelectorAll('.layer').forEach(layer=>{
        const speed = layer.getAttribute('data-speed');

        const x =(window.innerWidth - e.pageX*speed)/100
        const y =(window.innerHeight - e.pageY*speed)/100
        layer.style.transform =`translateX(${x}px) translateY(${y}px)`

    })
}

//shoes 點擊效果
$(".click-button").each(function (index) {
  $(this).click(function (e) {
      // removeClick();
      $(".click-button")
          .eq(index)
          .toggleClass("active");
  });
});
