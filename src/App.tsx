import { Provider } from 'react-redux';
import Router, { PropsRoute } from './component/Router/Router';
import HomeScreen from './screen/HomeScreen';
import LoginScreen from './screen/LoginScreen';
import store from './service/store';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const publicRoutes: PropsRoute[] = [
  { path: "/login", component: <LoginScreen /> },
  { path: "/", component: <HomeScreen />}
];

const privateRoutes: PropsRoute[] = [
  { path: "/dashboard/", component: <div><h1>This Is Privated Pages</h1></div>}
]

function App() {
  return (
    <Provider store={store}>
      <Router publicRoutes={publicRoutes} privateRoutes={privateRoutes} />
    </Provider>
  );
}

export default App;
