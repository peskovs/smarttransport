// translations.js is deprecated. All translation logic is now handled server-side by Django. This file is intentionally left blank.
const translations = {
    'en': {
        'Routes': 'Routes',
        'Stops': 'Stops',
        'Traffic': 'Traffic',
        'Statistics': 'Statistics',
        'Operator Dashboard': 'Operator Dashboard',
        'Admin Dashboard': 'Admin Dashboard',
        'Profile': 'Profile',
        'Login': 'Login',
        'Logout': 'Logout',
        'Register': 'Register',
        'City mobility platform for transport planning and traffic monitoring.': 'City mobility platform for transport planning and traffic monitoring.',
        'Contact': 'Contact',
        'Search': 'Search',
        'Schedule': 'Schedule',
        'Route Details': 'Route Details',
        'Stop Details': 'Stop Details',
        'No routes found.': 'No routes found.',
        'No stops found.': 'No stops found.',
        'Welcome to SmartTransport': 'Welcome to SmartTransport',
        'Plan Your Journey': 'Plan Your Journey',
        'From': 'From',
        'To': 'To',
        'Departure Time': 'Departure Time',
        'Find Routes': 'Find Routes',
        'Latest Traffic Updates': 'Latest Traffic Updates',
        'No traffic updates available.': 'No traffic updates available.',
        'Popular Routes': 'Popular Routes',
        'Nearby Stops': 'Nearby Stops'
    },
    'lv': {
        'Routes': 'Maršruti',
        'Stops': 'Pieturas',
        'Traffic': 'Satiksme',
        'Statistics': 'Statistika',
        'Operator Dashboard': 'Operatora Panelis',
        'Admin Dashboard': 'Administratora Panelis',
        'Profile': 'Profils',
        'Login': 'Ieiet',
        'Logout': 'Iziet',
        'Register': 'Reģistrēties',
        'City mobility platform for transport planning and traffic monitoring.': 'Pilsētas mobilitātes platforma transporta plānošanai un satiksmes uzraudzībai.',
        'Contact': 'Kontakti',
        'Search': 'Meklēt',
        'Schedule': 'Saraksts',
        'Route Details': 'Maršruta detaļas',
        'Stop Details': 'Pieturas detaļas',
        'No routes found.': 'Maršruti nav atrasti.',
        'No stops found.': 'Pieturas nav atrastas.',
        'Welcome to SmartTransport': 'Laipni lūdzam SmartTransport',
        'Plan Your Journey': 'Plāno savu ceļojumu',
        'From': 'No',
        'To': 'Uz',
        'Departure Time': 'Izbraukšanas laiks',
        'Find Routes': 'Meklēt maršrutus',
        'Latest Traffic Updates': 'Jaunākie satiksmes atjauninājumi',
        'No traffic updates available.': 'Nav pieejami satiksmes atjauninājumi.',
        'Popular Routes': 'Populārie maršruti',
        'Nearby Stops': 'Tuvumā esošās pieturas'
    }
};

// Get the current language from localStorage or default to 'lv'
let currentLanguage = localStorage.getItem('language') || 'lv';
document.documentElement.lang = currentLanguage;

// Function to translate the page
function translatePage() {
    // Set language in localStorage
    localStorage.setItem('language', currentLanguage);
    
    // Set the html lang attribute
    document.documentElement.lang = currentLanguage;
    
    // Find all elements with the data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    
    // Translate each element
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Update button styles
    const lvBtn = document.getElementById('lang-lv');
    const engBtn = document.getElementById('lang-eng');
    
    if (lvBtn && engBtn) {
        if (currentLanguage === 'lv') {
            lvBtn.classList.add('bg-white', 'text-blue-600');
            lvBtn.classList.remove('text-white');
            engBtn.classList.remove('bg-white', 'text-blue-600');
            engBtn.classList.add('text-white');
        } else {
            engBtn.classList.add('bg-white', 'text-blue-600');
            engBtn.classList.remove('text-white');
            lvBtn.classList.remove('bg-white', 'text-blue-600');
            lvBtn.classList.add('text-white');
        }
    }
}

// (JS language toggle disabled in favor of server-side language switching)
// document.addEventListener('DOMContentLoaded', function() {
//     // Translate the page initially
//     translatePage();
//     
//     // Add click event listeners to language buttons
//     const lvBtn = document.getElementById('lang-lv');
//     const engBtn = document.getElementById('lang-eng');
//     
//     if (lvBtn) {
//         lvBtn.addEventListener('click', function(e) {
//             e.preventDefault();
//             currentLanguage = 'lv';
//             translatePage();
//         });
//     }
//     
//     if (engBtn) {
//         engBtn.addEventListener('click', function(e) {
//             e.preventDefault();
//             currentLanguage = 'en';
//             translatePage();
//         });
//     }
// });
