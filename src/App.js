import { Route, Routes } from 'react-router-dom';
import OrderPage from './components/pages/order/OrderPage';
import LoginPage from './components/pages/login/LoginPage';
import ErrorPage from './components/pages/error/ErrorPage';

function App() {

  //affichage

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="*" element={<ErrorPage />}/>

    </Routes> 
  )
}
export default App;
 
