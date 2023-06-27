
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
                <title>StandFinderX</title>
                <meta
                    name="description"
                    content="Unveil the extraordinary power within you and embark on a thrilling journey through the captivating realm of Jojo's Bizarre Adventure! Our interactive website invites you to explore the depths of your Stand potential like never before. Simply provide us with some general information about yourself, and allow our advanced AI to craft a personalized experience just for you. Witness the manifestation of your Stand as you receive a unique picture, detailed stats, and a mesmerizing description of its awe-inspiring abilities. Immerse yourself in the world of Stands and discover the hidden depths of your own power. Are you ready to embrace your destiny and unleash your Stand in Jojo's Bizarre Adventure? Step into the extraordinary realm of StandFinderX.com and let the adventure begin!"
                    key="desc"
                />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9211091175030605"crossorigin="anonymous"></script>
            </Head>
            <Navbar/>
            <Component {...pageProps}/>
            <Analytics/>
        
        </>


    )


}