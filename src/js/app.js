document.addEventListener('DOMContentLoaded', () => {

    let oldX = 0,
        oldY = 0;

    ['mousedown', 'touchstart'].forEach(type => {

        document.addEventListener(type, () => {

            ['mousemove', 'touchmove'].forEach(type => {

                document.addEventListener(type, updateCamera);
            });
        });
    });

    ['mouseup', 'touchend'].forEach(type => {

        document.addEventListener(type, () => {

            ['mousemove', 'touchmove'].forEach(type => {

                document.removeEventListener(type, updateCamera);
            });
        });
    });

    function updateCamera(e)
    {
        let clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX,
            clientY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY;

        document.documentElement.style.setProperty('--angle-Y', parseInt(getComputedStyle(document.body).getPropertyValue('--angle-Y')) + (clientX !== oldX ? (clientX > oldX ? 2 : -2) : 0) + 'deg');

        if (false)
        {
            document.documentElement.style.setProperty('--angle-X', parseInt(getComputedStyle(document.body).getPropertyValue('--angle-X')) + (e.clientY !== oldY ? (e.clientY > oldY ? -2 : 2) : 0) + 'deg');
        }

        oldX = clientX;

        oldY = clientY;
    }
});