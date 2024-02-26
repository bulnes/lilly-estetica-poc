let data = '';

/*
if (window.innerWidth > 600) {
    document.write(`<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=a0043d5b-a7c3-4f57-ae05-6d1aae41a6e7"></script>`);
}
*/
function readTextFile(file) {

    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            data = JSON.parse(rawFile.responseText)

            const knowMoreBtn = document.querySelector('.know-more-btn');

            const popUpKnowMoreBackground = document.querySelector('.pop-up-know-more-background');

            const popUpMoreCloseButton = document.querySelector('.pop-up-more-close-button');

            const contentMainContainer = document.querySelector('.content-main-container');

            knowMoreBtn.addEventListener('click', () => {
                popUpKnowMoreBackground.style.display = 'flex';
            });

            popUpMoreCloseButton.addEventListener('click', () => {
                popUpKnowMoreBackground.style.display = 'none';
            });

            popUpKnowMoreBackground.addEventListener('click', (event) => {
                const classNameTarget = event.target.className;
                if (classNameTarget === "pop-up-know-more-background") {
                    popUpKnowMoreBackground.style.display = 'none';
                }
            });

            popUpKnowMoreBackground.addEventListener('click', (event) => {
                console.log(event.target)
                if (event.target.className.includes('pop-up-know-more-background')) {
                    popUpKnowMoreBackground.style.display = 'none';
                    document.documentElement.style.overflow = 'scroll';
                }
            });

            const idProduct = parseInt(localStorage.getItem('idProduct'));

            let product;
            for (let i = 0; i < data.productsInfo.length; i += 1) {
                if (data.productsInfo[i].id === idProduct) {
                    product = data.productsInfo[i];
                }
            }

            document.querySelector('.content-title ').innerHTML = product.title;

            document.querySelector('.content-info').innerHTML = product.subtitle;

            document.querySelector('.pop-up-know-more-title').innerHTML = product.title;

            document.querySelector('.pop-up-know-more-text').innerHTML = product.popUpDescription;

            document.querySelector('.number-sessions-result').innerHTML = product.numberSessionsResult;

            document.querySelector('.time-session').innerHTML = product.timeSession;

            document.querySelector('.interval-session').innerHTML = product.intervalSession;

            document.querySelector('.video-youtube').src = product.srcVideo + '?rel=0&modestbranding=1&showinfo=0';

            const { treatmentBenefits } = product;

            for (let i = 0; i < treatmentBenefits.length; i += 1) {
                let benefitsItem = document.createElement('li');
                benefitsItem.setAttribute('class', 'benefits-item');
                benefitsItem.innerHTML = treatmentBenefits[i];
                document.querySelector('.benefits-list').appendChild(benefitsItem);
            }

            //contrução do carousel

            const beforeAfterPhoto = document.querySelector('.before-after-photo');

            const leftArrowButton = document.querySelector('.left-arrow-button');

            const rightArrowButton = document.querySelector('.right-arrow-button');

            const arrayImages = product.beforeAfterPhotos;

            let imageIndex = 0;

            let newUrlImage = arrayImages[imageIndex];

            beforeAfterPhoto.src = newUrlImage;

            const indexPointerCarouselContainer = document.querySelector('.index-pointer-carousel-container');

            for (let i = 0; i < arrayImages.length; i += 1) {
                const pointer = document.createElement('p');
                pointer.classList.add('index-pointer');
                indexPointerCarouselContainer.appendChild(pointer);
            }

            const indexPoiters = document.getElementsByClassName('index-pointer');

            indexPoiters[imageIndex].style.background = '#707070';

            const autoChengePhotos = setInterval(() => {
                indexPoiters[imageIndex].style.background = '#D9D9D9';
                imageIndex += 1
                if (imageIndex === arrayImages.length) {
                    imageIndex = 0
                }
                indexPoiters[imageIndex].style.background = '#707070';
                newUrlImage = arrayImages[imageIndex];
                beforeAfterPhoto.src = newUrlImage;

            }, 3000);

            leftArrowButton.addEventListener('click', () => {
                indexPoiters[imageIndex].style.background = '#D9D9D9';
                imageIndex -= 1;
                if (imageIndex === -1) {
                    imageIndex = arrayImages.length - 1;
                }
                indexPoiters[imageIndex].style.background = '#707070';
                newUrlImage = arrayImages[imageIndex];
                beforeAfterPhoto.src = newUrlImage;
                clearInterval(autoChengePhotos);
            });

            rightArrowButton.addEventListener('click', () => {
                indexPoiters[imageIndex].style.background = '#D9D9D9';
                imageIndex += 1;
                if (imageIndex === arrayImages.length) {
                    imageIndex = 0
                }
                indexPoiters[imageIndex].style.background = '#707070';
                newUrlImage = arrayImages[imageIndex];
                beforeAfterPhoto.src = newUrlImage;
                clearInterval(autoChengePhotos);
            });

            
            const toBuy = document.querySelector('.to-buy-btn-desktop')
            if (toBuy) {
                toBuy.addEventListener('click', () => {
                    const chatBtn = document.querySelector('.wrapper-AtBcr');
                    const btns = document.getElementsByTagName('button');
                    console.log(btns)
                })
            }
        }
    }
    rawFile.send(null);

}
/*
if (window.innerWidth > 600) {
    const toBuy = document.querySelector('.to-buy-btn-desktop')
    const toBuyModal = document.querySelector('.free-evaluation-btn')


    if (toBuyModal) {
        toBuyModal.addEventListener('click', () => {
            const iframe = document.getElementById("launcher").contentDocument;

            iframe.querySelector('[aria-label="Chat"]').click();
        })
    }

    if (toBuy) {
        toBuy.addEventListener('click', () => {
            const iframe = document.getElementById("launcher").contentDocument;

            iframe.querySelector('[aria-label="Chat"]').click();
        })
    }

}
*/

readTextFile('/catalogo/resources/js/data.json');

