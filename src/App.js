import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DepartmentOverview from './components/pages/DepartmentOverview/DepartmentOverview';
import FacultyOverview from './components/pages/FacultyOverview/FacultyOverview';
import Curriculum from './components/pages/CurricullumAndOverview/Curriculum';
import Research from './components/pages/Research/Research';
import Events from './components/pages/Events/Events';
import ContactInformation from './components/pages/ContactInformation/ContactInformation';
import NewsAndAnnouncement from './components/pages/NewsAndAnnouncement/NewsAndAnnouncement';
import StudentResources from './components/pages/StudentResources/StudentResources';
import Footer from './components/pages/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/FacultyOverview" component={FacultyOverview} />
        <Route path="/Curriculum" component={Curriculum} />
        <Route path="/Research" component={Research} />
        <Route path="/StudentResources" component={StudentResources} />
        <Route path="/ContactInformation" component={ContactInformation} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
