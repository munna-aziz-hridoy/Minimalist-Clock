
// === Main CLock ===


const hours = document.getElementById("clock-hours"),
      minutes = document.getElementById("clock-minutes"),
      seconds = document.getElementById("clock-seconds");

const clock = () =>{
    let date = new Date()

    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() * 6

    hours.style.transform = `rotateZ(${hh + mm / 12}deg)`
    minutes.style.transform = `rotateZ(${mm}deg)`
    seconds.style.transform = `rotateZ(${ss}deg)`
}

setInterval(clock, 1000);



// === Clock Text ===


const textHours = document.getElementById("text-hours"),
      textMinutes = document.getElementById("text-minutes"),
      textAmPm = document.getElementById("text-ampm"),
      dateday = document.getElementById("clock-day"),
      datemonth = document.getElementById("clock-month"),
      dateyear = document.getElementById("clock-year");

const clockText = () => {
    let date = new Date()

    let hh = date.getHours(),
        mm = date.getMinutes(),
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear(),
        amPm;

    if(hh >= 12){
        hh = hh - 12;
        amPm= 'PM'
    }else{
        amPm = 'AM'
    }
    

    if(hh < 10){
        hh = `0${hh}`
    }
    textHours.innerHTML = `${hh}:`

    if(mm < 10){
        mm = `0${mm}`
    }
    textMinutes.innerHTML = mm

    textAmPm.innerHTML = amPm

    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    dateday.innerHTML = day
    datemonth.innerHTML = `${months[month]}`
    dateyear.innerHTML = year


}

setInterval(clockText, 1000);

// Dark Theme

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
});


// === Color BUttons ===

let colorRed = document.getElementById('red'),
    colorGreen = document.getElementById('green'),
    colorVio = document.getElementById('vio'),
    colorBlue = document.getElementById('blue');

colorRed.addEventListener('click', () => {
    document.querySelector(':root').style.setProperty('--hue-color', 0);
});

colorGreen.addEventListener('click', () => {
    document.querySelector(':root').style.setProperty('--hue-color', 130);
});

colorVio.addEventListener('click', () => {
    document.querySelector(':root').style.setProperty('--hue-color', 295);
});

colorBlue.addEventListener('click', () => {
    document.querySelector(':root').style.setProperty('--hue-color', 230);
});
