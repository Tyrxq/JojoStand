require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");



const key = process.env.OPENAI_API_KEY


const configuration = new Configuration({
    apiKey: key
});
const openai = new OpenAIApi(configuration);


async function predict(appearance) {
    const response = await openai.createImage({
        prompt: "A realistic photo of a generated stand from JoJo's Bizarre Adventure with a black background,anime key visual of Star Dust Platinum and no other objects in frame. Stand Appearance: " + appearance ,
        n: 3,
        size: "256x256",
        
    });

    return response.data;
}

 async function generate(standPicture) {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt:`Generate your own random stand power from the JoJo Bizarre Adventure Anime series in this json format 
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
        `,
        temperature: .70,
        max_tokens: 1000
    });


    const jsonObject = JSON.parse(response.data.choices[0].text);

    const response_pic = await standPicture(jsonObject.appearance);

    return {text: response.data.choices[0].text, pics: response_pic}
}



export default async function handler(req,res){
    const response = await generate(predict);
    res.status(200).json(response);
}




/*export default async function handler(req,res){

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

    const response_pic = await openai.createImage({
        prompt: "A realistic photo of a generated stand from JoJo's Bizarre Adventure with a black background,anime key visual of Star Dust Platinum and no other objects in frame. Stand Appearance: " + appearance ,
        n: 3,
        size: "512x512",
   
    });

   
    res.status(200).json({text: response.data.choices[0].text, pics: response_pic.data});

}*/