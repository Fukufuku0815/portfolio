// ハンバーガーメニューの動作
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const menuLinks = document.querySelectorAll('.nav-menu a');

// ハンバーガークリック時の動作
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
});

// メニュー項目クリック時にメニューを閉じる
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('open');
    });
});


document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const triggerHeight = window.innerHeight / 2;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const bottom = section.getBoundingClientRect().bottom;

        if (top < triggerHeight && bottom > triggerHeight) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});
