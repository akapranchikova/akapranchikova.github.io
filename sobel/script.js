'use strict';

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const canvasSobel = document.getElementById('canvas-sobel');
const contextSobel = canvasSobel.getContext('2d');

const fileInput = document.getElementById('file');

fileInput.onchange = function(event) {
    const url = window.URL.createObjectURL(event.target.files[0]);
    loadImage(url);
};

function loadImage(src) {
    const image = new Image();
    image.src = src;

    image.onload = drawImage;
}


function drawImage(event) {
    const image = event.target;
    const width = image.width;
    const height = image.height;

    canvas.width = canvasSobel.width = width;
    canvas.height = canvasSobel.height = height;

    context.drawImage(image, 0, 0);
    const imageData = context.getImageData(0, 0, width, height);

    if (typeof window.Worker === 'function') {

        const ww = new Worker('webWorker.js');

        ww.onmessage = function (event) {
            if (Object.prototype.toString.call(event.data) === '[object Uint8ClampedArray]') {
                const sobelDataData = event.data;
                const sobelImageData = Sobel.toImageData(sobelDataData, width, height);

                const pix = sobelImageData.data;
                for (var i = 0, n = pix.length; i < n; i += 4) {
                    pix[i] = 255 - pix[i]; // red
                    pix[i + 1] = 255 - pix[i + 1]; // green
                    pix[i + 2] = 255 - pix[i + 2]; // blue
                    // i+3 is alpha (the fourth element)

                    const med = (pix[i] + pix[i + 1] + pix[i + 2]) / 3;
                    // set it to each value (r = g = b = med)
                    pix[i] = pix[i + 1] = pix[i + 2] = med;
                }
                contextSobel.putImageData(sobelImageData, 0, 0);

                const link = document.createElement('a');
                link.download = 'image.png';
                link.href = document.getElementById('canvas-sobel').toDataURL()
                link.click();
            }
        };

        ww.onerror = function (event) {
            console.error(event);
        };

        ww.postMessage(imageData);
    } else {
        const sobelData = Sobel(imageData);
        const sobelImageData = sobelData.toImageData();
        const pix = sobelImageData.data;
        for (var i = 0, n = pix.length; i < n; i += 4) {
            pix[i] = 255 - pix[i]; // red
            pix[i + 1] = 255 - pix[i + 1]; // green
            pix[i + 2] = 255 - pix[i + 2]; // blue
            // i+3 is alpha (the fourth element)

            const med = (pix[i] + pix[i + 1] + pix[i + 2]) / 3;
            // set it to each value (r = g = b = med)
            pix[i] = pix[i + 1] = pix[i + 2] = med;
        }
        contextSobel.putImageData(sobelImageData, 0, 0);
    }
}

