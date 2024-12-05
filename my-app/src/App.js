import React from 'react';


import JobCard from './components/JobCard';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Searchbar />
      <JobCard/>
      <Footer/>
    </div>
  );
}

export default App;
