import { BrowserRouter } from "react-router-dom";
import "./App.less";
import ChangePassword from "./components/Freelancer/AccountSettings/ChangePassword";
import AppLayout from "./Layout";
import RoutePaths from "./router";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppLayout>
          {<RoutePaths />}    
        </AppLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
