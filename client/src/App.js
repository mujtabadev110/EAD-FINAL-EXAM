import './App.css';
import React , {useState, useEffect} from 'react';
import Axios from 'axios';

function App() {

  const [bookmarks, setbookmarks] = useState([]);


  useEffect( ()=>{
    Axios.get("http://localhost:5002/api/bookmarks").then((Response)=>{
        setbookmarks(Response.data.text);
    })
  }, []); 
  return (


  
    <div className="App">
      <div className="favorite-section">
      <h1>Favorite Section</h1>
      <div className='BookMarks Display'>
      {bookmarks.map(bookmark =>{
        return (
          <div>
            <h1>Name: {bookmark.text}</h1>
          </div>
        )
      })}
    </div>
      <button>+</button>
      </div>
      

      <div className="frequent-section">
      <h1>Frequent Section</h1>
      <button>+</button>
      </div>
    </div>
  );
}

export default App;
