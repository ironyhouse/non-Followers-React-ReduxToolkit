import React, { useState } from 'react';
import Container from '@mui/material/Container';
import NonFollowersList from './features/NonFollowers/NonFollowersList';
import SearchForm from './features/SearchForm/SearchForm';
import './App.css';

const API_URL: string = 'https://jsonplaceholder.typicode.com/users';
type User = { name: string; userURL: string };

function App() {
  const [userURL, setUserURL] = useState('');
  const [nonFollowersList, setNonFollowersList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getNonFollowers = () => {
    debugger;
    let nonFollowersList: User[] = [];
    // invalid userURL
    if (!userURL) {
      return;
    }

    //   // clear followers
    //   setNonFollowersList([]);
    //   setLoading(true);

    //   // request followers
    //   let nonFollowersList: Promise<User[]> = requestFollowers(API_URL);
    //   setNonFollowersList(nonFollowersList);
  };

  const requestFollowers = async (API_URL: string): Promise<User[]> => {
    let nonFollowersList: User[] = [];
    try {
      nonFollowersList = await fetch(API_URL).then((response) => {
        return response.json();
      });
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        console.error(error);
      }
    } finally {
      setLoading(false);
      return nonFollowersList;
    }
  };

  return (
    <div className="App">
      <Container component="main" maxWidth="sm">
        {/* SearchForm */}
        <SearchForm
          isLoading={isLoading}
          setUserURL={setUserURL}
          getNonFollowers={getNonFollowers}
        />
        {/* NonFollowersList */}
        {/* {!!nonFollowersList.length && (
          <NonFollowersList nonFollowersList={nonFollowersList} />
        )} */}
        {/* Error */}
        {/* {!!error && <h1>{error}</h1>} */}
      </Container>
    </div>
  );
}

export default App;
