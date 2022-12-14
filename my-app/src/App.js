import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/NavBar';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import ItemListContainer from './components/Main/ItemListContainer';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';


function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;