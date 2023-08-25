import './App.scss';
import Main from './components/Main';
import Footer from './components/Footer'

function App() {
  return (
    
      <div className="mainContentBlock">
        <Main/>
        <div className='bottom-element'>
          <Footer/>
        </div>
      </div>
    
  );
}

export default App;
