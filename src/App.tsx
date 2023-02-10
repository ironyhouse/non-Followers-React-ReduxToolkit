import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import NonFollowersList from './components/NonFollowersList';
import SearchForm from './components/SearchForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

// FIXME: nonFollowersList: Promise<User[]>
// FIXME: all any
// TODO: api URL
// TODO: setError ? allAppStateModel

function App() {
  const isNonFollowersListEmpty = useSelector((state: any) => {
    return !state.followers.nonFollowersList;
  });

  return (
    <div className="App">
      <Container component="main" maxWidth="sm">
        <SearchForm />
        {isNonFollowersListEmpty && <NonFollowersList />}
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
