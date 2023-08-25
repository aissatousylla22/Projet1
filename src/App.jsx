import React, { useState } from 'react';
import './App.css';


function App() {
    
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (item.trim() !== '') {
      setItems([...items, item]);
      setItem('');
    }
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="App ">
      <h1>Liste de Courses</h1>
      <div className="input-group">
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Entrez un élément à acheter"
        />
        <button onClick={addItem}>Ajouter</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Supprimer</button>
          </li>
        ))}
        <setItem>
          {item},{items}
        </setItem>
      </ul>
    </div>
  );
 
}

export default App;
