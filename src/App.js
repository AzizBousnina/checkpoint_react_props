
import Profile from "./profile/Profile";
import image from "./profile/pic.jpg";

function App() {
  return (
    <div className="App">
      <Profile
        fullName="Aziz Bousnina"
        bio="Hello everybody my name is Aziz, im 22 years old I am a musician playing guitar for 8 years and im Fullstack Js Developper"
        profession="Web Developper, Musician"
      >{image}</Profile> 
    </div>
  );
}

export default App;

