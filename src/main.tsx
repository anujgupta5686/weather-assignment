import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <div className='bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen'>
        <App />
      </div>
    </BrowserRouter>
  </QueryClientProvider>

)
