import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {

    const router = useRouter();
    const currentpage = router.pathname;

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary nav-backround" >
            <div className="container-fluid">
                <Link className="navbar-brand nav-text" href="/">Jojo's Stand Arrow</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse links" id="navbarToggleExternalContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ul-links">
                        <li className="nav-item ">
                            <Link className={currentpage == "/" ?"nav-link nav-text": "nav-link"} aria-current="page" href="/">Generation</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className={currentpage == "/stands" ?"nav-link nav-text": "nav-link"} href="/stands">Stands</Link>
                        </li>
                    </ul>
                
                </div>
            </div>
        </nav>
    );
}

export default Navbar;