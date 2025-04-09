// Store translations
const translations = {
    en: {
        // Navigation
        home: "Home",
        aboutUs: "About Us",
        ourWork: "Our Work",
        supportUs: "Support Us",
        contact: "Contact",
        
        // Shared elements
        footerAbout: "A non-profit organization supporting education and providing services to students affected by wars and conflicts.",
        quickLinks: "Quick Links",
        contactUs: "Contact Us",
        copyright: "© 2025 Schools Without Borders. All Rights Reserved.",
        
        // Import page-specific translations from your arabic_translations.txt
        ...homeTranslations.en,
        ...aboutTranslations.en
    },
    ar: {
        // Navigation
        home: "الرئيسية",
        aboutUs: "من نحن",
        ourWork: "عملنا",
        supportUs: "ادعمنا",
        contact: "اتصل بنا",
        
        // Shared elements
        footerAbout: "منظمة غير ربحية تدعم التعليم وتقدم الخدمات للطلاب المتأثرين بالحروب والنزاعات.",
        quickLinks: "روابط سريعة",
        contactUs: "اتصل بنا",
        copyright: "© 2025 مدارس بلا حدود. جميع الحقوق محفوظة.",
        
        // Import page-specific translations from your arabic_translations.txt
        ...homeTranslations.ar,
        ...aboutTranslations.ar
    }
};

let currentLang = localStorage.getItem('language') || 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('language', currentLang);
    
    // Update language indicator
    document.querySelector('.language-toggle span').textContent = 
        currentLang === 'en' ? 'EN / عربي' : 'عربي / EN';
    
    // Update document direction
    document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', currentLang === 'ar');
    
    // Update navigation
    updateNavigation();
    
    // Update footer
    updateFooter();
    
    // Update page-specific content
    const pageName = window.location.pathname.split('/').pop().split('.')[0];
    if (typeof window[`update${capitalize(pageName)}Page`] === 'function') {
        window[`update${capitalize(pageName)}Page`]();
    }
}

function updateNavigation() {
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.href.includes('index.html')) link.textContent = translations[currentLang].home;
        if (link.href.includes('about.html')) link.textContent = translations[currentLang].aboutUs;
        if (link.href.includes('work.html')) link.textContent = translations[currentLang].ourWork;
        if (link.href.includes('support.html')) link.textContent = translations[currentLang].supportUs;
        if (link.href.includes('contact.html')) link.textContent = translations[currentLang].contact;
    });
}

function updateFooter() {
    document.querySelector('.footer-section p').textContent = translations[currentLang].footerAbout;
    document.querySelectorAll('.footer-section h3')[1].textContent = translations[currentLang].quickLinks;
    document.querySelectorAll('.footer-section h3')[2].textContent = translations[currentLang].contactUs;
    document.querySelector('.copyright').textContent = translations[currentLang].copyright;
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', currentLang === 'ar');
    document.querySelector('.language-toggle span').textContent = 
        currentLang === 'en' ? 'EN / عربي' : 'عربي / EN';
    
    // Update all content
    toggleLanguage();
});

// Add click handler to language toggle
document.querySelector('.language-toggle').addEventListener('click', toggleLanguage); 