import "./App.css";
import Routes from "./Routes";
import store from "./Redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
