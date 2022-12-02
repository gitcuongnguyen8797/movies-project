import React, { useEffect } from "react";
import { connect } from "react-redux";
import PosterCard from "../component/Card/PosterCard";
import Modal from "../component/Modal/Modal";
import { MovieEnum, PosterMovie } from "../service/movie/type";
import { AppDispatch, AppState } from "../service/store";

export interface PropsHomeScreen {
  fetchListMovie: any,
  movieList?: PosterMovie[]
}

const HomeScreen: React.FC<PropsHomeScreen> = ({fetchListMovie, movieList = [], ...props}) => {
  
  useEffect(() => {
    fetchListMovie(1)
  }, [])
 
  return (
    <div className="container-fluid">
      <div className="row">
        {/* <div className="col-2"><LeftBar /></div> */}
        <div className="col-12">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link text-white active" href="#">Home</a>
              </div>
              <form className="d-flex">
                <input type="text" className="form-control me-2" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
            </div>
            
          </nav>
          <div className="container-fluid">
            <div className="row">
              <h1>All Movies</h1>
             
            </div>
            <div className="row">
              {movieList.map((item, index ) => 
                ( <div className="col-sm-12 col-md-6 col-xl-3" key={index}>
                    <PosterCard 
                      id={item.id} 
                      movieName={item.original_title} 
                      describe={item.overview}
                      rate={item.vote_average}
                      image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}  />
                  </div>)
              )}
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={false}  />
    </div>
  )
}

const mapStateToProps = ({movieReducer}: AppState) => movieReducer
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  fetchListMovie: (listId: number = 1) => dispatch({type: MovieEnum.FETCH_LIST_MOVIE, props: {movieListId: listId}}),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)