import React from 'react';
import '../../App.css';
import About from './About';
import Mission from './Mission';
import Header from './Header';

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Mission />
    </div>
  );
}
