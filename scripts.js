// Esperar a que el documento cargue
document.addEventListener('DOMContentLoaded', function() {
    
    // Funcionalidad de Smooth Scroll (Desplazamiento suave)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Manejo del envío del formulario (Simulación)
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aquí iría la lógica real para enviar al servidor
            alert('Gracias. Hemos recibido tu solicitud de cita y la Dra. Mariana se pondrá en contacto pronto.');
            bookingForm.reset(); // Limpia el formulario
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    
    const productLinks = document.querySelectorAll('.product-link, .view-all');

    productLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Llevamos al usuario al formulario para que pregunte por el producto
            const contactSection = document.getElementById('contacto');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
                
                // Opcional: Podríamos rellenar el campo del formulario con el nombre del producto
                const productName = this.parentElement.querySelector('h4')?.innerText;
                if(productName) {
                    console.log("Interesado en: " + productName);
                }
            }
        });
    });
});