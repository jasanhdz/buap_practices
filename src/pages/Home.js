import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeContent from '../components/expert/HomeContent';
import '../components/styles/home.css';

export default function Home() {
  return (
    <div className='Container'>
      <Header />
      <HomeContent />
      <Footer />
    </div>
  );
}
