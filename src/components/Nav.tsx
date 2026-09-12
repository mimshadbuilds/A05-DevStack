import logo from '../assets/icon.png';

const Nav = () => {
    return (
        <nav>
            <div className="container mx-auto flex h-14 items-center justify-between px-4">
                <div className="flex items-center gap-1">
                    <img src={logo} alt="Logo" className="h-10 w-10 object-contain rounded-md pt-1" />
                    <span className="text-xl font-bold text-gray-900">
                        Dev <span className="text-pink-600">Stack</span>
                    </span>
                </div>
            <ul className="hidden md:flex justify-center items-center gap-6 text-sm font-semibold text-gray-600">
                <li>
                    <a href="#" className="text-pink-600 transition hover:text-pink-700">Home </a>
                </li>
                <li>
                    <a href="#" className="transition hover:text-pink-600">Technologies</a>
                </li>
                <li>
                    <a href="#" className="transition hover:text-pink-600">Projects</a>
                </li>
                <li> 
                    <a href="#" className="transition hover:text-pink-600">About</a>
                </li>
                <li>
                    <a href="#" className="transition hover:text-pink-600">Contact</a>
                </li>
            </ul>
            <div className="flex items-center gap-4">
                <button className="text-sm font-medium text-gray-700 transition hover:text-pink-600">
                    Sign In
                </button>
                <button className="rounded-full bg-pink-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700">
                    Sign Up
                </button>
                </div>
            </div>
        </nav> 
    );
};

export default Nav;