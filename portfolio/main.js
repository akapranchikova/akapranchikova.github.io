function clickOnImages(event) {
    const div = document.createElement('div');
    const src = location.origin + '/portfolio/'+ event.target.getAttribute('srcfull') || event.target.src;
    console.log(src, event.target.src)
    div.style.background = 'RGBA(0,0,0,.5) url(' + src + ') no-repeat center';

    div.style.backgroundSize = 'contain';
    div.style.width = '100%';
    div.style.height = '100%';
    div.style.position = 'fixed';
    div.style.zIndex = '10000';
    div.style.top = '0';
    div.style.left = '0';
    div.style.cursor = 'zoom-out';

    document.getElementById('fullscreen').append(div);

    div.onclick = () => {
        document.getElementById('fullscreen').removeChild(div);
    }
}

function init() {
    // addProjects();
    // addPosters();
    setTimeout(() => {
        const images = document.getElementsByClassName("poster");
        Array.from(images).forEach(image => {
            image.addEventListener('click', clickOnImages);
        })
    });
}
