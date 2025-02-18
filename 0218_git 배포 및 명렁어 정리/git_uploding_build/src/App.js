import './App.scss';
import Home from './pages/Home';


const menus = [
  {
    path: "/",
    name : "Home"
  },
  {
    path: "/about",
    name : "about"
  },
  {
    path: "/products",
    name : "products"
  },
  {
    path: "/sitemap",
    name : "sitemap"
  },
]


function App() {
  return (
    <>
    <Home menus={menus}/>
    </>
  );
}

export default App;
