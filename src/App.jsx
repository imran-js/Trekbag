import BackgroundHeading from "./components/BckgHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/Itemlist";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList />
        <Sidebar />
      </main>

      <Footer />
    </>
  );
}

export default App;
