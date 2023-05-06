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
                   <div className ='jojo-visual'>
                        <img id ="jojo-image" src={pic} />
                        <JojoStats jojoStats={jojoStand.stats}/>
                       
                   </div>
    
                   
                </div>
                
                <div className = "jojo-text">
                    <h2>Ability</h2>
                    
                    <h4>{jojoStand.ability}</h4>
                    
                    
                    
                    <h2>Description</h2>
                    
                    <h4>{jojoStand.description}</h4>
                </div>
                
        
          </div>
          )
    }
  
}

export default JojoInfo
