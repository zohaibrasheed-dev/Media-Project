import logo from '../assets/finalLogo.png';
import { useState } from "react";
import { callUnsplash } from "../api/mediaApi";
import { useDispatch } from "react-redux";
import { setQuery, setResults } from "../redux/searchSlice";



const Header = () => {

    const [search, setSearch] = useState('');

    const dispatch = useDispatch();

    const handleForm = async (e) => {
        e.preventDefault();

        dispatch(setQuery(search));
        const unsplashData = await callUnsplash(search);
        dispatch(setResults(unsplashData));
    }

    return (
        <header>
            <div className="header-row flex justify-between px-14 py-4 bg-cyan-800 items-center">
                <a href="#" className="logo brightness-0 invert w-50"><img src={logo} alt="logo" /></a>
                <div className="header-search">
                    <form onSubmit={handleForm}>
                        <div className="form-content w-[500px] flex gap-4">
                            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search here..." className="border-solid border-2 border-white rounded text-white px-5 py-4 text-xl w-3/4" />
                            <button type="submit" className="w-1/4 bg-amber-400 p-3 rounded cursor-pointer text-white text-xl">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Header