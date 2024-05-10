import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import Progressbar from './components/ProgressBar/Progressbar';
import Stepper from './components/Stepper/Stepper';
import Perent from './components/PerentTOChild/Perent';
import Tictactoe from './components/Tic-tac-toe/Tictactoe';
import GridComponent from './components/Grid/GridComponent';

function App() {
  return (
    <Routes>
      <Route path='progressbar' element={<Progressbar />} />
      <Route path='stepper' element={<Stepper />} />
      <Route path='perenttochild' element={<Perent/>}/>
      <Route path='tictactoe' element={<Tictactoe/>}/>
      <Route path='gridcomponent' element={<GridComponent/>}/>
    </Routes>

  );
}

export default App;
