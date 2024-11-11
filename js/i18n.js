const translations = {
    en: {
        factoryDescription: "Welcome to the production base of BL Lighting, the cradle of our innovation and quality. Our factory is equipped with the most advanced equipment and technology, committed to providing efficient and environmentally friendly lighting solutions for global customers. Each lamp is carefully crafted here to ensure the best lighting experience for your living and working spaces."
    },
    zh: {
        factoryDescription: "欢迎来到 BL Lighting 的生产基地，这里是我们创新与品质的摇篮。我们的工厂配备了最先进的设备和技术，致力于为全球客户提供高效、环保的照明解决方案。每一盏灯具都在这里精心打造，确保为您的生活和工作空间带来最佳的光影体验。"
    },
    fr: {
        factoryDescription: "Bienvenue à la base de production de BL Lighting, le berceau de notre innovation et de notre qualité. Notre usine est équipée des équipements et technologies les plus avancés, engagée à fournir des solutions d'éclairage efficaces et respectueuses de l'environnement pour les clients du monde entier. Chaque lampe est soigneusement fabriquée ici pour garantir la meilleure expérience d'éclairage pour vos espaces de vie et de travail."
    },
    de: {
        factoryDescription: "Willkommen in der Produktionsbasis von BL Lighting, der Wiege unserer Innovation und Qualität. Unsere Fabrik ist mit den modernsten Geräten und Technologien ausgestattet und verpflichtet sich, effiziente und umweltfreundliche Beleuchtungslösungen für Kunden weltweit bereitzustellen. Jede Lampe wird hier sorgfältig gefertigt, um das beste Lichterlebnis für Ihre Wohn- und Arbeitsräume zu gewährleisten."
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
