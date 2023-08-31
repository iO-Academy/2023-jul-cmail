const SearchBar = ({handleInput}) => {
    
    const performSearch = (e) => {
        handleInput(e.target.value)
    }
    return (
        <div>
            <input type="text" className="form-control" id="searchBar" placeholder="search" onInput={performSearch}/>
        </div>
    )
}
export default SearchBar