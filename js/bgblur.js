/* Derived from https://gist.github.com/jakealbaugh/0febbd586d0dca22411a */

(function () {
    let $blur_layer, $image_layer, blur_fade, blur_throttle, center_x, 
    fade_length, max_blur, min_opacity, mouse_move_handler, win_w;

    blur_fade = function (elem, blur, fade) {
        return elem.setAttribute('style', '-webkit-filter: blur(' + blur +
                                                '); filter: blur(' + blur + 
                                                '); opacity: ' + fade + ';');
    };

    win_w = window.innerWidth;
    center_x = win_w / 2;
    max_blur = 100;
    min_opacity = 0.6;
    blur_throttle = 5;
    fade_length = 1 - min_opacity;
    $image_layer = document.getElementById('bgImg');
    $blur_layer = document.getElementById('imgBlur');
    
    mouse_move_handler = function (mouse_x) {
        let blur_px, fade_i;
        blur_px = (1 - Math.abs(mouse_x - center_x) / center_x) * blur_throttle + 'px';
        fade_i = 1 - fade_length * (1 - Math.abs(mouse_x - center_x) / center_x);
        return blur_fade($blur_layer, blur_px, fade_i);
    };
    
    if (win_w > 768) {
        document.addEventListener('mousemove', function (event) {
            let mouse_x;
        
            if (window.event) {
                event = window.event;
            }

            mouse_x = event.clientX;
            mouse_move_handler(mouse_x);
        }, false);
    }

}.call(this));