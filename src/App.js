import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import Progressbar from './components/ProgressBar/Progressbar';
import Stepper from './components/Stepper/Stepper';
import Perent from './components/PerentTOChild/Perent';

function App() {
  return (
    <Routes>
      <Route path='progressbar' element={<Progressbar />} />
      <Route path='stepper' element={<Stepper />} />
      <Route path='perenttochild' element={<Perent/>}/>
    </Routes>

  );
}

export default App;
