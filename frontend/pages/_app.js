import Link from "next/link"
import "../styles/navbar.css"
import {useRouter} from 'next/router'

export default function App({Component, pageProps}){
    const router = useRouter();
    return(
        <>
           
            <Component {...pageProps}/>
        
        </>


    )


}