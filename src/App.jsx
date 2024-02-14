import AuthProvider from "./pages/auth/login/authToken";
import Routes from "./routes/routes";

function App() {

  console.log("App");

  return (
      <AuthProvider>
        <Routes />
      </AuthProvider>
  );
}

export default App;

