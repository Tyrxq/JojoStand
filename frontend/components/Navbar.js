import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {

    const router = useRouter();
    const currentpage = router.pathname;

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary nav-backround navbar-dark" >
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="container d-flex justify-content-center">
               
                <div className="row">
                    <div className="col-12 d-flex justify-content-center mb-3">
                        <h2 id = "navbar-title">Jojo's Stand Arrow</h2>
                    </div>

                    <div className="col-12 d-flex justify-content-center"> 
                        <div className="collapse navbar-collapse links" id="navbarToggleExternalContent">
                            <ul className="navbar-nav align-items-center mx-auto">

                                <Link className={currentpage == "/" ?"nav-link nav-text": "nav-link"} aria-current="page" href="/">Generation</Link>
                                
                                <Link className={currentpage == "/stands" ?"nav-link nav-text": "nav-link"} href="/stands">Stands</Link>
                                
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </nav>
    );
}

export default Navbar;