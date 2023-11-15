import {Routes,Route} from 'react-router-dom';
import Navigation from './components/Navigationm';
import HOME from './components/HOME';
import MEN from './components/MEN';
import WOMEN from './components/WOMEN';
import Kids2 from './components/Kids2';
import Nope from './components/Nope';
import Footer from './components/Footer';
// import './App.css';
function App() {
  return (
    <div className="App">
      <Navigation/><br></br>
      <Routes>
        <Route path='/' element={<HOME/>}/>
        <Route path='/MEN' element={<MEN />}/>
        <Route path='/WOMEN' element={<WOMEN />}/>
        <Route path='/Kids' element={<Kids2/>}/>
        {/* <Route path='/old' element={<Old/>}/> */}
        <Route path='*' element={<Nope />}/>
        
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
