require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");



const key = process.env.OPENAI_API_KEY
console.log(key)

const configuration = new Configuration({
    apiKey: key
});
const openai = new OpenAIApi(configuration);

const predict = async function() {
    const response = await openai.createImage({
        prompt: "A realistic photo of a generated stand from JoJo's Bizarre Adventure with a black background and no other objects in frame. Stand Appearance: Time Warp takes the form of a humanoid figure with a clock-like design on its body, complete with spinning gears and ticking hands. It wears a long coat made of shimmering time energy, which trails behind it as it moves ",
        n: 3,
        size: "1024x1024"
    });
    console.log(response.data);

    return response.data;
}

predict();