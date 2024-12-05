import React from 'react';


import JobCard from './components/JobCard';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Searchbar />
      <JobCard/>
    </div>
  );
}

export default App;
