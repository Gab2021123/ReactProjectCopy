import './App.css';
import Hero from '../src/components/Hero/Hero'
import Program from '../src/components/Programs/Program'
import  Reason  from '../src/components/Reasons/Reason'
import PlanContainer from './components/PlanContainer/PlanContainer';
import Testimonials from './components/Testimonials/Testimonials';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="App">
          <Hero />
          <Program />
          <Reason />
          <PlanContainer />
          <Testimonials />
          <Join /> 
          <hr />
          <Footer />
    </div>
  );
}

export default App;
