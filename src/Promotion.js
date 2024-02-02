import React from 'react';
import {useEffect, useState,useRef } from 'react';
import './Promotion.css';

const Promotion = () =>{
const [timerDays,setTimerDays] = useState('00');
const [timerHours,setTimerHours] = useState('00');
const [timerMinutes,setTimerMinutes] = useState('00');
const [timerSeconds,setTimerSeconds] = useState('00');

let interval = useRef();

const startTimer = () => {
const countdownDate = new Date('February 29,2024 00:00:00').getTime();

    interval = setInterval(()=> {
        const now = new Date().getTime();
        const distance = countdownDate-now;

        const days = Math.floor(distance/(1000*60*60*24));
        const hours = Math.floor(distance % (1000*60*60*24)/(1000*60*60));
        const minutes = Math.floor(distance % (1000*60*60)/(1000*60));
        const seconds = Math.floor(( distance % (1000*60))/ 1000);    
        
        if (distance < 0){
            clearInterval(interval.current);
        }
        else{
            setTimerDays(days);
            setTimerHours(hours);
            setTimerMinutes(minutes);
            setTimerSeconds(seconds);
        }
    }, 1000);
};
useEffect(()=>{
    startTimer();
    return () => {
        clearInterval(interval.current);
    };
});

return(
    <div className='promotion-body'>
    <div class="heading">
         <h1>До конца зимней акции осталось...</h1>
         </div>
             <div className='container'>
        <div className='christmas'>
                    <div class="block">
               <h4>{timerDays}</h4>
               <h3>ДНЕЙ</h3>
                    </div>
                    <span className='block'>:</span>
                    <div className='block'>
                        <h4>{timerHours}</h4>
                        <h3><small>ЧАСОВ</small></h3>
                    </div>
                    <span className='block'>:</span>
                    <div className='block'>
                        <h4>{timerMinutes}</h4>
                        <h3><small>МИНУТ</small></h3>
                    </div>
                    <span className='block'>:</span>
                    <div className='block'>
                        <h4>{timerSeconds}</h4>
                        <h3><small>СЕКУНД</small></h3>
                    </div>
                     </div>
        </div>
    </div>
 )

}
export default Promotion;

