import logo from './logo.svg';
import './App.css';
import BrandHeader from './components/BrandHeader/BrandHeader';
import Cards from './components/Cards/Cards';
import CardHolder from './components/Cards/CardHolder';
import Login from './components/Login/Login';

function App() {
  return (
    <section>
      <BrandHeader></BrandHeader>
        <section className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 m-6">
          <Login></Login>
        </section>
    </section>
    
  );
}

export default App;
