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
        // Add RTL class to main content areas only
        document.querySelectorAll('main, section, footer').forEach(element => {
            element.style.direction = 'rtl';
        });
        // Keep header LTR
        document.querySelector('header').style.direction = 'ltr';
    } else {
        document.documentElement.dir = 'ltr';
        // Remove RTL from all elements
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
        
        // Get translations from all translation files
        const translations = {
            ...homeTranslations,
            ...aboutTranslations,
            ...workTranslations,
            ...supportTranslations,
            ...contactTranslations
        };
        
        // Update text content if translation exists
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

// Don't automatically translate on page load
// document.addEventListener('DOMContentLoaded', translatePage);

// Add click handler to language toggle
document.querySelector('.language-toggle').addEventListener('click', toggleLanguage); 