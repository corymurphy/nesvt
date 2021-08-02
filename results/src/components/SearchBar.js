const SearchBar = () => {
    return (
        <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Enter Driver Name" aria-label="Search"></input>
            <button class="btn btn-light" type="submit">Go</button>
        </form>
    )
}

export default SearchBar;