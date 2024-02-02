function Design({designForChoose}){
    return(
    <div className="products">
       {designForChoose.map((element =>{
       const{id,item,searchTerm,image, description}=element;
       return(
       <div className="product-card" key={id}>
          <img src={image} width="300px" alt="design"/>
          <div className="product-info">
             <h3>{searchTerm}</h3>
             <h3>{item}</h3>
             <p>{description}</p>
          </div>
       </div>
       )
       }))}
    </div>
    )
    }
    export default Design;