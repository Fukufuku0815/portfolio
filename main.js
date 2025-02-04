document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // ハンバーガーメニューのクリックでメニューを表示
    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    // メニュー項目クリックでメニューを閉じる
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');

    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();  // 初回チェック
});

// ページ遷移を制御するJavaScript
let currentPage = 1;
const totalPages = 3;
const pages = document.querySelectorAll('.page-content');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// ページを表示する関数
function showPage(pageNumber) {
    pages.forEach((page, index) => {
        if (index === pageNumber - 1) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });
}

// 前のページに移動
prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

// 次のページに移動
nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
});

// 初期ページの表示
showPage(currentPage);
