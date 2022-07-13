import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <div id="navbar" className="flex justify-evenly md:justify-end text-light text-3xl space-x-8 mt-12 flex-wrap">
            <Link to="/" className='hover:border-b-2 border-light hover:text-med-accent duration-100 hover:border-med-accent font-light w-auto'>Home</Link>
            <Link to="/works" className='hover:border-b-2 border-light hover:text-med-accent duration-100 hover:border-med-accent font-light w-auto'>Works</Link>
            <Link to="/about" className='hover:border-b-2 border-light hover:text-med-accent duration-100 hover:border-med-accent font-light w-auto'>About</Link>
            <Link to="/contact" className='hover:border-b-2 border-light hover:text-med-accent duration-100 hover:border-med-accent font-light w-auto'>Contact</Link>
        </div>
    );
}