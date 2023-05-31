import React from 'react'

const Pics = ({pictures,func,selector}) => {
  if(pictures.length > 0){
    return (
        <div className = "pic-container">
              {pictures.map((pic,index) => {
                    return(
                      <img key = {index} src={pic.url} className={selector === pic.url ? "pic selector":"pic"} onClick= {() =>func(pic.url)} />
                    )})
              }
            
            </div>
      )
  }
 
}

export default Pics
