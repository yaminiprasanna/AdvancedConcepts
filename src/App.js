import logo from './logo.svg';
import './App.css';
import ComponentC from './components/ComponentC'
import {UserProvider} from './components/Context/UserContext'
//import ErrorBoundary from './components/ErrorBoundary';
//import BugCounter from './components/BugCounter'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Fragments/Table'
import RefDemo from './components/Refs/RefDemo'
import FocusInput from './components/Refs/CalbackRef/FocusInput'
import FRParentInput from './components/Refs/FRParentInput'
import HeroError from './components/ErrorBoundary/ErrorBoundary'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ClickCounter from './components/HOC/ClickCounter';
import HoverCounter from './components/HOC/HoverCounter';
import PortalDemo from './components/PortalDemo';
function App() {
  return (
    <div className="App">
    <UserProvider value="context concept">
     <ComponentC/>
     </UserProvider>
      
      <FragmentDemo/>
      <Table/>
      <RefDemo/>
      <div>
      <FocusInput/>
      </div>
      <FRParentInput/>
      <ErrorBoundary>
      <HeroError heroName="superman"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <HeroError heroName="spiderman"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <HeroError heroName="joker"/>
      </ErrorBoundary>
      
     <ClickCounter name="yamini"/>
     <HoverCounter/>
     <PortalDemo/>
    </div>
  );
}



    

export default App;
