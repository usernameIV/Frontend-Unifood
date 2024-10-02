import search_icon from '../../assets/images/search_icon.png'

export const SearchBox = () => {
    return(
        <div className="search-box">
            <input type="text" placeholder="Search"/>
            <img src={search_icon} alt="" />
        </div>
    )
}