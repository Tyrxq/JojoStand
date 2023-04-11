import {useState} from "react"


export default function Home(props) {
    
    const [jojoStand,setJostand] = useState({
        "name": "",
        "stats": {
            "destructivePower": "",
            "speed": "",
            "range": "",
            "durability": ""
        },
        "ability": "",
        "appearance": "",
        "weakness": ""
    });
    
    const [pics,setPics] = useState([]);

  
    async function submit(e){
      e.preventDefault();

      const response = await fetch("/api/get-Jojo-Stand",{
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
      })

      const stand = await response.json();
      console.log(stand);
      setJostand(JSON.parse(stand.text));
      setPics(stand.pics.data);
      console.log(JSON.stringify(jojoStand));
      
      

    }
    
    



    return(
      <div className = "container">
        
        <form onSubmit = {submit}>
          
          <button type = "submit">Generate your Jojo Stand</button>


        </form>
        
        
        <div className ="jojo-info">

          <h2>{jojoStand.name }</h2>
          
          <h3>Ability</h3>
          
          <h4>{jojoStand.ability}</h4>
          
          <h3>Stats</h3>
          
          <p>Destructive Power:{jojoStand.stats.destructivePower}</p>
          
          <p>Speed:{jojoStand.stats.speed}</p>
          
          <p>Range:{jojoStand.stats.range}</p>
          
          <p>Durability:{jojoStand.stats.durability}</p>
          
          <h3>Weakness</h3>
          
          <h4>{jojoStand.weakness}</h4>

          
          {pics.map((pic,index) => {
              return(
                <img key = {index} src={pic.url} />
              )})
          };
           
          


        </div>
        
        
      </div>
    )
}
 
 