
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
const img = document.querySelector('image');
Image.Attribute('Src',images/byui-logo-blur_good.webp);

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
    } else {
        // code for changes to colors and logo
    }
}           
                    