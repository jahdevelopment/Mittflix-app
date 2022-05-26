import Header from "../Header/Header";
import Movie from "../Movie/Movie";

const SearchPage = () => {
  return ( 
    <div id="root">
      <Header />
      <div className="titleList">
        <div className="title">
          <h1>Results</h1>
          <div className="titles-wrapper">
            <Movie />           
            <Movie />           
            <Movie />           
            <Movie />           
            <Movie />           
            <Movie />           
            <Movie />           
            <Movie />           
            <Movie />           
            <Movie />           
            <Movie />           
            <Movie />           
            <Movie />           
            <Movie />           
            <Movie />           
            <Movie />           
            <Movie />           
            <Movie />           
            <Movie />           
            <Movie />           
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default SearchPage;