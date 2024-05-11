import { Route, Routes } from 'react-router-dom';
import Productlist from './components/Breadcrumbs/Productlist';
import GridComponent from './components/Grid/GridComponent';
import Perent from './components/PerentTOChild/Perent';
import Progressbar from './components/ProgressBar/Progressbar';
import Stepper from './components/Stepper/Stepper';
import Tictactoe from './components/Tic-tac-toe/Tictactoe';
import './css/App.css';
import Productall from './components/Breadcrumbs/Productall';
import Product from './components/Breadcrumbs/Product';

function App() {
  return (
    <Routes>
      <Route path='progressbar' element={<Progressbar />} />
      <Route path='stepper' element={<Stepper />} />
      <Route path='perenttochild' element={<Perent />} />
      <Route path='tictactoe' element={<Tictactoe />} />
      <Route path='gridcomponent' element={<GridComponent />} />
      <Route path='productlist' element={<Productlist />} />
      <Route path='/productall' element={<Productall />} />
      <Route path='product/:id' element={<Product />} />
    </Routes>

  );
}

export default App;
