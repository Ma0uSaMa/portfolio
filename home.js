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
    
    // Use the correct relative path to the PDF file in the root directory
    downloadLink.href = 'sarojrai.pdf';
    
    downloadLink.download = 'sarojrai.pdf';
    downloadLink.click();
}
