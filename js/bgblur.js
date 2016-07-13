
(function () {
    var $blur_layer, $image_layer, blur_fade, blur_throttle, center_x, center_y, fade_length, max_blur, max_x, max_y, max_z, min_opacity, mouse_move_handler, perspective, transform, win_h, win_w;
    transform = function (elem, transform) {
        elem.style.webkitTransform = transform;
        return elem.style.transform = transform;
    };
    blur_fade = function (elem, blur, fade) {
        return elem.setAttribute('style', '-webkit-filter: blur(' + blur + '); filter: blur(' + blur + '); opacity: ' + fade + ';');
    };
    win_w = window.innerWidth;
    win_h = window.innerHeight;
    center_x = win_w / 2;
    center_y = win_h / 2;
    max_x = win_w * 0.04;
    max_y = win_h * 0.04;
    max_z = 30;
    perspective = 1200;
    max_blur = 300;
    min_opacity = 0.75;
    blur_throttle = 8;
    fade_length = 1 - min_opacity;
    $image_layer = document.getElementById('bgImg');
    $blur_layer = document.getElementById('imgBlur');
    mouse_move_handler = function (mouse_x, mouse_y, ratio_x, ratio_y) {
        var blur_px, fade_i, transform_val;
        transform_val = 'perspective(' + perspective + ') translate3d(' + max_x * ratio_x + 'px, ' + max_y * ratio_y + 'px, ' + max_x * ratio_x + 'px)';
        transform($image_layer, transform_val);
        blur_px = Math.abs(mouse_x - center_x) / center_x * blur_throttle + 'px';
        fade_i = 1 - fade_length * (Math.abs(mouse_x - center_x) / center_x);
        return blur_fade($blur_layer, blur_px, fade_i);
    };
    document.addEventListener('mousemove', function (event) {
        var mouse_x, mouse_y, ratio_x, ratio_y;
        if (window.event) {
            event = window.event;
        }
        mouse_x = event.clientX;
        mouse_y = event.clientY;
        ratio_x = 1 - mouse_x / center_x;
        ratio_y = 1 - mouse_y / center_y;
        mouse_move_handler(mouse_x, mouse_y, ratio_x, ratio_y);
    }, false);
}.call(this));