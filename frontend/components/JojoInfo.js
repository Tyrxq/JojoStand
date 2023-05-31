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
                    <h4>Ability</h4>
                    <hr></hr>
                    
                    <a className = "jojo-text-a">{jojoStand.ability}</a>
                    
                    
                    
                    <h4>Description</h4>
                    <hr></hr>
                    
                    <a className = "jojo-text-a" id = "last-text" >{jojoStand.description}</a>
                </div>
                
        
          </div>
          )
    }
  
}

export default JojoInfo
