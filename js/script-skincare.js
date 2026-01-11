document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn-whatsapp');
    
    // Cambiar el mensaje de WhatsApp según la hora del día
    const fecha = new Date();
    const hora = fecha.getHours();
    let saludo = "Hola%20Dra.%20Mariana";
    
    if (hora >= 6 && hora < 12) saludo = "Buenos%20días%20Dra.%20Mariana";
    else if (hora >= 12 && hora < 20) saludo = "Buenas%20tardes%20Dra.%20Mariana";
    else saludo = "Hola%20Dra.%20Mariana";

    const linkBase = `https://wa.me/1234567890?text=${saludo},%20vengo%20de%20la%20web%20y%20me%20gustaría%20comprar%20la%20línea%20skincare.`;
    
    btn.setAttribute('href', linkBase);

    // Animación de entrada para los elementos "diff-item"
    const items = document.querySelectorAll('.diff-item');
    window.addEventListener('scroll', () => {
        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }
        });
    });
});