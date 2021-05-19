import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import CreatePost from "./components/CreatePost";
import AllPosts from "./components/AllPosts";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CreatePost />
        <AllPosts />
      </Provider>
    </div>
  );
}

export default App;
