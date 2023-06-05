export default function StartView({handleClick, theme}){
    return (
        <>
            <h1>Welcome to the amazing world of {theme}!</h1>
            <button onClick={handleClick}>Start Browsing</button>
        </>
    )
}
