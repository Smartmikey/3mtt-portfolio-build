import './App.css'
import Hero from './components/Hero';
import Nav from './components/Nav';
function App() {
  return (
    <div className="bg-primary-gray">
      <Nav />
      <div className='max-w-3xl mx-auto h-screen'>
        <Hero />
      </div>
    </div>
  );
}

export default App;
