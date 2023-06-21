
const SearchBox = (props) => {
    return (

        <form onSubmit={(e) => { props.submitHandler(e) }}>
            <input type="text" name="searchValue" value={props.searchValue} onChange={(e) => props.changeHandler(e.target.value)}></input>
        </form>

    )
}

export default SearchBox;