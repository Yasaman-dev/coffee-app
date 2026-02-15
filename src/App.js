import './App.css';
import Card from './components/Card';
import { useEffect, useState } from 'react';
import headerImage from './assets/header.jpg';

function App() {
  const [coffees, setCoffees] = useState([]);
  const [valentineMode, setValentineMode] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [selectedCoffee, setSelectedCoffee] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
    )
      .then(res => res.json())
      .then(data => setCoffees(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div
      style={{
       background: valentineMode
       ?"linear-gradient(135deg, #ffe0e0, #ffb6c1, #ffd6e0)"
      :"#1a1a1a",
       color: valentineMode
       ?"#800020"
       :"#eee",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        transition: "all 0.5s ease"
      }}
    >
      {/* HEADER */}
      <div
        style={{
          backgroundImage: `url(${headerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "250px",
          borderRadius: "12px",
          marginBottom: "20px"
        }}
      />

      {/* COLLECTION CONTAINER */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px",
          borderRadius: "12px",
          backgroundColor: valentineMode ? "#ffe0e0" : darkMode ? "#2a2a2a" : "#f9f9f9",
          boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
          transition: "all 0.5s ease"
        }}
      >
        <h1 style={{
          fontFamily: "'Pacifico', cursive",
          textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
          color: valentineMode ? "#800020" : darkMode ? "#afaaaaff" : "#000",
          textAlign: "center",
          marginBottom: "10px"
        }}> Our Collection </h1>

        <p style={{
          fontFamily: "'Roboto', sans-serif",
          textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
          color: valentineMode ? "#800020" : darkMode ? "#ccc" : "#333",
          textAlign: "center",
          marginBottom: "20px"
        }}> Choose your favorite coffee! </p>

        {/* BUTTONS */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <button
            onClick={() => {
            }}
            style={{
              marginRight: "10px",
              padding: "8px 16px",
              fontWeight: "bold",
              borderRadius: "8px",
              backgroundColor: valentineMode ? "#ff7bac" : darkMode ? "#444" : "#000",
               color: "#fff",
              cursor: "pointer",
              boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
              transition: "all 0.3s ease"
            }}
          >
            All Products
          </button>

          <button
            onClick={() => {
              setValentineMode(!valentineMode)
            }}
            style={{
              padding: "8px 16px",
              fontWeight: "bold",
              borderRadius: "8px",
              backgroundColor: valentineMode? "#333":"#ff7bac",

              color: "#fff",
              cursor: "pointer",
              boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
              transition: "all 0.3s ease"
            }}
          >
           {valentineMode ? "Dark Mode": "Vaentine Mode"} 
          </button>
        </div>

        {/* CARDS */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px"
          }}
        >
          {coffees.map((coffee, index) => (
            <Card
              key={index}
              coffee={coffee}
              valentineMode={valentineMode}
              onClick={() => setSelectedCoffee(coffee)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
//111
export default App;