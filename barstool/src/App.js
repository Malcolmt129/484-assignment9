import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Card from './Components/Card';
import React, { useState, useEffect } from 'react';





function App() {
 
  const [barstoolData, setBarstoolData] = useState([]);

  useEffect(() => {
    axios.get("https://www.jalirani.com/files/barstool.json").then((response) => {
      setBarstoolData(response.data)});
    }, []);

  console.log(barstoolData);

  return (
    <div className="App">
        {barstoolData.map((post) => (
        <Card 
              title={post.title}
              url={post.url}
              thumbnail={post.thumbnail.location + post.thumbnail.images.small}
              author={post.author.name}
              authorImage={post.author.avatar} 
              numComments={post.comment_count}/>              
        ))}
    </div>
  );
}

export default App;
