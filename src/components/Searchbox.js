
const SearchBox = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <form onSubmit={(e) => { props.submitHandler(e) }}>
                        <input type="text" name="searchValue" value={props.searchValue} onChange={(e) => props.changeHandler(e.target.value)}></input>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchBox;