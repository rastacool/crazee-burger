import { useState } from 'react';
import LoginPage from './components/pages/LoginPage';

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
      <h1>Bienvenue chez nous  {prenom}!</h1>
      <h2>Connectez-vous</h2>
  <LoginPage></LoginPage>

      <form>
        <label>
          <input type="text" name="name" placeholder="Entrer votre prénom..." />
        </label>
        <input onClick={handleClick} type="submit" value="Accédez à votre espace" />
      </form>
    </div>
  )
}
export default App;

