import LoadingButton from '@mui/lab/LoadingButton';
import Logo from '../static/images/Instagram-Logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useDispatch, useSelector } from 'react-redux';
import {
  setUserURL,
  toggleLoading,
  toggleUserURLValidation,
} from '../redux/searchForm-slice';
import { setNonFollowersList } from '../redux/nonFollowers-slice';

const API_URL: string = 'https://jsonplaceholder.typicode.com/users';

export default function SearchForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: any) => state.search.isLoading);
  const isUserURLValid = useSelector(
    (state: any) => state.search.isUserURLValid
  );

  const checkUsernameInput = (inputData: string) => {
    let username: string = inputData;
    let regExp = new RegExp(/^[a-zA-Z0-9_.]{1,30}$/);

    if (regExp.test(username) && username) {
      dispatch(setUserURL(username));
      dispatch(toggleUserURLValidation(true));
    } else {
      dispatch(toggleUserURLValidation(false));
    }
  };

  const requestNonFollowers = () => {
    dispatch(setNonFollowersList([]));
    dispatch(toggleLoading(true));

    try {
      fetch(API_URL)
        .then((response) => {
          debugger;
          return response.json();
        })
        .then((nonFollowers) => {
          dispatch(setNonFollowersList(nonFollowers));
        });
    } catch (error) {
      if (error instanceof Error) {
        // setError(error.message);
        console.error(error);
      }
    } finally {
      dispatch(toggleLoading(false));
    }
  };

  return (
    <form
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '10%',
      }}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <img
        alt="Instagram Logo"
        style={{ width: '50%', height: '50%' }}
        src={Logo}
        loading="lazy"
      />
      <Typography component="h5" variant="h5">
        Enter username:
      </Typography>
      <TextField
        margin="normal"
        fullWidth
        error={!isUserURLValid}
        variant="outlined"
        disabled={isLoading}
        id="username"
        label="For example: irony.house"
        name="username"
        onChange={(event) => checkUsernameInput(event.currentTarget.value)}
      />
      <LoadingButton
        type="submit"
        onClick={requestNonFollowers}
        endIcon={<SearchIcon />}
        loading={isLoading}
        disabled={!isUserURLValid}
        loadingPosition="end"
        color="secondary"
        variant="contained"
        sx={{ mt: 4 }}
      >
        Show Non-Followers
      </LoadingButton>
    </form>
  );
}
