
import './App.css';

const App = () => {
  const search =(q) => {
    console.log({q})
  }
  return (
    <div className="App">
      <header className="App-header">
       <h1>HERSYA THE MOVIE</h1>
       <input placeholder="cari file kesayangan..." 
       className="Movie-search"
       onChange={({target}) => search(target.value)}
       />
       <div className="Movie-container">
        <div className="Movie-wrapper">
          <div className="Movie-title">CONTOH PERTAMA</div>
          <img className="Movie-image" />
          <div className="Movie-date">11-09-2005</div>
          <div className="Movie-rate">9.0</div>
        </div>
       </div>
      </header>
    </div>
  );
}

export default App;
