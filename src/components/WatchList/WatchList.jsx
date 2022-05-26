import Header from "../Header/Header";
import Movie from "../Movie/Movie";

const WatchList = () => {
  return ( 
    <div id="root">
      <Header />
      <div className="titleList">
        <div className="title">
          <h1>My Watch List</h1>
          <div className="titles-wrapper">
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
 
export default WatchList;