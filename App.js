import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import One from './one.js'
// import Regester from './regester.js';
import Three from './three.js';
import Four from './four'
import Five from './five';
import Seven from './seven';
import Six from './six';
function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<One/>}/>
    <Route path="/three" element={<Three/>}/>
    <Route path="/four" element={<Four/>}/>
    <Route path="/five" element={<Five/>}/>
    <Route path="/six" element={<Six/>}/>
    <Route path="/seven" element={<Seven/>}/>


  </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

