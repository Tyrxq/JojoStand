import React from 'react'
import JojoStats from './JojoStats'


    
  

const JojoInfo = ({jojoStand,pic}) => {

    






    if(jojoStand.name ===""){
        //loading icon or something
        
        
       
    }
    else{
        return (
            <div className ="jojo-info">
                <div className = "jojo-stand">
                    <h2>{jojoStand.name}</h2>
                   
                    <img id ="jojo-image" src={pic} />
                    <JojoStats jojoStats={jojoStand.stats}/>
                   
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
