

let selectElem = document.querySelector('#theme');
let logo = document.querySelector('#logo');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
  let current = selectElem.value;

  if (current === 'dark') {
    document.body.className = 'dark';
    logo.src = 'images/byui-logo-blue_good.webp';
  } else if (current === 'light') {
    document.body.className = 'light';
    logo.src = 'images/byui-logo-blue_good.webp';
  }
}

                    