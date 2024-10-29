function animatePercentage(element, start, end, duration) {
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let progress = Math.min(timeElapsed / duration, 1); 
        let currentValue = Math.floor(progress * (end - start) + start);

        element.textContent = currentValue + "%";

        if (progress < 1) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

const silatElement = document.getElementById('silat');
const futsalElement = document.getElementById('futsal');
const marawisElement = document.getElementById('marawis');
const pmrElement = document.getElementById('pmr');
const pramukaElement = document.getElementById('pramuka');
const rohisElement = document.getElementById('rohis');
const osisElement = document.getElementById('osis');
const basketElement = document.getElementById('basket');
const itcElement = document.getElementById('itc');
const osis2Element = document.getElementById('osis2');
const basket2Element = document.getElementById('basket2');

animatePercentage(silatElement, 0, 80, 3500);   
animatePercentage(futsalElement, 0, 90, 3500);  
animatePercentage(marawisElement, 0, 90, 3500); 
animatePercentage(pmrElement, 0, 85, 3500);     
animatePercentage(pramukaElement, 0, 95, 3500); 
animatePercentage(rohisElement, 0, 90, 3500); 
animatePercentage(osisElement, 0, 100, 3500); 
animatePercentage(basketElement, 0, 95, 3500); 
animatePercentage(itcElement, 0, 95, 3500); 
animatePercentage(basket2Element, 0, 95, 3500); 
animatePercentage(osis2Element, 0, 95, 3500); 
