import Header from './Header';
import Landing from './Landing';
const Home =()=>{
return (
<div id="home" className="relative h-screen overflow-hidden font-mono bg-white dark:bg-gray-800">
  <Header/>
  <Landing/>
</div>
    )
}

export default Home;