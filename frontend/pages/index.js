import {useState} from "react"


export default function Home(props) {
    
    const [jojoStand,setJostand] = useState({
       
      });
  

  
    async function submit(e){
      e.preventDefault();

      const response = await fetch("/api/get-Jojo-Stand",{
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
      })

      const stand = await response.json()
      setJostand(stand)
      console.log(jojoStand.text)
      
      

    }
    



    return(
      <div className = "container">
        
        <form onSubmit = {submit}>
          
          <button type = "submit">Generate your Jojo Stand</button>


        </form>
        
        {/* 
        <div className ="jojo-info">

          <h2>{jojoStand["standInfo"].Name}</h2>
          
          <h3>Ability</h3>
          
          <h4>{jojoStand["standInfo"].Ability}</h4>
          
          <h3>Stats</h3>
          
          <p>Destructive Power:{jojoStand["standInfo"].Stats["Destructive Power"]}</p>
          
          <p>Speed:{jojoStand["standInfo"].Stats["Speed"]}</p>
          
          <p>Range:{jojoStand["standInfo"].Stats["Range"]}</p>
          
          <p>Durability:{jojoStand["standInfo"].Stats["Durability"]}</p>
          
          <h3>Weakness</h3>
          
          <h4>{jojoStand["standInfo"].Weakness}</h4>

          <img src={jojoStand.standPics} />


        </div>
        */}
        
      </div>
    )
}
 
 