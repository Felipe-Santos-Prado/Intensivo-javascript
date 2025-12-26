// ...existing code...
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Entry point da aplicação:
// - Seleciona o elemento com id "root" no index.html
// - Renderiza o componente raiz <App /> dentro de <StrictMode>
// StrictMode ativa verificações e avisos em desenvolvimento.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,

  
)
// ...existing code..