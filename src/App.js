import React ,{useState} from "react";
//import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";
import HookCounter from "./components/hookcounter";
import Review from "./components/review"

function App() {
   const [info,setinfo] = useState([
     {
       image :"Photo",
       name : "Midhun",
       profession : "Student",
       review : "sldfienwe wefnw ewfowf ewfiok efikwfje fejw eiofwk wfeklfnk abdcdjfndjfwe wenwweklwew fwenelwefmw fnwlnf e fweufwuee"
     }
   ]);
  return (
    <div className="Par">
      <div className="App">
          <h1> \\ Reviews</h1>
      </div>   
      <button className="btn btn-primary btn-sm">left</button>
      <Review setInfo ={setinfo} info ={info}/>
      <button className="btn btn-primary">right</button>
    </div>     
  );
}

export default App;
