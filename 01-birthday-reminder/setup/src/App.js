import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people,setPeople] = useState(data)
  return (
  <main>
    <section className='container'>
      //get number of birthdays today using the length of the people array
      <h3>{people.length} birthdays today</h3>
      <List people={people}/>
      //clear the list by setting the array to empty using setPeople function
      <button onClick={()=> setPeople([])}>Clear All</button>
    </section>
  </main>
  );
}

export default App;
