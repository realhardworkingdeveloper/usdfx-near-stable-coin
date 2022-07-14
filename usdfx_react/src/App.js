import './App.scss';
import { Routes , Route } from 'react-router-dom';
import routes from './Routes';
import { Layout } from './containers';

function App() {
  return (
    <Layout>
      <Routes>
        {
          routes.map((route, index) => 
            <Route
              key={index}
              exact={true}
              path={route.path}
              element={route.component}
            />
          )
        }
      </Routes>
    </Layout>
  );
}

export default App;
