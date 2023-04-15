import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import NavBar from './components/NavBar';
import AppRouter from './components/AppRouter';
import { Container } from '@mui/material';

// ! fix setup tests / import jest-dom / jest config
// TODO: navigate to second page after getting data
// TODO: inst API
// TODO: authorization
// TODO: response non followers

function App() {
  return (
    <div className="App">
      <Container component="main" maxWidth="sm">
        <NavBar />
        <AppRouter />
        {/* Error */}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Container>
    </div>
  );
}

export default App;
