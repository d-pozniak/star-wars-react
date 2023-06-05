export default function SearchResults({ charactersInfo }){
    const characters = (!charactersInfo.results) ? null
        : charactersInfo.results.map( character => {
        return <li key={character.url}>
            <h2>{character.name}</h2>
            <p>{character.skin_color}, {character.mass}kg</p>
        </li>
    });
    return (
        <div className='result-field'>
            <ol>{characters}</ol>
        </div>
    )
}
