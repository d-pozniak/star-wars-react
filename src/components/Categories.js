import { WORLD_MAP } from "../constants";

export default function Categories({handleCategoryClick}){

    const categoriesList = WORLD_MAP.categories.map( (category, index) => {
        return (<li className='nav-list--item' key={index}>
            <button onClick={() => handleCategoryClick(category)}>{category.toUpperCase()}</button>
        </li>)
    })
    return categoriesList;
}

