import React from 'react'
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );
    
  export const data = {
        labels: ['Destructive Power', 'Speed', 'Range', 'Stamina', 'Precision', 'Development Potential'],
        datasets: [
        {
            label: '',
            data: [2, 5, 3, 5, 1, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },],  
    };

const JojoInfo = ({jojoStand,pic}) => {

    






    if(jojoStand.name ===""){
        //loading icon or something
        return( <Radar 
            data = {data} 
            height ="250px" width ="50px" 
            options={{ 
              
                scales:{
                    r:{
                       beginAtZero:true ,
                       min: 0,
                       max: 5,
                       ticks: {
                        stepSize: 1,
                        color:"black",
                        callback:(value,tick,values) =>{
                            const grade = {5: "A",4:"B",3:"C",2:"D",1:"E",0:"F"};
                            return grade[value];
                            }
                        },
                    },
                },
                plugins: {
                    tooltip: {
                        borderWidth: 1,
                        borderColor: "black",
                        /* https://www.chartjs.org/docs/latest/configuration/tooltip.html#tooltip-callbacks */
                        callbacks: {
                          label: function(tooltipItem, data) {
                            /* get chart.js data  */ 
                           // var dataItem = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                            //ar labelItem = data.labels[tooltipItem.index]; 
                            const grade = {5: "A",4:"B",3:"C",2:"D",1:"E",0:"F"};
                            return grade[tooltipItem.raw];     
                          }
                        }
                    },
                    legend: {
                        display: false,
                    } 
                },
                maintainAspectRatio: false }}/>)
       
    }
    else{
        return (
            <div className ="jojo-info">
                <div className = "jojo-stand">
                    <h2>{jojoStand.name}</h2>

                    <img id ="jojo-image" src={pic} />
                   
                </div>
                
                
                <h3>Ability</h3>
                
                <h4>{jojoStand.ability}</h4>
                
                <h3>Stats</h3>
                
                <p>Destructive Power:{jojoStand.stats.destructivePower}</p>
                
                <p>Speed:{jojoStand.stats.speed}</p>
                
                <p>Range:{jojoStand.stats.range}</p>
                
                <p>Stamina:{jojoStand.stats.stamina}</p>
                
                <p>Precision:{jojoStand.stats.precision}</p>

                <p>Development Potential:{jojoStand.stats.development}</p>
                
                <h3>Description</h3>
                
                <h4>{jojoStand.description}</h4>
        
          </div>
          )
    }
  
}

export default JojoInfo
