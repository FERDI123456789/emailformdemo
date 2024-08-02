const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}


toggleSwitch.addEventListener('change', switchTheme, false);

const name = document.getElementById('name');
const email = document.getElementById('email');
const tele = document.getElementById('tele');
const street = document.getElementById('street');
const postalCode = document.getElementById('postal-code');
const interests = document.getElementById('interests');
const message = document.getElementById('message');
const license = document.getElementById('license');
const job = document.getElementById('job');
const contactForm = document.getElementById('contact-form');
const errorElement = document.getElementById('error-text');
const successMsg = document.getElementById('success-msg');
const loadingAnimation = document.getElementById('loading-animation');
const submitBtn = document.getElementById('submit');

const validate = (e) => {
    e.preventDefault();

    // Initialisierung der Fehler- und Erfolgsnachricht
    errorElement.innerHTML = '';
    successMsg.innerHTML = '';
    successMsg.classList.add('hidden');
    loadingAnimation.classList.add('hidden');

    if (name.value.length < 3) {
        errorElement.innerHTML = 'Dein Name sollte länger als 3 Zeichen sein.';
        return false;
    }

    if (!(email.value.includes('.') && email.value.includes('@'))) {
        errorElement.innerHTML = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
        return false;
    }

    if (!emailIsValid(email.value)) {
        errorElement.innerHTML = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
        return false;
    }

    if (!teleIsValid(tele.value)) {
        errorElement.innerHTML = 'Bitte geben Sie eine gültige Telefonnummer ein.';
        return false;
    }

    if (street.value.trim() === '') {
        errorElement.innerHTML = 'Bitte geben Sie Ihre Straße und Hausnummer ein.';
        return false;
    }

    if (postalCode.value.trim() === '') {
        errorElement.innerHTML = 'Bitte geben Sie Ihre Postleitzahl und Ort ein.';
        return false;
    }

    if (interests.value.trim() === '') {
        errorElement.innerHTML = 'Bitte geben Sie Ihre Interessen ein.';
        return false;
    }

    if (message.value.length < 15) {
        errorElement.innerHTML = 'Bitte schreiben Sie eine längere Nachricht.';
        return false;
    }

    if (license.value === '') {
        errorElement.innerHTML = 'Bitte wählen Sie eine Führerscheinklasse.';
        return false;
    }

    if (job.value === '') {
        errorElement.innerHTML = 'Bitte wählen Sie einen Beruf.';
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
        }, 6000);
    }, 3000);

    return true;
}

const emailIsValid = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const teleIsValid = tele => {
    // Regex für Telefonnummern, die optional mit + beginnen können und 10 bis 15 Ziffern enthalten
    return /^\+?[0-9\s\-]{10,15}$/.test(tele);
}

submitBtn.addEventListener('click', validate);

function goBack() {
    window.history.back();
}
