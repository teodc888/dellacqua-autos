//Paper
import { Provider as PaperProvider } from "react-native-paper";

//components
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";

//redux
import { Provider } from "react-redux";
import store from "./redux/store/store";

//Route
import { NativeRouter, Route, Routes } from "react-router-native";

export default function App() {
  return (
    <>
      <PaperProvider>
        <Provider store={store}>
          <NativeRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </NativeRouter>
        </Provider>
      </PaperProvider>
    </>
  );
}
