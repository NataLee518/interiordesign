function Button({filteredDesign}){
    return(
    <div className="cont">
       <button className="change"onClick={()=> filteredDesign("loft design")}>Loft design</button>
       <button className="change"onClick={()=> filteredDesign("moder design")}>Modern design</button>
       <button className="change"onClick={()=> filteredDesign("classicism design")}>Classicism design</button>
       <button className="change"onClick={()=> filteredDesign("minimalism design")}>Minimalism design</button>
       <button className="change"onClick={()=> filteredDesign("high tech")}>High tech design</button>
       <button className="change"onClick={()=> filteredDesign("scandinavian design")}>Scandinavian design</button>
    </div>
    )
    }
    export default Button;