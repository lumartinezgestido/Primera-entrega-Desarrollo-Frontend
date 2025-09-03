const ENDPOINT = 'https://formspree.io/f/xyzdnenz'

const form = document.getElementById('contactForm');
const statusEl = document.getElementById('form-status');
const submitBtn = document.getElementById('submitButton');

async function sendForm(fd){
    return fetch(ENDPOINT, {
        method: 'POST',
        headers: {'Accept': 'application/json'},
        body: fd
    });
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusEl.className = '';
    statusEl.textContent = '';

    
    submitBtn.disabled = true;
    statusEl.textContent = 'Enviando...';
    
    try{
    const fd = new FormData(form);
    const res = await sendForm(fd);
    if (!res.ok) throw new Error('HTTP' + res.status);

    form.reset();
    statusEl.textContent = "¡Gracias! Tu mensaje se envió correctamente.";
    statusEl.className="status-ok";
    } catch(err) {
        statusEl.textContent = "Hubo un error al enviar el mensaje!";
        statusEl.className="status-error";
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Enviar";
    }
});