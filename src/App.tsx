
import './App.css'
import { RouterProvider } from 'react-router-dom';
import router from './components/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from './app/store';

const queryClient = new QueryClient();


function App() {
  
   return (
    <main>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </Provider>
    </main>
  );
}

export default App
