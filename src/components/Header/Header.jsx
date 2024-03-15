
import profileImage from '../../assets/profile-image.png';
import bannerImage from '../../assets/banner-image.png';

const Header = () => {
    return (
        <div>
            {/* nav bar design */}
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                            <li><div className="flex items-center gap-2 bg-gray-100 rounded-full p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                                <div className="flex-1">
                                    <input type="text" className="w-full bg-gray-100 " placeholder="Search" />
                                </div>
                            </div></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-bold">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <div className="items-center gap-1 lg:gap-2 bg-gray-100 rounded-full p-2 hidden lg:flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        <input type="text" className="grow bg-gray-100" placeholder="Search" />
                    </div>
                    <div className='bg-green-400 rounded-full w-10 h-10 flex  justify-center items-center'>
                        <div className='w-3/5'>
                            <img src={profileImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* banner section */}
            <div className="hero min-h-screen rounded-xl" style={{ backgroundImage: `url(${bannerImage})` }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" space-y-5">
                        <h1 className="mb-5  text-3xl md:text-5xl font-bold">Discover an exceptional cooking <br /> class tailored for you!</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className='space-x-3 md:space-x-5'>
                            <button className="btn bg-green-500 rounded-full">Explore Now</button>
                            <button className="btn  btn-outline rounded-full text-white">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;