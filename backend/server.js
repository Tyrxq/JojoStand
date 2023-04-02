require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");
//const fs = require('fs');


const key = process.env.OPENAI_API_KEY


const configuration = new Configuration({
    apiKey: key
});
const openai = new OpenAIApi(configuration);

/*
const predict = async function() {
    const response = await openai.createImage({
        prompt: "A realistic photo of a generated stand from JoJo's Bizarre Adventure with a black background,no crop and no other objects in frame. Stand Appearance: 「Timeless Dragon」 takes the form of a sleek and powerful dragon made entirely of shimmering, metallic silver. Its eyes glow with a fierce blue light, and its wingspan stretches to nearly 20 feet. The Stand's scales are intricately detailed, giving it the appearance of a living work of art. ",
        n: 3,
        size: "512x512",
        response_format:'b64_json',
    });


    return response.data;
}
*/

 async function generate(){
    const response = await openai.createChatCompletion(
        {
            model: "text-davinci-300",
            pronmt:"Generate your own random stand power from JoJo bizarre adventure and the name Tyriq. Include Stand stats, Stand Ability and Stand weakness",
            temperature: 0,
            max_tokens: 1000
        }
    )
   console.log(response.data.choices[0].text);
}

/*predict().then(
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
*/
generate()