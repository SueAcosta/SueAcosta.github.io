document.addEventListener('DOMContentLoaded', () => {
    
    const text = "Desarrolladora web creativa y apasionada.";
    const typingText = document.getElementById('typing-text');
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];
    let colorIndex = 0;

    function changeColor() {
        document.documentElement.style.setProperty('--primary-color', colors[colorIndex]);
        colorIndex = (colorIndex + 1) % colors.length;
    }

    setInterval(changeColor, 5000);

    function descargarCV() {
        var link = document.createElement('a');
        link.href = './Recursos/CV - Sué Acosta.pdf';
        link.download = 'CV - Sué Acosta.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

});