import EffectSoundContainer from "./components/effectSoundContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TrackContainer from "./components/trackContainer";

function App() {
  return (
    <div className=" text-white px-4 lg:px-12">
      <Header />
      <TrackContainer />
      <EffectSoundContainer />
      <Footer />
    </div>
  );
}

export default App;
