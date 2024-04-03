// Vanilla JS for buttons

let isDarkModeOn = true;

document.addEventListener('click', (e) => {

    const darkIcon = document.getElementById('fa-moon');
    const lightIcon = document.getElementById('fa-sun');

    if (e.target.dataset.info === 'linkedin') {
        window.open('https://www.linkedin.com/in/mark-baek-028981164/', '_blank');
    } else if (e.target.dataset.info === 'email') {
        window.location.href = 'mailto:mkbk189@gmail.com';
    } else if (e.target.dataset.darkmode === 'dark') {

        lightIcon.classList.remove('dark-mode-hide-icon');
        darkIcon.classList.add('dark-mode-hide-icon');

        isDarkModeOn = false;

        updateInfoCardBackgroundColor()

    } else if (e.target.dataset.darkmode === 'light') {

        lightIcon.classList.add('dark-mode-hide-icon');
        darkIcon.classList.remove('dark-mode-hide-icon');

        isDarkModeOn = true;

        updateInfoCardBackgroundColor()
    }
});

window.addEventListener('resize', () => {

    updateInfoCardBackgroundColor();

});

function updateInfoCardBackgroundColor() {

    const infoComponent = document.getElementById('info-component');
    const footerComponent = document.getElementById('footer-component');

    if (window.innerWidth > 1079 && isDarkModeOn) {
        infoComponent.classList.remove('light-mode-card-background');
        infoComponent.classList.add('dark-mode-background-dark');
    } else if (window.innerWidth > 1079 && !isDarkModeOn) {
        infoComponent.classList.remove('dark-mode-background-dark');
        infoComponent.classList.add('light-mode-card-background');
    } 

    if (!isDarkModeOn) {
        document.body.classList.remove('dark-mode-background-light');
        document.body.classList.remove('dark-mode-text');
        footerComponent.classList.remove('dark-mode-background-dark');

        document.body.classList.add('light-mode-background-light');
        document.body.classList.add('light-mode-text');
        footerComponent.classList.add('light-mode-background-dark');

    } else if (isDarkModeOn) {
        document.body.classList.remove('light-mode-background-light');
        document.body.classList.remove('light-mode-text');
        footerComponent.classList.remove('light-mode-background-dark');

        document.body.classList.add('dark-mode-background-light');
        document.body.classList.add('dark-mode-text');
        footerComponent.classList.add('dark-mode-background-dark');

    }

}