import { Routes, Route } from 'react-router-dom';

import InitialStateProvider from './InitialStateProvider';
import RequireAuth from './RequireAuth';

import Layout from './Layout';
import Welcome from './pages/Welcome';
import About from './pages/About';
import SignIn from './pages/SignIn';
import NoFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <InitialStateProvider>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Layout />
              </RequireAuth>
            }
          >
            <Route index element={<Welcome />} />
            <Route path="about" element={<About />} />
          </Route>

          <Route path="/sign-in" element={<SignIn />} />
          <Route path="*" element={<NoFound />} />
        </Routes>
      </InitialStateProvider>
    </div>
  );
}

export default App;
