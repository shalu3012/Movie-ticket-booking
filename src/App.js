import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import {Routes,Route} from 'react-router-dom'
import '../src/App.css'
import Booking from "./components/Booking";
import SingleMovie from "./components/SingleMovie";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/booktickets' element={<Booking/>}></Route>
            <Route path='/details' element={<SingleMovie/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
