export const inicializarTema = () => {
    
    // Seleccionamos el botón del DOM usando su ID
    const themeToggleBtn = document.getElementById('themeToggle');
    
    // Seleccionamos el elemento raíz (la etiqueta <html>)
    const htmlElement = document.documentElement;

    // Función interna para aplicar el tema
    const alternarTema = () => {
        // Toggle añade la clase 'dark' si no existe, o la quita si ya existe
        htmlElement.classList.toggle('dark');
        
        // Verificamos si la clase 'dark' está activa actualmente
        if (htmlElement.classList.contains('dark')) {
            // Si está activa, guardamos la preferencia en el LocalStorage
            localStorage.setItem('theme', 'dark');
        } else {
            // Si no está activa, guardamos la preferencia como 'light'
            localStorage.setItem('theme', 'light');
        }
    };

    // Escuchamos el evento 'click' en el botón para ejecutar la función
    themeToggleBtn.addEventListener('click', alternarTema);

    // Lógica que se ejecuta al cargar la página para recordar la elección del usuario
    window.addEventListener('DOMContentLoaded', () => {
        // Leemos si el usuario tenía 'dark' guardado o si su sistema operativo prefiere modo oscuro
        const temaGuardado = localStorage.getItem('theme');
        const prefiereOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;

        // Si la condición se cumple, forzamos la clase 'dark' en el HTML
        if (temaGuardado === 'dark' || (!temaGuardado && prefiereOscuro)) {
            htmlElement.classList.add('dark');
        } else {
            // De lo contrario, aseguramos que se remueva la clase 'dark'
            htmlElement.classList.remove('dark');
        }
    });
};