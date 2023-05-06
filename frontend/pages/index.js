import {useState} from "react";
import Textbox from "../components/Textbox";
import JojoInfo from "../components/JojoInfo";
import Pics from "../components/Pics";


export default function Home() {
    
    const [jojoStand,setJostand] = useState({
        "name": "",
        "stats": {
            "destructivePower": "",
            "speed": "",
            "range": "",
            "stamina":"",
            "precision":"",
            "devlopment": ""
        },
        "ability": "",
        "appearance": "",
        "description": ""
    });
    
    const [pics,setPics] = useState([]);
    const [input,setInput] = useState("");
    const [bigPic,setBigPic] = useState("");
    const [isLoading, setIsLoading] = useState(false);

  
    async function submit(e){
      e.preventDefault();
      setIsLoading(true);

      const response = await fetch("/api/get-Jojo-Stand",{
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt: input })
      })

      const stand = await response.json();
      setIsLoading(false);
      console.log(stand);

      //checks for error from request
      if(stand.text === false){
        console.error("Error from server");
      }else{
        setJostand(JSON.parse(stand.text));
        setPics(stand.pics.data);
        console.log(JSON.stringify(jojoStand));
        setBigPic(stand.pics.data[0].url)
      }
      
      
      

    }
    
    



    return(
      <div className = "container">


        <JojoInfo jojoStand={jojoStand} pic = {bigPic}/>


        <Pics pictures={pics} func={setBigPic}/>
       
        
        <Textbox submit={submit} func = {setInput} loading={isLoading}/>
        
        
        
      </div>
    )
}
 
 