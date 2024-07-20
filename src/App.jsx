import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import Navbar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";
import theme from "./utils/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />

      <Home />

      <Footer />
    </ChakraProvider>
  );
}

export default App;
