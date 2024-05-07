import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import Progressbar from './components/ProgressBar/Progressbar';
import Stepper from './components/Stepper/Stepper';

function App() {
  return (
    <Routes>
      <Route path='progressbar' element={<Progressbar />} />
      <Route path='stepper' element={<Stepper />} />
    </Routes>

  );
}

export default App;
