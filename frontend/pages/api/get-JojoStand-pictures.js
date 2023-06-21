import { NextResponse} from 'next/server';

const key = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

export const config = {
  runtime: 'edge',
};

async function predictFetch(appearance){

    const payload = {
        prompt: "A realistic photo of a generated stand from JoJo's Bizarre Adventure with a black background,anime key visual of Star Dust Platinum, full body picture and no other objects in frame. Stand Appearance: " + appearance ,
        n: 3,
        size: "512x512",
    };


    const responseData = await fetch("https://api.openai.com/v1/images/generations", {
        "headers": {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${key}`,
        },
        "method": "POST",
        "body": JSON.stringify(payload),
    });

    const response = await responseData.json();

    return {pics : response};

}

export default async function handler(req){
    const json = await req.json();
    
    const response = await predictFetch(json.prompt);
    return NextResponse.json(response);
}