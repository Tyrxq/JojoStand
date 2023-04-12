require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");
const fs = require('fs');


const key = process.env.OPENAI_API_KEY


const configuration = new Configuration({
    apiKey: key
});
const openai = new OpenAIApi(configuration);


 async function predict(appearance) {
    const response = await openai.createImage({
        prompt: "A realistic photo of a generated stand from JoJo's Bizarre Adventure with a black background,anime key visual of Star Dust Platinum and no other objects in frame. Stand Appearance: " + appearance ,
        n: 3,
        size: "512x512",
        response_format:'b64_json',
    });

    console.log(appearance);
    return response.data;
}

 async function generate(standPicture) {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt:`Generate your own random stand power from JoJo bizarre adventure in this json format 
        {
            "Name": "",
            "Stats": {
                "Destructive Power": "",
                "Speed": "",
                "Range": "",
                "Durability": ""
            },
            "Ability": "",
            "Appearance": "",
            "Weakness": ""
            }
        }
        ,`,
        temperature: .75,
        max_tokens: 1000
    });
    console.log(response.data.choices[0].text);

    jsonObject = JSON.parse(response.data.choices[0].text)

    standPicture(jsonObject.Appearance).then(
        response => {
            const now = Date.now();
         
            for(let i = 0; i < response.data.length; i++)
            {
                const b64 = response.data[i]['b64_json'];
                const buffer = Buffer.from(b64,"base64");
                const filename = `images/image_${now}_${i}.png`;
                console.log("Writing image" + filename)
                fs.writeFileSync(filename,buffer);           
            }
          
        }
    )

    return jsonObject;
}

//generate(predict);

async function gptGenerates(){
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: `Generate your own random stand power from JoJo bizarre adventure in this json format and the ability should be described with 25 words or more. 
        {
            "Name": "",
            "Stats": {
                "Destructive Power": "",
                "Speed": "",
                "Range": "",
                "Durability": ""
            },
            "Ability": "",
            "Appearance": "",
            "Weakness": ""
            }
        }
        ,`}],
        max_tokens:1000,
      });
      
}


async function gptGenerate(standPicture){
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "system", content: `Generate your own random stand power from JoJo bizarre adventure in this json format from the user's personality and mental strength. And the ability should be described with 25 words or more. You must only respond with this json format 
        {
            "Name": "",
            "Stats": {
                "Destructive Power": "",
                "Speed": "",
                "Range": "",
                "Durability": ""
            },
            "Ability": "",
            "Appearance": "",
            "Weakness": ""
            }
        }
        ,`},{role:"user",content: "Hello, I'm tyriq. I enjoy skate boarding,anime,programing,singing,dancing,chess,basketball, going to the gym and hanging out with friends. I'm currently in college studying computer science and a project manager of an organization that makes satelites. I am also a follower of Jesus Christ and take my faith seriously."}],
        max_tokens:1000,
      });
      console.log(completion.data.choices[0].message.content);
      
      jsonObject = JSON.parse(completion.data.choices[0].message.content)

      standPicture(jsonObject.Appearance).then(
          response => {
              const now = Date.now();
           
              for(let i = 0; i < response.data.length; i++)
              {
                  const b64 = response.data[i]['b64_json'];
                  const buffer = Buffer.from(b64,"base64");
                  const filename = `images/image_${now}_${i}.png`;
                  console.log("Writing image" + filename)
                  fs.writeFileSync(filename,buffer);           
              }
            
          }
      )
  
      return jsonObject;
}

gptGenerate(predict)