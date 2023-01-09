import Hero from "./sections/Hero"
import Procedure from "./sections/Procedure"
import Wallet from "./sections/Wallet";
import Collection from "./sections/Collection";
import Trending from "./sections/Trending"
import Influencers from "./sections/Influencers";
import Search from "./sections/Search";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="container">
      <Hero />
      <Wallet />
      <Procedure />
      <Collection />
      <Trending />
      <Influencers />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
