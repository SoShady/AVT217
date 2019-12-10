// JavaScript source code
    const buttonRight = document.getElementById('slideRight');
    const buttonLeft = document.getElementById('slideLeft');

    buttonRight.onclick = function () {
      document.getElementById('wrapper').scrollLeft += 100;
    };
    buttonLeft.onclick = function () {
      document.getElementById('wrapper').scrollLeft -= 100;
    };