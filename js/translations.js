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
        organizationName: "Schools Without Borders",
        footerAbout: "A non-profit organization supporting education and providing services to students affected by wars and conflicts.",
        quickLinks: "Quick Links",
        contactUs: "Contact Us",
        copyright: "© 2025 Schools Without Borders. All Rights Reserved.",
        
        // Import page-specific translations
        ...homeTranslations?.en,
        ...aboutTranslations?.en,
        ...workTranslations?.en,
        ...supportTranslations?.en,
        ...contactTranslations?.en
    },
    ar: {
        // Navigation
        home: "الرئيسية",
        aboutUs: "من نحن",
        ourWork: "عملنا",
        supportUs: "ادعمنا",
        contact: "اتصل بنا",
        
        // Shared elements
        organizationName: "مدارس بلا حدود",
        footerAbout: "منظمة غير ربحية تدعم التعليم وتقدم الخدمات للطلاب المتأثرين بالحروب والنزاعات.",
        quickLinks: "روابط سريعة",
        contactUs: "اتصل بنا",
        copyright: "© 2025 مدارس بلا حدود. جميع الحقوق محفوظة.",
        
        // Import page-specific translations
        ...homeTranslations?.ar,
        ...aboutTranslations?.ar,
        ...workTranslations?.ar,
        ...supportTranslations?.ar,
        ...contactTranslations?.ar
    }
};

let currentLanguage = 'en';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    
    const langText = document.getElementById('langText');
    if (langText) {
        langText.textContent = currentLanguage === 'en' ? 'EN / عربي' : 'عربي / EN';
    }

    // Update text direction for Arabic, excluding header
    if (currentLanguage === 'ar') {
        document.documentElement.dir = 'rtl';
        document.querySelectorAll('main, section, footer').forEach(element => {
            element.style.direction = 'rtl';
        });
        document.querySelector('header').style.direction = 'ltr';
    } else {
        document.documentElement.dir = 'ltr';
        document.querySelectorAll('main, section, footer').forEach(element => {
            element.style.direction = 'ltr';
        });
    }
    
    translatePage();
}

function translatePage() {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

// Remove onclick attribute from HTML and use event listener
document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.querySelector('.language-toggle');
    if (langToggle) {
        // Remove existing onclick attribute
        langToggle.removeAttribute('onclick');
        // Add click event listener
        langToggle.addEventListener('click', toggleLanguage);
    }
}); 