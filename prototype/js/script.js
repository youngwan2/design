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
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  });
});




// 메뉴 아이콘 클릭 시 슬라이드 메뉴 토글
document.querySelector('.menu').addEventListener('click', function () {
  document.querySelector('.menu-slide').classList.toggle('menu-show');
  console.log('클릭됨')
});


// 닫기 버튼을 클릭하면 메뉴가 사라진다.
document.querySelector('.close_btn').addEventListener('click', () => {
  document.querySelector('.menu-slide').classList.toggle('menu-show');
})




/* -------------------------------------------------------------------- */

const daMusic = document.querySelector('.da_music');
const alMusic = document.querySelector('.al_music');
const artist = document.querySelector('.artist');



const daMusicList = [
  { src: './images/Dally1.png', alt: "샬라샬라1_10com" },
  { src: './images/Dally2.png', alt: "샬라샬라2_10com" },
  { src: './images/Dally3.png', alt: "샬라샬라3_10com" }
]

const alMusicList = [
  {
    src: "./images/LatestAlbum(1).png",
    alt: "샬라샬라1_10cm",
    title: "Perfect Fix",
    desc: "singer"
  },
  {
    src: "./images/LatestAlbum(2).png",
    alt: "샬라샬라2_10cm",
    title: "Perfect Fix",
    desc: "singer"
  }, {
    src: "./images/LatestAlbum(3).png",
    alt: "샬라샬라3_10cm",
    title: "Perfect Fix",
    desc: "singer"
  },
]


function daMusicListRender(daMusicList) {
  for (let i = 0; i < daMusicList.length; i++) {
    daMusic.innerHTML += `
  <div class="da_img">
    <picture>
      <img src="${daMusicList[i].src}" alt="${daMusicList[i].alt}" />
    </picture>
  </div>
  `
  }
}
daMusicListRender(daMusicList)


function alMusicListRender(alMusicList) {
  for (let i = 0; i < alMusicList.length; i++) {
    alMusic.innerHTML += `
      <div class="al_img">
      <picture>
        <img
          src="${alMusicList[i].src}"
          alt="${alMusicList[i].alt}"
        />
        <div class="al_tit">
          <span class="al_title">${alMusicList[i].title}</span>
          <p class="al_desc">${alMusicList[i].desc}</p>
        </div>
      </picture>
    </div>
      `
  }
}

alMusicListRender(alMusicList)




