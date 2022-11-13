import { AuthProvider } from "./Context/AuthProvider";
import Routes from "./Routes";

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
