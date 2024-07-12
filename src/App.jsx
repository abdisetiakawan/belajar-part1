import './style/style.css'
import { GlobalContext } from './context';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';

function App() {
  const user = {
    name: "Uzumaki Naruto"
  };

  return (
    <div>
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
