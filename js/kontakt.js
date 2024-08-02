const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);


const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const contactForm = document.getElementById('contact-form');
const errorElement = document.getElementById('error');
const successMsg = document.getElementById('success-msg');
const loadingAnimation = document.getElementById('loading-animation');
const submitBtn = document.getElementById('submit');
  
const validate = (e) => {
  e.preventDefault();

  let hasError = false;
  errorElement.innerHTML = '';
  successMsg.innerHTML = '';
  successMsg.classList.add('hidden');
  loadingAnimation.classList.add('hidden');
 
  if (name.value.length < 3) {
    errorElement.innerHTML = 'Dein name sollte länger als 3 Character sein.';
    return false;
  } 
  
  if (!(email.value.includes('.') && (email.value.includes('@')))) {
    errorElement.innerHTML = 'Bitte geben sie eine gültige email adrease.';
    return false;
  } 

  if (!emailIsValid(email.value)) {
    errorElement.innerHTML = 'Bitte geben sie eine gültige email adrease.';
    return false;
  }

  if (message.value.length < 15) {
    errorElement.innerHTML = 'Bitte schreiben sie eine längere message.';
    return false;
  }

  if (hasError) {
    return false;
}

      // Ladeanimation anzeigen
      loadingAnimation.classList.remove('hidden');

      // Nach 3 Sekunden Erfolgsmeldung anzeigen
      setTimeout(function () {
          loadingAnimation.classList.add('hidden');
          successMsg.innerHTML = 'Wurde erfolgreich abgesendet.';
          successMsg.classList.remove('hidden');
          
          // Formular zurücksetzen und Erfolgsmeldung nach 6 Sekunden entfernen
          setTimeout(function () {
              successMsg.innerHTML = '';
              contactForm.reset();
          }, 2500);
      }, 1500);
  
      return true;
}

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);

function goBack() {
  window.history.back();
};