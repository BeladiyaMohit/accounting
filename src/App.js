import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Routers } from "./routes";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </Provider>
  );
}

export default App;