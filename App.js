import './App.css';
import './components/sections.css'
import Blog from './components/Blogs/Blog';
import Contact from './components/Contact/Contact';
import Navbar from './components/Header/Navbar';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Works from './components/Works/Works';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <section className="sections">
        <Home/>
        <Blog id='blogs'/>
        <Works id='works'/>
        <Contact id='contact'/>
      </section>
    </div>
  );
}

export default App;
