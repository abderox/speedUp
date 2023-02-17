/**
 * @author : https://github.com/abderox
 * @Extension_Name : SpeedUp
 * @Version : 1.0.3
 */

var blurred_div = null;
// var player_ = null;

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


function update_locale_storage(val) {
    localStorage.setItem('speed_up', val);
}



function Speed_up() {
    'use strict';

    var video = document.querySelector('video');
    var playbackRate = localStorage.getItem('speed_up') || video?.playbackRate || 1;

    var button = createButton(`x${playbackRate}`, 'white', 'black', '2px solid black', '14px', 'block', 10000, '0.25');
    var button1 = createButton('+', 'white', 'green', '2px solid green', '20px', 'none', 9998, '1');
    var button2 = createButton('-', 'white', 'green', '2px solid green', '20px', 'none', 9999, '1');
    var button3 = createButton('F', 'white', 'red', '2px solid red', '20px', 'none', 9997, '1');


    //when button is active
    button.addEventListener('click', function () {

        button.style.opacity = '1';
        button1.style.display = 'block';
        button2.style.display = 'block';
        button3.style.display = 'block';
        // add translation
        button1.style.transform = 'translate(0,-55px)';
        button2.style.transform = 'translate(0,55px)';
        button3.style.transform = 'translate(-55px,0)';

        button3.style.transition = 'all 0.7s ease';
        button1.style.transition = 'all 0.5s ease';
        button2.style.transition = 'all 0.5s ease';


    });

    button.addEventListener('dblclick', function () {
        button.style.opacity = '0.25';
        button1.style.display = 'none';
        button2.style.display = 'none';
        button3.style.display = 'none';
        // remove translation
        button1.style.transform = 'translate(0px,0px)';
        button2.style.transform = 'translate(0px,0px)';
        button3.style.transform = 'translate(0px,0px)';
    }
    );

    if (video) {

        document.body.appendChild(button2);
        document.body.appendChild(button1);
        document.body.appendChild(button3);
        button3.classList.add("speed-up-fullscreen");
        document.body.appendChild(button);
        button.classList.add("speed-up-primary");

    }


    // on click on button1
    button1.addEventListener('click', function () {
        video.playbackRate += 0.25;
        update_locale_storage(video.playbackRate)
        button.innerHTML = `x${video.playbackRate}`;
    }
    );

    // on click on button2
    button2.addEventListener('click', function () {
        video.playbackRate -= 0.25;
        update_locale_storage(video.playbackRate)
        button.innerHTML = `x${video.playbackRate}`;
    }
    );

    // on click on button3
    button3.addEventListener('click', function () {
        toggle_full_screen();
    }
    );

}


function toggle_full_screen() {
    var video = document.querySelector('video');

    // if (player_) {
    //     if (player_.toggleFullscreen) {
    //         player_?.toggleFullscreen();
    //     }
    //     return;
    // }
    if (video) {

        // if video is full 
        if (document.fullscreenElement) {

            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) { /* Firefox */
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE/Edge */
                document.msExitFullscreen();
            }
        }

        // if video is not full
        else {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.mozRequestFullScreen) { /* Firefox */
                video.mozRequestFullScreen();
            } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) { /* IE/Edge */
                video.msRequestFullscreen();
            }

        }
    }
}


function blurry_video(video) {
    var boringText = document.createElement('div');
    boringText.style.position = "absolute";
    boringText.style.top = `${(video.clientHeight / 2)}px`;
    boringText.style.left = "50%";
    boringText.style.transform = "translate(-50%, 50%)";
    boringText.style.zIndex = "9999";
    boringText.style.pointerEvents = "none";
    boringText.style.userSelect = "none";
    boringText.style.textAlign = "center";
    boringText.style.width = "100%";
    boringText.style.height = "100%";
    boringText.style.background = "rgba(0,0,0,0.5)";
    // display flex
    boringText.style.display = "flex";
    boringText.style.justifyContent = "center";
    boringText.style.alignItems = "center";
    // create h1
    var h1 = document.createElement('h1');
    h1.innerText = "Hidden";
    h1.style.fontSize = "100px";
    h1.style.fontWeight = "bold";
    h1.style.color = "white";
    h1.style.textShadow = "0 0 10px black";
    h1.style.zIndex = "9999";
    h1.style.pointerEvents = "none";
    h1.style.textAlign = "center";
    h1.style.width = "100%";
    h1.style.height = "100%";
    //opacity
    h1.style.opacity = "0.25";
    // animation rainbow
    var keyframes = [
        { color: 'red' },
        { color: 'orange' },
        { color: 'yellow' },
        { color: 'green' },
        { color: 'blue' },
        { color: 'indigo' },
        { color: 'violet' }
    ];

    var options = {
        duration: 3000,
        iterations: Infinity,
        easing: 'ease-in-out'
    };

    var animation = boringText.animate(keyframes, options);
    // add animation to h1
    h1.animate(keyframes, options);
    // add h1 to div
    boringText.appendChild(h1);
    // class list
    boringText.classList.add("speed-up-blurry");
    return boringText;
}


