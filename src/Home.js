import { useState } from "react";
import {data} from './data';
import Button from "./Button";
import Design from "./Design";
function Home(){
const[design, setDesign]= useState(data);
const chosenDesign = (searchTerm) => {
const newDesign = data.filter(element => element.searchTerm === searchTerm);
setDesign(newDesign);
console.log(newDesign);
}
return (
<div>
   <div className="cont">
      <h2 className="back">Выбери направление дизайна</h2>
   </div>
   <Button filteredDesign={chosenDesign}/>
   <Design designForChoose={design}/>
</div>
)
}
export default Home;