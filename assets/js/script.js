function switchLanguage() {
    const currentPath = window.location.pathname;
    const newLang = currentPath.includes('/fr/') ? 'en' : 'fr';
    const newPath = currentPath.replace(/\/(en|fr)\//, `/${newLang}/`);
    window.location.href = newPath;
}
