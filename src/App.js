// import logo from './logo.svg';
import './App.css';
import TopBar from './components/partials/TopBar'
import Footer from './components/partials/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import ContactForm from './components/pages/ContactForm'
import Blogs from './components/pages/Blogs'

function App() {
  return (
    <main>
      <div className="app">
        <TopBar/>
        <div className='content'>
          <Home/>
          <About/>
          <Projects/>
          <Blogs/>
          <ContactForm/>
        </div>
        <Footer/>
      </div>
    </main>
  );
}

export default App;
