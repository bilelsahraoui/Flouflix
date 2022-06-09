import './assets/app.scss';
import Banner from './Banner';
import Footer from './Footer';
import Navbar from './Navbar';
import Row from './Row';
import requests from './assets/axios';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row 
        title="Programmes originaux Flouflix"
        url={requests.fetchNetflixOriginals}
        isPoster = {true}
      />
      <Row 
        title="Mieux notés"
        url={requests.fetchTopRated}
      />
      <Row 
        title="Films en tendance"
        url={requests.fetchHorrorMovies}
      />
      <Footer />
    </div>
  )
}

export default App
