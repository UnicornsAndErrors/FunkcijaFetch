import React, {useState, useEffect} from 'react'
import SearchPolje from "./components/SearchPolje";
import ListaKartica from "./components/ListaKartica";
import "./App.css"

const App = () => {
  const [searchPolje, setSearchPolje] = useState("");
  const [osobe, setOsobe] = useState([]);
  const [filter, setFilter] = useState(osobe);

  console.log("render");

  useEffect(() => {
    
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((users) => setOsobe(users));

  },[]);

  useEffect(() =>{
    const noviFilter = osobe.filter((osoba) => {
      return osoba.name.toLocaleLowerCase().includes(searchPolje);
    });
    setFilter(noviFilter);
  },[osobe, searchPolje]);

 

  const onFilterChange =(event) => {
    const searchPoljeString = event.target.value.toLocaleLowerCase();
    setSearchPolje(searchPoljeString);
  };


 


  return (
    <div>
     <SearchPolje onFilterChange ={onFilterChange}/>
     <ListaKartica osobe = {filter}/>
    </div>
  );
}

export default App;