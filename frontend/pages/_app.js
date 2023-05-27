
import "../styles/index.css";
import "../styles/textbox.css";
import "../styles/jojoInfo.css";
import  "../styles/pics.css";
import "../styles/navbar.css";
import {useRouter} from 'next/router';
import { Analytics } from '@vercel/analytics/react';
import Navbar from "../components/Navbar";

export default function App({Component, pageProps}){
    const router = useRouter();
    return(
        <>
            <Navbar/>
            <Component {...pageProps}/>
            <Analytics/>
        
        </>


    )


}