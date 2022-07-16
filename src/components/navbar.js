import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <div id="navbar" className="flex justify-evenly md:justify-end text-light text-4xl space-x-8 mt-12 flex-wrap">
            <Link to="/" className='border-b-2 border-slate-800 hover:text-med-accent duration-100 hover:border-med-accent font-light w-auto'>Home</Link>
            <Link to="/works" className='border-b-2 border-slate-800 hover:text-med-accent duration-100 hover:border-med-accent font-light w-auto'>Works</Link>
            <Link to="/about" className='border-b-2 border-slate-800 hover:text-med-accent duration-100 hover:border-med-accent font-light w-auto'>About</Link>
            <Link to="/contact" className='border-b-2 border-slate-800 hover:text-med-accent duration-100 hover:border-med-accent font-light w-auto'>Contact</Link>
        </div>
    );
}