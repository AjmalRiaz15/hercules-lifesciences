import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRoutes from './routes/AppRoutes';
import { AppProvider } from './context/AppContext';
import './App.css';

function App() {
  return (
    <AppProvider>
      <div className="appShell">
        <Header />
        <main className="mainContent">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
