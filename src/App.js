import { Route, Routes } from 'react-router-dom';
import Navebar from './Pages/Navebar';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import Product from './components/Breadcrumbs/Product';
import Productall from './components/Breadcrumbs/Productall';
import Productlist from './components/Breadcrumbs/Productlist';
import GridComponent from './components/Grid/GridComponent';
import Perent from './components/PerentTOChild/Perent';
import Progressbar from './components/ProgressBar/Progressbar';
import Stepper from './components/Stepper/Stepper';
import { ThemeProvider } from './components/ThemeChange/Theme';
import Tictactoe from './components/Tic-tac-toe/Tictactoe';
import './css/App.css';

function App() {
  return (
    <>
      <ThemeProvider>
        <Navebar />
        <Breadcrumbs />
        <Routes>
          <Route path='progressbar' element={<Progressbar />} />
          <Route path='stepper' element={<Stepper />} />
          <Route path='perenttochild' element={<Perent />} />
          <Route path='tictactoe' element={<Tictactoe />} />
          <Route path='gridcomponent' element={<GridComponent />} />
          <Route path='productlist' element={<Productlist />} />
          <Route path='productall' element={<Productall />} />
          <Route path='product/:id' element={<Product />} />
        </Routes>
      </ThemeProvider>
    </ >
  );
}

export default App;
