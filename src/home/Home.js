import Header from './Header';
import Landing from './Landing';
const Home = () => {
  return (
      <div id="home" className="relative h-screen overflow-hidden bg-red-50 dark:bg-gray-800">
          <Header style={{ marginTop: '0px' }}/>
          <Landing/>
      </div>
  )
}


export default Home;