function toggle_muted_video(video) {
    video.muted = !video.muted;
}

// function yt_ad_detection_handler(video) {


//     console.log(player_)
//     if (player_) {
//         var adState = player_.getAdState();
//         if (adState === 1) {
//             player_.mute();
//             if (video) {
//                 video.style.filter = "blur(20px)";
//                 blurred_div = blurry_video(video);
//                 video.parentElement.appendChild(blurred_div);
//             }
//         }
//         else {
//             player_.unMute();
//             if (video) {
//                 video.style.filter = "";
//                 video.parentNode.removeChild(blurred_div);
//             }
//         }
//     }
// }

// when page is loaded
window.onload = function () {


    setTimeout
        (
            function () {
                var video = document.querySelector('video');

                if (!video) {
                    return;
                }

                Speed_up();

                // create a new observer instance
                const observer = new MutationObserver(function (mutations) {
                    mutations.forEach(function (mutation) {
                        if (mutation.type == 'attributes') {

                            var yt_btn_ad = document.querySelector('.ytp-ad-skip-button');
                            var buttons = document.querySelectorAll('.speed-up-class');
                            var video = document.querySelector('video');

                            if (yt_btn_ad) {
                                console.log("boring ad is skiped")
                                yt_btn_ad.click();
                            }

                            // yt_ad_detection_handler(video);

                            if (blurred_div && video) {
                                video.addEventListener('resize', function () {
                                    var videoRect = video.getBoundingClientRect();
                                    blurred_div.style.top = (videoRect.height / 2) + "px";
                                    blurred_div.style.left = (videoRect.width / 2) + "px";
                                });
                            }

                            if (!video) {

                                if (buttons.length > 0) {
                                    buttons.forEach(function (button) {
                                        button.remove();
                                    });
                                }

                                return;
                            }

                            if (buttons.length == 0) {
                                Speed_up();
                            }
                            if (
                                video?.playbackRate && localStorage.getItem('speed_up') != null && video?.playbackRate != localStorage.getItem('speed_up')
                            ) {
                                var playbackRate = localStorage.getItem('speed_up') || video?.playbackRate || 1;

                                video.playbackRate = parseFloat(playbackRate);
                                var button = document.querySelector('.speed-up-primary');
                                button.innerHTML = `x${video.playbackRate}`;
                            }
                        }
                    });
                });

                // start observing the button for changes to its attributes

                observer.observe(video, { attributes: true });


                video.addEventListener('canplay', function () {

                    var playbackRate = localStorage.getItem('speed_up') || video?.playbackRate || 1;

                    video.playbackRate = parseFloat(playbackRate);
                    var button = document.querySelector('.speed-up-primary');
                    button.innerHTML = `x${video.playbackRate}`;

                    video.removeEventListener('canplay', function () { });
                });



            }
            , 500
        );




}



timeout = null;
document.addEventListener("DOMSubtreeModified", function () {
    if (!window.location.href.includes("youtube")) {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(function () {

            var buttons = document.querySelectorAll('.speed-up-class');
            var video = document.querySelector('video');

            if (!video) {

                if (buttons.length > 0) {
                    buttons.forEach(function (button) {
                        button.remove();
                    });
                }

                return;
            }

            if (buttons.length == 0) {
                Speed_up();
            }
            if (
                video?.playbackRate && localStorage.getItem('speed_up') != null && video?.playbackRate != localStorage.getItem('speed_up')
            ) {
                var playbackRate = localStorage.getItem('speed_up') || video?.playbackRate || 1;

                video.playbackRate = parseFloat(playbackRate);
                var button = document.querySelector('.speed-up-primary');
                button.innerHTML = `x${video.playbackRate}`;
            }

        }, 1000);
    }
}, false);

document.addEventListener('keydown', function (e) {

    var button = document.querySelector('.speed-up-primary');
    var video = document.querySelector('video');

    if (video && button) {
        switch (e.key) {
            case 'd':
                video.playbackRate += 0.25;
                update_locale_storage(video.playbackRate)
                button.innerHTML = `x${video.playbackRate}`;
                break;
            case 's':
                video.playbackRate -= 0.25;
                update_locale_storage(video.playbackRate)
                button.innerHTML = `x${video.playbackRate}`;
                break;
            case 'b':
                //toggle blurry div
                if (!blurred_div) {
                    blurred_div = blurry_video(video);
                    video.style.filter = "blur(45px)";
                    video.parentElement.appendChild(blurred_div);
                }
                else {
                    video.style.filter = "";
                    video.parentNode.removeChild(blurred_div);
                    blurred_div = null;
                }
                break;

            case 'h':
                toggle_muted_video(video);
                if (!blurred_div) {
                    blurred_div = blurry_video(video);
                    video.style.filter = "blur(45px)";
                    video.parentElement.appendChild(blurred_div);
                }
                else {
                    video.style.filter = "";
                    video.parentNode.removeChild(blurred_div);
                    blurred_div = null;
                }
                break;

            default:
                button.innerHTML = `x1`;
        }
    }
}
);








