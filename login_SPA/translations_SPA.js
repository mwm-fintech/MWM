/**
 * MWM Login/Registration Translations
 * This file is local to the login/registration process.
 */

const translations = {
    en: {
        page_title_login: "MWM - Login",
	nav_mwm:"MWM",
        nav_register: "Register",
        login_welcome: "Welcome Back",
        login_instruction: "Please enter your credentials to access your account.",
        label_email: "Email Address",
        placeholder_email: "email@example.com",
        label_password: "Password",
        placeholder_password: "Enter password",
        btn_login: "Login",
        no_account: "Don't have an account?",
        link_register: "Register here",
        status_logging_in: "Authenticating...",
        status_success: "Login successful! Redirecting...",
        err_invalid_creds: "Invalid email or password.",
        err_server: "Server unreachable. Please try again later."
    },
    es: {
        page_title_login: "MWM - Iniciar Sesión",
	nav_mwm:"MWM",
        nav_register: "Registrarse",
        login_welcome: "Bienvenido de nuevo",
        login_instruction: "Por favor, introduce tus credenciales para acceder.",
        label_email: "Correo Electrónico",
        placeholder_email: "correo@ejemplo.es",
        label_password: "Contraseña",
        placeholder_password: "Introducir contraseña",
        btn_login: "Iniciar Sesión",
        no_account: "¿No tienes una cuenta?",
        link_register: "Regístrate aquí",
        status_logging_in: "Autenticando...",
        status_success: "¡Inicio de sesión correcto! Redirigiendo...",
        err_invalid_creds: "Correo o contraseña incorrectos.",
        err_server: "Servidor no disponible. Inténtelo más tarde."
    },
    fr: {
        page_title_login: "MWM - Connexion",
	nav_mwm:"MWM",
        nav_register: "S'inscrire",
        login_welcome: "Bon retour",
        login_instruction: "Veuillez entrer vos identifiants pour accéder à votre compte.",
        label_email: "Adresse Email",
        placeholder_email: "email@exemple.fr",
        label_password: "Mot de passe",
        placeholder_password: "Entrez le mot de passe",
        btn_login: "Se connecter",
        no_account: "Vous n'avez pas de compte ?",
        link_register: "Inscrivez-vous ici",
        status_logging_in: "Authentification...",
        status_success: "Connexion réussie ! Redirection...",
        err_invalid_creds: "Email ou mot de passe invalide.",
        err_server: "Serveur injoignable. Veuillez réessayer plus tard."
    },
    de: {
        page_title_login: "MWM - Anmelden",
	nav_mwm:"MWM",
        nav_register: "Registrieren",
        login_welcome: "Willkommen zurück",
        login_instruction: "Bitte geben Sie Ihre Zugangsdaten ein.",
        label_email: "E-Mail-Adresse",
        placeholder_email: "email@beispiel.de",
        label_password: "Passwort",
        placeholder_password: "Passwort eingeben",
        btn_login: "Anmelden",
        no_account: "Noch kein Konto?",
        link_register: "Hier registrieren",
        status_logging_in: "Authentifizierung...",
        status_success: "Anmeldung erfolgreich! Weiterleitung...",
        err_invalid_creds: "Ungültige E-Mail oder Passwort.",
        err_server: "Server nicht erreichbar. Bitte später versuchen."
    }
};

/**
 * Global translation helper 't'
 * This is called by login_SPA.js (e.g., t('status_success'))
 */
window.t = function(key) {
    const lang = localStorage.getItem('selectedLanguage') || 'en';
    // Fallback logic: Selected Lang -> English -> Key itself
    return (translations[lang] && translations[lang][key]) 
            || (translations['en'][key]) 
            || key;
};

/**
 * Applies translations to all elements with data-i18n attributes
 */
window.applyLoginTranslations = function() {
    const lang = localStorage.getItem('selectedLanguage') || 'en';
    const dict = translations[lang] || translations['en'];

    // Update Text
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.innerText = dict[key];
    });

    // Update Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) el.placeholder = dict[key];
    });
};

// Execute on load
document.addEventListener('DOMContentLoaded', () => {
    window.applyLoginTranslations();
});