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
        <LoginPage></LoginPage>
      <h1>Bienvenue chez nous  {prenom}!</h1>
      <br/>
      <h2>Connectez-vous</h2>


      <form>
        <label>
          <input type="text" name="name" placeholder="Entrer votre prénom..." required />
        </label>
        <input onClick={handleClick} type="submit" value="Accédez à votre espace" />
      </form>
    </div>
  )
}
export default App;

