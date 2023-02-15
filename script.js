/**
 * @author : https://github.com/abderox
 * @Extension_Name : SpeedUp
 * @Version : 1.0.0
 */



const createButton = (innerHTML, ...styles) => {

    const button = document.createElement('button');
    button.style.position = 'fixed';
    button.style.top = '50%';
    button.style.right = '60px';
    button.style.zIndex = styles[5];
    button.style.backgroundColor = styles[0];
    button.style.color = styles[1];
    button.style.border = styles[2];
    button.style.padding = '10px';
    button.style.borderRadius = '50%';
    button.style.width = '50px';
    button.style.height = '50px';
    button.style.fontSize = styles[3];
    button.style.cursor = 'pointer';
    button.style.outline = 'none';
    button.style.display = styles[4];
    button.style.opacity = styles[6];
    button.innerHTML = innerHTML;
    button.style.transition = 'all 0.5s ease';
    button.style.transition = 'all 0.5s ease';
    button.style.animation = 'bounce 1s 1';
    button.style.animation = 'bounce 1s 1';
    button.style.animationDelay = '0.5s';
    button.style.animationDelay = '0.7s';
    button.style.animationTimingFunction = 'ease-in-out';
    button.style.animationTimingFunction = 'ease-in-out';
    button.classList.add("speed-up-class");

    return button;

}




function Speed_up() {
    'use strict';

    var video = document.querySelector('video');
    var playbackRate = video?.playbackRate || 1;

    var button = createButton(`x${playbackRate}`, 'white', 'black', '2px solid black', '14px', 'block', 10000, '0.25');
    var button1 = createButton('+', 'white', 'green', '2px solid green', '20px', 'none', 9998, '1');
    var button2 = createButton('-', 'white', 'green', '2px solid green', '20px', 'none', 9999, '1');

    //when button is active
    button.addEventListener('click', function () {

        button.style.opacity = '1';
        button1.style.display = 'block';
        button2.style.display = 'block';
        // add translation
        button1.style.transform = 'translate(0,-55px)';
        button2.style.transform = 'translate(0,55px)';


    });

    button.addEventListener('dblclick', function () {
        button.style.opacity = '0.25';
        button1.style.display = 'none';
        button2.style.display = 'none';
        // remove translation
        button1.style.transform = 'translate(0px,0px)';
        button2.style.transform = 'translate(0px,0px)';
    }
    );

    if (video) {
        document.body.appendChild(button);
        button.classList.add("speed-up-primary");
        document.body.appendChild(button2);
        document.body.appendChild(button1);
    }


    // on click on button1
    button1.addEventListener('click', function () {
        video.playbackRate += 0.25;
        button.innerHTML = `x${video.playbackRate}`;
    }
    );

    // on click on button2
    button2.addEventListener('click', function () {
        video.playbackRate -= 0.25;
        button.innerHTML = `x${video.playbackRate}`;
    }
    );

}

// when page is loaded
window.onload = function () {
    Speed_up();
}

timeout = null;
document.addEventListener("DOMSubtreeModified", function () {
    if (timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(function () {
        if (!window.location.href.includes('youtube')) {
            var buttons = document.querySelectorAll('.speed-up-class');
            if (
                buttons.length < 1
            ) {
                Speed_up();
            }
        }
    }, 1000);
}, false);





var buttons = document.querySelectorAll('.speed-up-class');
if (
    buttons.length > 1
) {
    //when d is clicked add 0.25
    //when s is clicked substract 0.25
    document.addEventListener('keydown', function (e) {
        var button = document.querySelector('.speed-up-primary');
        switch (e.key) {
            case 'd':
                video.playbackRate += 0.25;
                button.innerHTML = `x${video.playbackRate}`;
                break;
            case 's':
                video.playbackRate -= 0.25;
                button.innerHTML = `x${video.playbackRate}`;
                break;
            default:
                video.playbackRate = 1;
                button.innerHTML = `x${video.playbackRate}`;
        }
    }
    );
}