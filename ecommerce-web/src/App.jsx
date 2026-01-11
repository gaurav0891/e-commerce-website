import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';

function App() {
    return(
        <BrowserRouter>
            <Header />
            
            <Routes>
                <Route path="/" element={<h2>Home</h2>}/>
                <Route path="/products" element={<h2>Products</h2>}/>
                <Route path="/cart" element={<h2>Cart</h2>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App;