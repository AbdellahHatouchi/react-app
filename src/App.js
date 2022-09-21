
import './App.css';
import OffcanvasExample from './components/DrawerAppBar';
import Carousel from './components/Carousel';
import Cardes from './components/Cardes';
import Nav from './components/Nav';
function App() {
  return (
    <>
      <OffcanvasExample />
      <Carousel />
      <div className='store'>
        <Nav />
        <Cardes />
      </div>
    </>
  );
}
export default App;
