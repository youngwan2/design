$(document).ready(function () {
  $('.da_music').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    variableWidth: true
  })
  $('.al_music').slick({
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  });
});




// 메뉴 아이콘 클릭 시 슬라이드 메뉴 토글
document.querySelector('.menu').addEventListener('click', function() {
  document.querySelector('.menu-slide').classList.toggle('menu-show');
  console.log('클릭됨')
});


// 닫기 버튼을 클릭하면 메뉴가 사라진다.
document.querySelector('.close_btn').addEventListener('click',()=>{
  document.querySelector('.menu-slide').classList.toggle('menu-show');
})


