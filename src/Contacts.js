import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Container} from "react-bootstrap";
import Team from "./Team.jpg";
import DesignDept from "./DesignDept.jpg";
import ProcurementDept from './ProcurementDept.jpg';
function Contacts(){
return(
<Container>
   <Carousel>
      <Carousel.Item>
         <img
            className="d-block w-100"
            src={Team}
            alt="First slide"
            />
         <Carousel.Caption>
            <h5>Вместе - мы сила!</h5>
            <p>Слаженный коллектив - путь к успешному проекту.</p>
         </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img
            className="d-block w-100"
            src={DesignDept}
            alt="Second slide"
            />
         <Carousel.Caption>
            <h5>Отдел Дизайна</h5>
            <p>Воплотим в жизнь ваш самый смелый проект!</p>
         </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img
            className="d-block w-100"
            src={ProcurementDept}
            alt="Third slide"
            />
         <Carousel.Caption>
            <h5>Отдел закупок</h5>
            <p>Экономим ваши деньги без ущерба для качества</p>
         </Carousel.Caption>
      </Carousel.Item>
   </Carousel>
</Container>
);
}
export default Contacts;