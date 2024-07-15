export default function SearchInput({onInput, placeholder}) {
    return (
        <form>
            <input onInput={onInput} placeholder={placeholder} type='text' className="SearchInput"></input>
        </form>
    )
}

