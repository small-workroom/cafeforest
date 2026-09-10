// 三本線と背景の開閉切り替え
function drawer() {
  document.getElementById('line1').classList.toggle('line_1');
  document.getElementById('line2').classList.toggle('line_2');
  document.getElementById('line3').classList.toggle('line_3');
  document.getElementById('navigation').classList.toggle('in');
  document.body.classList.toggle('menu-open');
}

document.getElementById('drawer_navigation').addEventListener('click', function () {
  drawer();

  const isOpen = document.getElementById('navigation').classList.contains('in');
  const navTexts = document.querySelectorAll('.nav_text');

  if (isOpen) {
    setTimeout(() => {
      navTexts.forEach((el) => {
        el.classList.add('navtext_anime');
      });
    }, 200);
  } else {
    navTexts.forEach((el) => {
      el.classList.remove('navtext_anime');
    });
  }
});

// トップページのスクロール監視（Intersection Observer）
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is_active');
    }
  });
}, {
  rootMargin: '0px 0px -100px 0px'
});

const slideImages = document.querySelectorAll('.box');
slideImages.forEach(img => {
  observer.observe(img);
});


//メニューラインの設定
window.addEventListener('load', () => {
  document.documentElement.classList.add('loaded');
});

// メニューページのスクロール監視（Intersection Observer）
const borderObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('loaded_active');
    }
  });
}, {
  rootMargin: '0px 0px -50px 0px'
});

const targetElements = document.querySelectorAll('.border1');
targetElements.forEach(el => {
  borderObserver.observe(el);
});