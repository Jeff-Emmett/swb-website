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
    // Toggle between English and Arabic
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('language', currentLang);
    
    // Update the language toggle text
    document.getElementById('langText').textContent = 
        currentLang === 'en' ? 'EN / عربي' : 'عربي / EN';
    
    // Update document direction
    document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', currentLang === 'ar');
    
    // Update all translatable content
    updateContent();
}

function updateContent() {
    // Combine all translations for the current language
    const translations = {
        ...homeTranslations[currentLang],
        ...aboutTranslations[currentLang],
        ...workTranslations[currentLang],
        ...supportTranslations[currentLang],
        ...contactTranslations[currentLang]
    };
    
    // Update the content based on your translation structure
    for (const [key, value] of Object.entries(translations)) {
        const elements = document.querySelectorAll(`[data-translate="${key}"]`);
        elements.forEach(element => {
            // Handle elements that might contain HTML (like <br>)
            if (value.includes('<br>')) {
                element.innerHTML = value;
            } else {
                element.textContent = value;
            }
        });
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial direction and language
    document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', currentLang === 'ar');
    
    // Set initial language toggle text
    document.getElementById('langText').textContent = 
        currentLang === 'en' ? 'EN / عربي' : 'عربي / EN';
    
    // Update initial content
    updateContent();
});

// Add click handler to language toggle
document.querySelector('.language-toggle').addEventListener('click', toggleLanguage); 