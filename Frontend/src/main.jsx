import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white dark:bg-gray-900 flex items-center justify-center">
      <div className="animate-spin rounded-full h-20 w-20 border-b-8 border-gray-900 dark:border-gray-100"></div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </StrictMode>,
)

