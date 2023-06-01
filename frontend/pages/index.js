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

      const responseDescription = await fetch("/api/get-JojoStand-description",{
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt: input }),
      });

      const standDescription = await responseDescription.json();
      
      console.log(standDescription);

      //checks for error from request
      if(standDescription.text === false){
        console.error("Error from server");
        setIsLoading(false);
      }else{

        const responsePics = await fetch("/api/get-JojoStand-pictures",{
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ prompt: standDescription.text.apperance}),
        });

        const standPics = await responsePics.json();

        setJostand(JSON.parse(standDescription.text));
        setPics(standPics.pics.data);
        console.log(JSON.stringify(jojoStand));
        setBigPic(standPics.pics.data[0].url)
        setIsLoading(false);
      }
      
      
      

    }
    
    



    return(
     
    <div className = {pics.length === 0 ? "generation-container-nothing" : "generation-container" }>


      <JojoInfo jojoStand={jojoStand} pic = {bigPic}/>


      <Pics pictures={pics} func={setBigPic} selector = {bigPic}/>


      <Textbox submit={submit} func = {setInput} loading={isLoading} pics = {pics}/>



    </div>)
}
 
 