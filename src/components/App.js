import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";
import user from "../data/user";


// pass this data down as props to the child component(s) that need it!

console.log(user);

function App() {
  return (
    <div>
      <Links/>
      <NavBar />
      <Home 
      name={user.name}
      city={user.city} 
      color={user.color}/>

      <About 
      github={user.links.github}
      linkedin={user.links.linkedin}
      bio={user.bio} /> 

      <Links/>
        

    </div>
  );
}

export default App;
