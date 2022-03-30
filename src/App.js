import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Home from "./pages/Home";
import User from "./pages/User";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Alert from "./components/layouts/Alert";
import { GithubProvider } from "./context/github/GitHubContext";
import { AlertProvider } from "./context/alert/AlertContext";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
              <Alert/>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="user/:login" element={<User />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
