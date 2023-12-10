var modal = document.getElementById('id01');

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

var modal = document.getElementById('id02');

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const translateValue = -currentIndex * 100 + '%';
    slides.style.transform = 'translateX(' + translateValue + ')';
}

function changeSlide(n) {
    showSlide(currentIndex + n);
}

$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
});

