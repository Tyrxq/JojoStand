import {useState} from "react";
import Textbox from "../components/Textbox";
import JojoInfo from "../components/JojoInfo";
import Pics from "../components/Pics";



export default function Home() {
    
    const [jojoStand,setJostand] = useState({
        "name": "",
        "destructivePower": "",
        "speed": "",
        "range": "",
        "stamina":"",
        "precision":"",
        "development": "",
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
          body: JSON.stringify({ prompt: JSON.parse(standDescription.text).appearance}),
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

      
      <div className = {pics.length === 0 ? "about" : "invisible" }>
        <h4>Unleash your unique Stand, drawing inspiration from the captivating Jojo's Bizarre Adventure Series. Infuse the AI model with intriguing details about your personality and mental fortitude, allowing it to craft a manifestation that mirrors your essence.</h4>
        <hr/>
        <p>Vulgar or harsh language will result in no generation. </p>
      </div>


      <JojoInfo jojoStand={jojoStand} pic = {bigPic}/>


      <Pics pictures={pics} func={setBigPic} selector = {bigPic}/>

      <Textbox submit={submit} func = {setInput} loading={isLoading} pics = {pics}/>
      



    </div>)
}
 
 