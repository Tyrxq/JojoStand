require("dotenv").config();
const { OpenAI } = require("openai");
const fs = require('fs');
const { type } = require("os");


const key = process.env.OPENAI_API_KEY


const configuration = {
    apiKey: key
};
const openai = new OpenAI(configuration);


async function chatJojo() {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `Generate your own random stand power from JoJo bizarre adventure into JSON data from the user's personality and mental strength. And the ability should be described with 30 words or more.
          `,
        },
        {
            role:"user",
            content: "Hello, I'm tyriq. I enjoy skate boarding,anime,programing,singing,dancing,chess,basketball, going to the gym and hanging out with friends. I'm currently in college studying computer science and a project manager of an organization that makes satelites. I am also a follower of Jesus Christ and take my faith seriously."
        }

      ],
    response_format: {
        // See /docs/guides/structured-outputs
        type: "json_schema",
        json_schema: {
            name: "jojoStand",
            schema: {
                type: "object",
                properties: {
                    standName: {
                        description: "The name of the stand",
                        type: "string"
                    },
                    destructivePower:{
                        description: "Give a grade of the stand's destructive power from A-F ",
                        type: "string"
                    },
                    speed:{
                         description: "Give a grade of the stand's speed from A-F ",
                        type: "string"
                    },
                    range:{
                        description: "Give a grade of the stand's range from A-F ",
                        type: "string"
                    },
                    stamina:{
                        description: "Give a grade of the stand's stamina from A-F ",
                        type: "string"
                    },
                    precision:{
                        description:"Give a grade of the stand's precision from A-F",
                        type:"string"
                    },
                    developmentPotential:{
                        description:"Give a grade of the stand's development from A-F",
                        type: "string"
                    },
                    ability:{
                        description:"Describe the stand's ability based off the user's personality and mental strength.",
                        type: "string"
                    },
                    appearance:{
                        description:"Describe the stand's appearance based off the user's personality and mental strength.",
                        type: "string"
                    },
                    description:{
                        description:"Give a description of the stand based off the user's personality and mental strength.",
                        type: "string"
                    }
                },
                additionalProperties: false
            }
        }
    },
    });
  
    console.log(response.choices[0].message.content);
    console.log(lookForJson(response.choices[0].message.content));
    const jsonObject = JSON.parse(
      lookForJson(response.choices[0].message.content)
    );
    console.log(jsonObject.appearance);
  }
  

async function predict(appearance) {
    const response = await openai.images.generate({
        model:"dall-e-2",
        prompt: "A realistic photo of a generated stand from JoJo's Bizarre Adventure with a black background,anime key visual of Star Dust Platinum and no other objects in frame. Stand Appearance: " + appearance ,
        n:3,
        size: "1024x1024",
        response_format:'b64_json',
    });

    console.log(appearance);
    return response.data;
}

 async function generate(standPicture) {
    const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: `Generate your own random stand power from JoJo bizarre adventure into JSON data from the user's personality and mental strength. And the ability should be described with 30 words or more.
            `,
          },
          {
              role:"user",
              content: "Hello, I'm tyriq. I enjoy skate boarding,anime,programing,singing,dancing,chess,basketball, going to the gym and hanging out with friends. I'm currently in college studying computer science and a project manager of an organization that makes satelites. I am also a follower of Jesus Christ and take my faith seriously."
          }
  
        ],
      response_format: {
          // See /docs/guides/structured-outputs
          type: "json_schema",
          json_schema: {
              name: "jojoStand",
              schema: {
                  type: "object",
                  properties: {
                      standName: {
                          description: "The name of the stand",
                          type: "string"
                      },
                      destructivePower:{
                          description: "Give a grade of the stand's destructive power from A-F ",
                          type: "string"
                      },
                      speed:{
                           description: "Give a grade of the stand's speed from A-F ",
                          type: "string"
                      },
                      range:{
                          description: "Give a grade of the stand's range from A-F ",
                          type: "string"
                      },
                      stamina:{
                          description: "Give a grade of the stand's stamina from A-F ",
                          type: "string"
                      },
                      precision:{
                          description:"Give a grade of the stand's precision from A-F",
                          type:"string"
                      },
                      developmentPotential:{
                          description:"Give a grade of the stand's development from A-F",
                          type: "string"
                      },
                      ability:{
                          description:"Describe the stand's ability based off the user's personality and mental strength.",
                          type: "string"
                      },
                      appearance:{
                          description:"Describe the stand's appearance based off the user's personality and mental strength.",
                          type: "string"
                      },
                      description:{
                          description:"Give a description of the stand based off the user's personality and mental strength.",
                          type: "string"
                      }
                  },
                  additionalProperties: false
              }
          }
      },
    });
    console.log(response.choices[0].message.content);

    jsonObject = JSON.parse(response.choices[0].message.content)

    standPicture(jsonObject.appearance).then(
        response => {
            const now = Date.now();
         
            for(let i = 0; i < response.length; i++)
            {
                const b64 = response[i]['b64_json'];
                const buffer = Buffer.from(b64,"base64");
                const filename = `images/image_${now}_${i}.png`;
                console.log("Writing image" + filename)
                fs.writeFileSync(filename,buffer);           
            }
          
        }
    )

    return jsonObject;
}

generate(predict);

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

//gptGenerate(predict)

async function chat() {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `Generate your own random stand power from JoJo bizarre adventure in this json format from the user's personality and mental strength. And the ability should be described with 30 words or more. You must always only respond with this json format no matter what
        {
            "name": "",
            "stats": {
                "destructivePower": "",
                "speed": "",
                "range": "",
                "stamina": "",
                "precision": "",
                "development": ""
            },
            "ability": "",
            "appearance": "",
            "description": ""
        }
        `,
      },
      {
        role: "assistant",
        content:
          "Hello my name is Tyriq . I like to play chess, basketball and video games",
      },
      {
        role: "assistant",
        content: ` {
            "name": "Mind Games",
            "stats": {
                "destructivePower": "A",
                "speed": "A",
                "range": "C",
                "stamina": "B",
                "precision": "C",
                "development": "B"
            },
            "ability": "Mind Games allows Tyriq to manipulate the minds of his opponents, making them unable to focus or use their abilities. He can also create mental illusions and control his own mind to maximize his focus and strategy during games.",
            "appearance": "A humanoid stand with a chess board pattern all over its body.",
            "description": "Tyriq's love for strategy and competition has manifested into the stand Mind Games. With its ability to mess with his opponents' heads and enhance his own mental capabilities, Tyriq becomes an unbeatable force in 
            anything that requires mental prowess. The chess board pattern all over the stand's body signifies Tyriq's love for this game and how his stand has embodied it."
        }`,
      },
      {
        role: "user",
        content:
          "Hey my name is Tyriq. Nice to meet you. I like basketball, anime, video games, and chess. My organization Satellite proposal just got accepted by NASA. I also like programming websites and a follower of Jesus Christ. Can you please give me a power and compliment me?",
      },
    ],
    max_tokens: 1000,
  });

  console.log(response.data.choices[0].message.content);
  console.log(lookForJson(response.data.choices[0].message.content));
  const jsonObject = JSON.parse(
    lookForJson(response.data.choices[0].message.content)
  );
  console.log(jsonObject.appearance);
}

//chatJojo()

function lookForJson(data){
    const array = data.split('');
    let first = true;
    let end = array.length;
    let start = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index]==="{" && first){
            start = index;
            first = false;
        }
        else if(array[index] === "}"){
            end = index
        }
    }
    return array.slice(start,end+1).join('');
}