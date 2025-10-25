import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Header } from './shared/header.tsx'
import { HashRouter } from 'react-router'
import { Footer } from './shared/footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <HashRouter >
      <App />
    </HashRouter>
    <Footer />
  </StrictMode>,
)
