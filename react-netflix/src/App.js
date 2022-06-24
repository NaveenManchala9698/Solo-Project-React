
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import MyNav from './components/MyNav';
import Movielist1 from './components/Movielist1'
import Movielist2 from './components/Movielist2';
import Movielist3 from './components/Movielist3';


function App() {
  return (
    <div className="App">
      <MyNav title="Netflix" />
      <Movielist1 movieTitle="batman" />
      <Movielist2 movieTitle="superman" />
      <Movielist3 movieTitle="Thor" />

    </div>
  );
}

export default App;
