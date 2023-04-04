import Link from "next/link"
import "../styles/navbar.css"
import {useRouter} from 'next/router'

export default function App({Component, pageProps}){
    const router = useRouter();
    return(
        <>
           
            <nav className = "navbar">
                <ul>
                    <li>
                        <Link href = "/" className= {router.pathname == '/' ? "active" : "nav-link"}>Home</Link>
                    </li>

                    <li>
                        <Link href = "/about" className={router.pathname == '/about' ? "active" : "nav-link"}>About</Link>
                    </li>

                    <li>
                        <Link href = "/store" className={router.pathname == '/store' ? "active" : "nav-link"}>Store</Link>
                    </li>

                    <li>
                        <Link href = "/blog" className={router.pathname == '/store' ? "active" : "nav-link"}>Blog</Link>
                    </li>
                 
                </ul>
               
                
            </nav>
           
            <Component {...pageProps}/>
        
        </>


    )


}