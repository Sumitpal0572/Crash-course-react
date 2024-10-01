import { Provider } from "react-redux";
import "./App.css";
import CoffeeList from "./components/coffeeList";
import store from "./redux/store";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <CoffeeList />
      </ChakraProvider>
    </Provider>
  );
};

export default App;
