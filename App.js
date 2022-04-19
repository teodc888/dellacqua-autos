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

//native
import { ScrollView, SafeAreaView, LogBox } from "react-native";

LogBox.ignoreLogs(["Setting a timer for a long period of time"]);

export default function App() {
  return (
    <>
      <PaperProvider>
        <Provider store={store}>
          <SafeAreaView>
            <ScrollView>
              <NativeRouter>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
              </NativeRouter>
            </ScrollView>
          </SafeAreaView>
        </Provider>
      </PaperProvider>
    </>
  );
}
