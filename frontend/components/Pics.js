import React from 'react'

const Pics = ({pictures,func}) => {
  if(pictures.length > 0){
    return (
        <div className = "pic-container">
              {pictures.map((pic,index) => {
                    return(
                      <img key = {index} src={pic.url} className="pic" onClick= {() =>func(pic.url)} />
                    )})
              }
            
            </div>
      )
  }
 
}

export default Pics
