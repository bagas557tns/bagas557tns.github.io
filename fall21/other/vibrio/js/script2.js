var body = document.getElementsByTagName('body')[0];
        body.style.backgroundColor = 'black';

        // trigger this function every time the user scrolls
        window.onscroll = function (event) {
            var scroll = window.pageYOffset;
            if (scroll < 300) {
                // green
                body.style.backgroundColor = 'black';
            } else if (scroll >= 300 && scroll < 600) {
                // yellow
                body.style.backgroundColor = 'black';
            } else if (scroll >= 600 && scroll < 1200) {
                // blue
                body.style.backgroundColor = 'black';
            } else if (scroll >= 1200 && scroll < 1800) {
                // orange
                body.style.backgroundColor = 'black';
            } else if (scroll >= 1800 && scroll < 3250) {
                // red
                body.style.backgroundColor = 'black';
            } else {
                // purple
                body.style.backgroundColor = 'limegreen';
            }
        }