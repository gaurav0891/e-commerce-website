import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
        <h1 className="logo">MyStore</h1>
        <nav className="nav">
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </nav>
    </header>
  );
}
export default Header;