
import "../styles/index.css";
import "../styles/textbox.css";
import "../styles/jojoInfo.css";
import  "../styles/pics.css";
import {useRouter} from 'next/router';
import { Analytics } from '@vercel/analytics/react';
;

export default function App({Component, pageProps}){
    const router = useRouter();
    return(
        <>
           
            <Component {...pageProps}/>
            <Analytics/>
        
        </>


    )


}