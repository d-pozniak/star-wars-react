import Categories from "./Categories";
import { useState, useEffect } from 'react';
import SearchResults from "./SearchResults";

export default function AppWiki({ handleClick }){
    const [resultCharactersInfo, setResultCharactersInfo] = useState({});
    const [searchedByName, setSearchedByName] = useState(null);
    const [categoryClicked, setCategoryClicked] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (searchedByName !== null){
            console.log('searching for '+searchedByName);
            fetch(`https://swapi.dev/api/people?search=${searchedByName}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true);
                        setResultCharactersInfo(result);
                    },
                    (error) => {
                        setError(error);
                        console.log(error)
                        setIsLoaded(false);
                    }
                );
        }
        else setResultCharactersInfo({})

    },[searchedByName]);

    // useEffect(() => {
    //     console.log('time to render '+ categoryClicked)
    //     fetch(`https://www.swapi.tech/api/${categoryClicked}/`)
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 setIsLoaded(true);
    //                 setResultCharacters(result);
    //             },
    //             (error) => {
    //                 setIsLoaded(true);
    //                 setError(error);
    //             }
    //         );
    //
    // },[categoryClicked]);

    function onSearchByName(e){
        if (e.target.value === '') setSearchedByName(null);
        else setSearchedByName(e.target.value)
    }
    function onCategoryClick(category){
        setCategoryClicked(category);
    }
    return (
            <div className={'find-char--section'}>
                <div className={'search-area'}>
                    <button onClick={handleClick}>Back</button>
                    <input onInput={(e) => onSearchByName(e)} type='text' id='search-input' placeholder='search by name'/>
                    <nav className={'categories-nav'}>
                    <ul className={'nav-list'}>
                        <Categories handleCategoryClick={onCategoryClick}/>
                    </ul>
                    </nav>
                </div>
                <SearchResults charactersInfo = {resultCharactersInfo}/> : <></>
            </div>
    )
}