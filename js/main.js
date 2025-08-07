document.addEventListener('DOMContentLoaded', () => {
  const fecha = new Date().toLocaleDateString('es-CO', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  const lugarFecha = document.getElementById('fecha-actual');
  if (lugarFecha) {
    lugarFecha.textContent = fecha;
  }
});

