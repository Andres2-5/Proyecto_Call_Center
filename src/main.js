import './index-component'; // Importa tu componente Index
import './index-2-component'; // Importa tu componente Index2
import './login-component'; // Importa tu componente Login

const appContainer = document.getElementById('app');

export function renderPage(pageName) {
  switch (pageName) {
    case 'index':
      appContainer.innerHTML = '<index-component></index-component>';
      break;
    case 'index2':
      appContainer.innerHTML = '<index-2-component></index-2-component>';
      break;
    case 'login':
      appContainer.innerHTML = '<login-component></login-component>';
      break;
    default:
      // Página no encontrada o página de inicio por defecto
      appContainer.innerHTML = '<login-component></login-component>';
  }
}

// Llama a renderPage con la página de inicio por defecto al cargar la aplicación
renderPage('login');
