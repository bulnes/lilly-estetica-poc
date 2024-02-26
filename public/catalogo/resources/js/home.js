function displayCover() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('home');

    const containerDisplayCover = document.querySelector('.container-display-cover');

    const containerDisplayHome = document.querySelector('.container-display-home');

    if (myParam === '1') {
        containerDisplayHome.style.display = 'block';
        containerDisplayCover.style.display = 'none';
    } else {
        containerDisplayHome.style.display = 'none';
        containerDisplayCover.style.display = 'block';
    }

    containerDisplayCover.addEventListener('click', () => {
        window.location.href = '/catalogo/index.html?home=1'
    });
}

if (window.innerWidth <= 992) {
    displayCover();
}

/*
if ((window.innerWidth > 1200) || window.innerWidth > 600 && location.search === '?home=1') {
    document.write(`<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=a0043d5b-a7c3-4f57-ae05-6d1aae41a6e7"></script>`);
}
*/
function displayVideoPaollaOliveira() {

    const containerDisplayHome = document.querySelector('.container-display-home');

    const whatsappLinkContainer = document.querySelector('.whatsapp-link-container');

    const linkToPlayVideoContainer = document.querySelector('.link-to-play-video-container');

    const linkToPlayVideoContainerMobile = document.querySelector('.link-to-play-video-container-mobile');

    const videoPaollaContainer = document.querySelector('.video-paolla-container');

    const closedVideoPaollaBtn = document.querySelector('.closed-video-paolla-btn');

    const videoPaolla = document.querySelector('.video-paolla');

    linkToPlayVideoContainer.addEventListener('click', () => {
        const iframe = document.getElementById('launcher');
        if (iframe) {
            iframe.style.display = 'none';
        }
        videoPaollaContainer.style.display = 'flex';
        containerDisplayHome.style.display = 'none';
        videoPaolla.play();
    });

    linkToPlayVideoContainerMobile.addEventListener('click', () => {
        videoPaollaContainer.style.display = 'flex';
        videoPaolla.play();
    });

    closedVideoPaollaBtn.addEventListener('click', () => {
        const iframe = document.getElementById('launcher');
        if(iframe) {
            iframe.style.display = 'block';
        }
        videoPaollaContainer.style.display = 'none';
        containerDisplayHome.style.display = 'block';
        videoPaolla.pause();
        whatsappLinkContainer.style.display = 'none';
    })
}

displayVideoPaollaOliveira();

function displayLinkVideoPaollaOliveira() {

    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('home');

    const linkToPlayVideoContainer = document.querySelector('.link-to-play-video-container');

    const linkToPlayVideoContainerMobile = document.querySelector('.link-to-play-video-container-mobile');

    
    if (myParam === '1') {
       linkToPlayVideoContainerMobile.style.display = 'none';
    } else {
        linkToPlayVideoContainerMobile.style.display = 'flex';
    }
}

displayLinkVideoPaollaOliveira();
