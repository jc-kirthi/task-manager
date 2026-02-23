import React from 'react';
import { LogOut, CheckSquare } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ user, setUser }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('userInfo');
        setUser(null);
        navigate('/login');
    };

    return (
        <nav style={{ padding: '1rem 2rem', background: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'var(--primary)', fontWeight: 'bold', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckSquare /> Taskly
            </Link>
            <div>
                {user ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <span>Hello, <span style={{ fontWeight: 'bold' }}>{user.name}</span></span>
                        <button onClick={handleLogout} style={{ border: 'none', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', color: '#ef4444', fontWeight: 'bold' }}>
                            <LogOut size={18} /> Logout
                        </button>
                    </div>
                ) : (
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <Link to="/login" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Login</Link>
                        <Link to="/signup" style={{ textDecoration: 'none', background: 'var(--primary)', color: 'white', padding: '6px 16px', borderRadius: '8px' }}>Sign Up</Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
