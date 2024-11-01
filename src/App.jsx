import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Header } from './assets/components/header/Header';
import { Slider } from './assets/components/slider/slider';
import { Catalog } from './assets/components/Catalog/Catalog';
import { Route, Routes } from 'react-router';
import { Tovar } from './assets/components/tovar/tovar';

function App() {

  return (
    <>
      <Header/>
      <Slider/>
      <Catalog/>
      <Routes>
        <Route path='/tovar/:id' element={<Tovar/>}/>
      </Routes>
    </>
  )
}

export default App
