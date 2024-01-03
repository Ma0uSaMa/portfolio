document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    window.addEventListener("scroll", function () {
        var header = document.getElementById("main-header");
        if (window.scrollY > 50) {
            header.classList.add("hide");
        } else {
            header.classList.remove("hide");
        }
    });

    var typed = new Typed('.typedText', {
        strings: ['Developer'],
        typeSpeed: 50,
        backSpeed: 30,
        startDelay: 500,
        showCursor: true,
        loop: true,
    });

    function previewCV() {
        window.open('sarojrai.pdf', '_blank');
    }

    function downloadCV() {
        var downloadLink = document.createElement('a');
        downloadLink.href = 'sarojrai.pdf';
        downloadLink.download = 'sarojrai.pdf';
        downloadLink.click();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelector('.nav-links');
    var navToggle = document.querySelector('.toggle');

    navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('show');
        navToggle.classList.toggle('active');
    });
});
