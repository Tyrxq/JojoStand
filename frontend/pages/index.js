import {useState} from "react";
import Textbox from "../components/Textbox";
import JojoInfo from "../components/JojoInfo";


export default function Home() {
    
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
    const [input,setInput] = useState("");
    const [bigPic,setBigPic] = useState("")

  
    async function submit(e){
      e.preventDefault();

      const response = await fetch("/api/get-Jojo-Stand",{
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt: input })
      })

      const stand = await response.json();
      console.log(stand);
      setJostand(JSON.parse(stand.text));
      setPics(stand.pics.data);
      console.log(JSON.stringify(jojoStand));
      setBigPic(stand.pics.data[0].url)
      
      

    }
    
    



    return(
      <div className = "container">

        <JojoInfo jojoStand={jojoStand} pic = {bigPic}/>
        
        <div className = "pic-container">
          {pics.map((pic,index) => {
                return(
                  <img key = {index} src={pic.url} className="pic" onClick= {() =>setBigPic(pic.url)} />
                )})
          }
        
        </div>
        <Textbox submit={submit} func = {setInput}/>
        
        
        
      </div>
    )
}
 
 