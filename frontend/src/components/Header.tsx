export const Header = () => {
    return (
        <header className="bg-black flex justify-between py-2 px-4 text-base text-white items-center">
            <h1 className="text-xl">React MySQL</h1>
            <a href="/new" className="text-black"><button>Create task</button></a>
        </header>
    )
}