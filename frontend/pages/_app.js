
import "../styles/index.css";
import "../styles/textbox.css";
import "../styles/jojoInfo.css";
import  "../styles/pics.css";
import "../styles/navbar.css";
import { Analytics } from '@vercel/analytics/react';
import Navbar from "../components/Navbar";
import Head from 'next/head'


export default function App({Component, pageProps}){
    return(
        <>
            <Head>
                <title>Jojo's Stand Arrow</title>
            </Head>
            <Navbar/>
            <Component {...pageProps}/>
            <Analytics/>
        
        </>


    )


}