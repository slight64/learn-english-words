import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import Dictionary from './pages/dictionary/Dictionary';
import Menu from './entities/ui/Menu/Menu';
import { Provider } from 'react-redux';
import { store, persistor } from './features/redux';
import Quiz from './pages/Quiz/Quiz';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from './entities/ui/Loader/Loader';

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Menu />
        <div className="content-container">
          <Outlet />
        </div>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/dictionary',
          element: <Dictionary />,
        },
        {
          path: '/quiz',
          element: <Quiz />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
