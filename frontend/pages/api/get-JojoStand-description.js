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
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `Generate your own random stand power from JoJo bizarre adventure into JSON data from the user's personality and mental strength. And the ability should be described with 30 words or more.
          `,
        },
        {
            role:"user",
            content: userDescription
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
                      development:{
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
    }
  
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