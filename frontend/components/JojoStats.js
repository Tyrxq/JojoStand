import React from 'react';
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
    
  
const JojoStats = ({jojoStats}) => {

    const gradePoint = {
        "A": 5,"B": 4, "C":3, "D": 2,"E":1, "F":0 
    }

    const data = {
        labels: ['Destructive Power', 'Speed', 'Range', 'Stamina', 'Precision', 'Development Potential'],
        datasets: [
        {
            label: '',
            data: [gradePoint[jojoStats.destructivePower], gradePoint[jojoStats.speed], gradePoint[jojoStats.range], gradePoint[jojoStats.stamina], gradePoint[jojoStats.precision], gradePoint[jojoStats.development]],
            backgroundColor: 'rgba(255, 215, 0, 0.45)',
            borderColor: 'rgba(255, 215, 0, 1)',
            borderWidth: 1,
        },],  
    };
  return (
    <div className='jojo-stats'>
      <Radar 
            data = {data} 
            
            options={{ 
                animation: true,
                scales:{
                    
                    r:{
                       beginAtZero:true ,
                       min: 0,
                       max: 6,
                       pointLabels: {
                        font: {
                          family: "Times New Roman",
                          size: 14,
                          weight: "bolder"
                        }
                      },
                       ticks: {
                        font: {
                          size:11
                        },
                        stepSize: 1,
                        color:"black",
                        callback:(value,tick,values) =>{
                            const grade = {6:"",5: "A",4:"B",3:"C",2:"D",1:"E",0:"F"};
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
                maintainAspectRatio: false,
                responsive: true   
                }}/>
    </div>
  )
}

export default JojoStats
