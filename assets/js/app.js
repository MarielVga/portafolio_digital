// Importamos la función desde nuestro módulo de utilidades (ES6)
import { inicializarTema } from './utils/themeConfig.js';

// Cuando el documento HTML esté completamente cargado, inicializamos nuestras funciones
document.addEventListener('DOMContentLoaded', () => {
    
    // Llamamos a la función que configura el modo oscuro
    inicializarTema();

    // Aquí irán futuras inicializaciones (ej. cargar casos de estudio, animaciones)
    console.log("Aplicación inicializada correctamente con módulos ES6.");
});