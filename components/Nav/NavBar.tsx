import Link from 'next/link';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="loginBtn">
                    <Link href="/login">
                        Login
                    </Link>
                </div>
            </nav>

            
        </>
    );
};

export default Navbar;
