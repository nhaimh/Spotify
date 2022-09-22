import "./App.css";
import Detailsong from "./component/DetailSong";
import ListSong from "./component/ListSong";
import NavBar from "./component/NavBar";
import Playing from "./component/Playing";
import { Provider } from "react-redux";
import { store } from "./redux/store";
function App() {
  return (
    <div className="App ">
      <Provider store={store} >
        <NavBar />
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
          {/* span 1 */}
          <Detailsong />
          {/* span 2 */}

          <ListSong />
        </div>
        <Playing />
      </Provider>
    </div>
  );
}

export default App;
