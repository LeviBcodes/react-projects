import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setMenuItems] = useState([]);
  return <main>
    <section className="menu section">
      <div>
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories />
      <Menu />
    </section>
  </main>;
}

export default App;
