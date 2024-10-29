document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const detailsButtons = document.querySelectorAll('.details-btn');

    // Función para verificar si un elemento está en el viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Función para hacer aparecer los elementos de la línea de tiempo
    function showTimelineItems() {
        timelineItems.forEach(item => {
            if (isElementInViewport(item)) {
                item.classList.add('appear');
            }
        });
    }

    // Ejecutar la función al cargar la página y al hacer scroll
    window.addEventListener('load', showTimelineItems);
    window.addEventListener('scroll', showTimelineItems);

    // Funcionalidad para mostrar/ocultar detalles
    detailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
                button.textContent = 'Más detalles';
            } else {
                content.style.display = 'block';
                button.textContent = 'Menos detalles';
            }
        });
    });

    // Efecto de parallax suave para la línea de tiempo
    window.addEventListener('scroll', () => {
        const timeline = document.querySelector('.timeline');
        const scrollPosition = window.pageYOffset;
        timeline.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });
});