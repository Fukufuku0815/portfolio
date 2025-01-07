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

document.addEventListener('DOMContentLoaded', function () {
    let currentPage = 0;
    const pages = document.querySelectorAll('.page-content');
    const totalPages = pages.length;

    document.getElementById('prev-btn').addEventListener('click', function () {
        if (currentPage > 0) {
            pages[currentPage].classList.remove('active');
            currentPage--;
            pages[currentPage].classList.add('active');
        }
    });

    document.getElementById('next-btn').addEventListener('click', function () {
        if (currentPage < totalPages - 1) {
            pages[currentPage].classList.remove('active');
            currentPage++;
            pages[currentPage].classList.add('active');
        }
    });

    // Initialize the first page
    pages[currentPage].classList.add('active');
});
