import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Add from './Components/Add/Add';
import Watched from './Components/Watched/Watched';
import WatchList from './Components/WatchList/WatchList';
import ContextProvider from './Components/ContextAPI/GlobalContext';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>

      <ContextProvider>
      <Header/>

      <Routes>
        <Route path="/watchList" element={<WatchList/>}/>
        <Route path="/watched" element={<Watched/>}/>
        <Route path="/add" element={<Add/>}/>
      </Routes>

      <Footer/>
      </ContextProvider>
      
    </BrowserRouter>
  );
}

export default App;
