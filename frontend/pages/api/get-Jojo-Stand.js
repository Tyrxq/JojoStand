require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");



const key = process.env.OPENAI_API_KEY


const configuration = new Configuration({
    apiKey: key
});
const openai = new OpenAIApi(configuration);



export default async function handler(req,res){

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt:`Generate your own random stand power from JoJo bizarre adventure in this json format 
        {
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
            }
        }
        `,
        temperature: .65,
        max_tokens: 1000
    });

   
    res.status(200).json({text: response.data.choices[0].text});

}