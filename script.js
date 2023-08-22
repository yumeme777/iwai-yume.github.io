// ローディング
 const loading = document.querySelector(".loading");
 const spinner = document.querySelector(".spinner");
 const loadingScreen = document.querySelector(".loading-screen");

window.addEventListener('load', () => {
 loading.animate(
  {
    opacity:[1,0],
    visibility:"hidden",
  },
  {
    duration:2000,
    delay:1200,
    easing:'ease',
    fill:'forwards'
  }
 );
// ローディング中
loadingScreen.animate(
  {
    translate:['0 100vh','0 0','0 -100vh']
},{
  duration:2000,
  delay:800,
  easing:'ease',
  fill:'forwards',
}
);
// ローディングアニメ
spinner.animate([
  {
    opacity: 1,
    offset: 0.8,
  },
  {
    opacity: 0,
    offset: 1,
  },
],
{
  duration:1200,
  easing:'ease',
  fill:'forwards',
}
);
});

// セレクタ名（.pagetop）に一致する要素を取得
const pagetop_btn = document.querySelector(".m_page-top_btn");

// .pagetopをクリックしたら
pagetop_btn.addEventListener("click", scroll_top);

// ページ上部へスムーズに移動
function scroll_top() {
  window.scroll({ top: 0, behavior: "smooth" });
}

// スクロールされたら表示
window.addEventListener("scroll", scroll_event);
function scroll_event() {
  if (window.pageYOffset > 100) {
    pagetop_btn.style.opacity = "1";
  } else if (window.pageYOffset < 100) {
    pagetop_btn.style.opacity = "0";
  }
}

// 小さい画面でもいいかんじになるように
!(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value =
      window.outerWidth > 360
        ? "width=device-width,initial-scale=1"
        : "width=360";
    if (viewport.getAttribute("content") !== value) {
      viewport.setAttribute("content", value);
    }
  }
  addEventListener("resize", switchViewport, false);
  switchViewport();
})();

// ハンバーガーメニュー
const hamburger = document.querySelector(".js_hamburger");
const nav = document.querySelector(".js_nav");
const navItems = document.querySelectorAll(".js_nav-item");
const body = document.querySelector(".js_body");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("is-active");
  body.classList.toggle("is-active");

  navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
      hamburger.classList.remove("is-active");
      nav.classList.remove("is-active");
      body.classList.remove("is-active");
      event.stopPropagation(); //イベントの伝播をとめる
    });
  });
});

// フェードイン
let els = document.querySelectorAll(".js-fadeIn");

els.forEach(function (fadeIn) {
  let windowHeight = window.innerHeight;

  window.addEventListener("scroll", function () {
    let offset = fadeIn.getBoundingClientRect().top;
    let scroll = window.scrollY;

    if (scroll > offset - windowHeight + 150) {
      fadeIn.classList.add("is-scrollIn");
    }
  });
});

// ふわっとでる
window.addEventListener("scroll", function () {
  // アニメーションを実行したいエレメントを取得
  const elements = document.getElementsByClassName("js_animateElement");

  // 複数のエレメントに対して、アニメーションを実行する
  Array.prototype.forEach.call(elements, function (element) {
    // ウィンドウの上端とエレメントの上端の距離を取得
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // アニメーションの条件をチェック
    if (elementTop - windowHeight <= 0) {
      // アニメーションを実行するためのコードをここに記述
      element.classList.add("animated");
    }
  });
});

// 左から右に出る
let DT = document.getElementsByClassName("m_figure_term");
let DD = document.getElementsByClassName("m_figure_desc");

if (DT !== null) {
  window.addEventListener("scroll", function () {
    const windowHeight = window.innerHeight;
    const scroll = document.documentElement.scrollTop;

    for (let i = 0; i < DT.length; i++) {
      const PositionTop = DT[i].getBoundingClientRect().top + scroll;
      if (scroll > PositionTop - windowHeight + 250) {
        DT[i].classList.add("is-fadein");
        DD[i].classList.add("is-fadein");
      }
    }
  });
}

// 高さ調整の関数
function adjustHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

// 初回実行とリサイズ時に高さ調整関数を呼ぶ
window.addEventListener("DOMContentLoaded", adjustHeight);
window.addEventListener("resize", adjustHeight);
