import { NextResponse} from 'next/server';

const key = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

export const config = {
  runtime: 'edge',
};

//sometimes api provide additional text beyond the json and break the site.
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
};


async function generateFetch(userDescription) {
    const payload = {
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
                  "development": "",
              },
              "ability": "",
              "appearance": "",
              "description": ""
          }
          `,
        },
        { role: "assistant", content: "Hello my name is Tyriq . I like to play chess, basketball and video games" },
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
        { role: "user", content: userDescription },
      ],
      max_tokens: 1000
    };
  
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      "headers": {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${key}`,
      },
      "method": "POST",
      "body": JSON.stringify(payload),
    });
  
    const responseData = await response.json(); // Parse the response data
  
    let jsonObject = null;
    try {
      jsonObject = JSON.parse(lookForJson(responseData.choices[0].message.content));
    } catch (e) {
      console.log(`Error found: ${e}`);
      console.log(`Prompt: ${userDescription}`);
      console.log(`Before filtering: ${responseData.choices[0].message.content}`);
      console.log(`After filtering: ${lookForJson(responseData.choices[0].message.content)}`);
      return { text: false};
    }
  
    return { text: lookForJson(responseData.choices[0].message.content)};
};

export default async function handler(req){
    const json = await req.json();
    const response = await generateFetch(json.prompt);
    return NextResponse.json(response);
}