import React from 'react';
import './admindashboard.css';
import Sidebardash from '../Sidebardash/Sidebardash.js';
import Footerdash from '../Footerdash/Footerdash.js';

export default function Admindashboard({ children }) {
  return (
   <>
   <Sidebardash/>
   { children }
   <Footerdash/>

   </>
  );
}


