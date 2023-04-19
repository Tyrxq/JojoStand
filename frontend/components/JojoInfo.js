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
                        <JojoStats jojoStats={jojoStand.stats}/>
                        <img id ="jojo-image" src={pic} />
                       
                   </div>
    
                   
                </div>
                
                
                <h3>Ability</h3>
                
                <h4>{jojoStand.ability}</h4>
                
                
                
                <h3>Description</h3>
                
                <h4>{jojoStand.description}</h4>
        
          </div>
          )
    }
  
}

export default JojoInfo
