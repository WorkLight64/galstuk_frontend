import axios from "axios";

function App() {

  axios.get('https://galstuk.herokuapp.com/api/brand/')
       .then(function (response) {
         console.log(response);
       })
       .catch(function (error) {
         console.log(error);
       });

  return (
    <div className="App">
      <div className="header">
          СУПЕР САЙТ
      </div>
    </div>
  );
}

export default App;
