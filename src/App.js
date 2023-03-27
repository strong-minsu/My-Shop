import "./App.css";
import Footer from "./components/Footer";
import Goods from "./components/Goods";
import Header from "./components/Header";
import Orders from "./components/Orders";
import AppStateProvider from "./contexts/AppStateProvider";

function App() {
  return (
    <AppStateProvider>
      <Header />
      <div className="container">
        <Goods />
        <Orders />
      </div>
      <Footer />
    </AppStateProvider>
  );
}

export default App;
