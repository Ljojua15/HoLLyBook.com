let settingsmenu = document.querySelector('.setings-menu')
let darkBtn = document.getElementById('dark-btn')

function settingsMenuToggle() {

    settingsmenu.classList.toggle('settings-menu-height');
}
darkBtn.onclick = function() {
    darkBtn.classList.toggle('dark-btn-on');
    document.body.classList.toggle('dark-theme');

}

// if (localStorage.getItem('theme') == 'light')(
//     darkBtn.classList.remove('dark-btn-on'); document.body.classList.remove('dark-theme');
// )

// else if (localStorage.getItem('theme') == 'dark') {
//     darkBtn.classList.add('dark-btn-on');
//     document.body.classList.add('dark-theme');
// }

// localStorage.setItem('theme', 'dark');
// localStorage.getItem('theme');