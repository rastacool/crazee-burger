import { useState } from 'react';
import LoginPage from './components/pages/login/LoginPage';

function App() {

  // state (état, donnée)
  const [prenom, setPrenom] = useState("RASTA")
  const [count, setCount] = useState(8)
  // comportements

  const handleClick = () => {

    alert('Please fill in this field.')
  }
  //affichage

  return (
    <div>
        <LoginPage></LoginPage>
    </div>
  )
}
export default App;
 
