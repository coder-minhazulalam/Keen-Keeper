import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Routes/Routes'
import ContextApi from './ContextApI/ContextApi'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ContextApi>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
autoClose={3000}

      />
  </ContextApi>
  </StrictMode>,
)
