
import './App.css';
import allContacts from "./contacts.json";
import { useState } from 'react';
console.log(allContacts)



const firstFive = allContacts.slice(0 , 5)



function App() {
  const [celeb, setCeleb] = useState(firstFive)
 

  const randomCeleb = () => {
    let random = Math.floor(Math.random() * allContacts.length);
    setCeleb([...celeb, allContacts[random]]);
    }

    const sortPopularity = () => {
      let sorting = celeb.sort((a,b) => a.popularity > b.popularity ? 1 : -1);
      setCeleb([...celeb, sorting]);
      }

    const sortCeleb = () => {
      let sort = celeb.sort((a,b) => (a.name > b.name ? 1 : -1));
      setCeleb([...celeb, sort]);
    }

  return <div className="App">
<div>
<button onClick={randomCeleb}>Add Random Celeb</button>
<button onClick={sortCeleb}>Sort by Name</button>
<button onClick={sortPopularity}>Sort by Popularity</button>
</div>
<table>
    <thead>
        <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
        </tr>
    </thead>
    <tbody>
      {celeb.map(celeb =>
        <tr>
        <td><img src={celeb.pictureUrl}/></td>
        <td>{celeb.name}</td>
        <td>{celeb.popularity}</td>
        <td>{celeb.wonOscar ? '🏆' : ''}</td>
        <td>{celeb.wonEmmy ? '🏆' : ''}</td>
      </tr>
        )}
      
    </tbody>
</table>

  </div>;

}

export default App;
