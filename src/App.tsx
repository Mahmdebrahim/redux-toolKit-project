
import './App.css'
import { RouterProvider } from 'react-router-dom';
import router from './components/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();


function App() {
  
   return (
    <main>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </main>
  );
}

export default App
