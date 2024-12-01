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
                        <JojoStats jojoStats={jojoStand}/>
                       
                   </div>
    
                   
                </div>
                
                <div className = "jojo-text">
                    <h4 className ='ps-3'>Ability</h4>
                    <hr></hr>
                    
                    <p className = "jojo-text-a ps-3">{jojoStand.ability}</p>
                    
                    
                    
                    <h4 className ='ps-3'>Description</h4>
                    <hr></hr>
                    
                    <p className = "jojo-text-a ps-3" id = "last-text" >{jojoStand.description}</p>
                </div>
                
        
          </div>
          )
    }
  
}

export default JojoInfo
