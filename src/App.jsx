import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
