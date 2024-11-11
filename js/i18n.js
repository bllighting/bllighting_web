const translations = {
    en: {
        pageTitle: "BL Lighting - Lighting the Future",
        companyNameZh: "Huizhou Tailai Intelligent Lighting Co., Ltd.",
        companyNameEn: "BL LIGHTING INTERNATIONAL CO., LIMITED",
        navHome: "Home",
        navProducts: "Products",
        navAbout: "About Us",
        navContact: "Contact Us",
        heroTitle: "Lighting the Future, Illuminating Life",
        heroSubtitle: "BL Lighting creates high-quality lighting suitable for various commercial and home environments with excellent design and craftsmanship.",
        ctaButton: "Explore Our Products",
        testimonials: "Customer Testimonials",
        testimonialContent: "“BL Lighting's lamps are not only beautiful but also highly functional, perfectly enhancing our space atmosphere.”",
        testimonialAuthor: "— We have a designer from Germany and a designer from our Chinese company: David Chen",
        privacyPolicy: "Privacy Policy",
        sitemap: "Sitemap",
        contactUs: "Contact Us",
        companyNameLabel: "Company Chinese Name:",
        companyNameEnLabel: "Company English Name:",
        addressLabel: "Address:",
        address: "No. 19 Xiangda Road, Xiaojinkou, Huicheng District, Huizhou, Guangdong, China",
        phoneLabel: "Phone:",
        phone: "+86 13809836936",
        emailLabel: "Email:",
        email: "bllightingdavid@gmail.com",
        wechatLabel: "WeChat:",
        wechat: "+86 13809836936",
        factoryDescription: "Welcome to the production base of BL Lighting, the cradle of our innovation and quality. Our factory is equipped with the most advanced equipment and technology, committed to providing efficient and environmentally friendly lighting solutions for global customers. Each lamp is carefully crafted here to ensure the best lighting experience for your living and working spaces."
    },
    zh: {
        // 中文翻译已在HTML中
    },
    fr: {
        // 法语翻译
    },
    de: {
        // 德语翻译
    }
};

function setLanguage(language) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    setLanguage(savedLanguage);
    document.getElementById('language-select').value = savedLanguage;

    document.getElementById('language-select').addEventListener('change', function() {
        const selectedLanguage = this.value;
        localStorage.setItem('selectedLanguage', selectedLanguage);
        setLanguage(selectedLanguage);
    });
});
