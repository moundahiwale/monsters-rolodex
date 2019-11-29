import React, { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list";
import "./App.css";
import SearchBox from "./components/search-box/search-box";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    setFilteredMonsters(
      monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    );
  }, [monsters, searchField]);

  const filterMonsters = searchText => {
    setSearchField(searchText);
  };

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder="Search Monsters"
        handleChange={e => filterMonsters(e.target.value)}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
