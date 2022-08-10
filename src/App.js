import Header from "./Components/Header/header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Search from "./Components/Search/search";
import Movies from "./Components/DisplayMovies/Movies";
import MoviesDetails from "./Components/MovieDetails/MoviesDetails"

function App() {
  return (
  
     <>
      <Header/>
      <br/>
      <Search/>
     <Router>
        
           <Switch>
           <Route path="/" exact component={Movies}/>
          <Route path="/Details/:id" exact component={MoviesDetails} />
           </Switch>
      
     </Router>
    </>
  );
}

export default App;
