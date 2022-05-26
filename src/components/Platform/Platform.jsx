import Movie from "../Movie/Movie";

const Platform = () => {
  return (
    <div className="titleList">
      <div className="title">
        <h1>Netflix</h1>
        <div className="titles-wrapper">
          <Movie />
          <Movie />
          <Movie />
        </div>
      </div>
    </div>
  );
};

export default Platform;
