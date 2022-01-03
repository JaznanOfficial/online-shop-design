import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import SocialLink from './Components/SocialLink/SocialLink';
import Sliders from './Components/Sliders/Sliders';
import Responsive from './Components/Sliders/Sliders';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <SocialLink></SocialLink>
      <Sliders></Sliders>
    </div>
  );
}

export default App;
