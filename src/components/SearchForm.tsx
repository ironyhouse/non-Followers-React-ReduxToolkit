import LoadingButton from '@mui/lab/LoadingButton';
import Logo from '../static/images/Instagram-Logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername } from '../redux/user-slice';
import { fetchUserById } from '../redux/nonFollowers-slice';
import { AppDispatch } from '../redux/store';
import { RootState } from '../redux/store';

export default function SearchForm() {
  const dispatch = useDispatch<AppDispatch>();
  const [isUserURLValid, setUserURLValid] = useState(true);
  const isLoading = useSelector((state: RootState) => {
    return state.followers.isLoading;
  });
  const username = useSelector((state: RootState) => {
    return state.user.username;
  });

  const checkUsernameInput = (inputData: string) => {
    let username: string = inputData;
    let regExp = new RegExp(/^[a-zA-Z0-9_.]{1,30}$/);

    if (regExp.test(username)) {
      dispatch(setUsername(username));
      setUserURLValid(true);
    } else {
      setUserURLValid(false);
    }
  };

  const requestNonFollowers = () => {
    const baseURL = 'https://www.instagram.com/';
    const userURL: URL = new URL(username, baseURL);

    dispatch(fetchUserById(userURL));
  };

  return (
    <form
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
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
        onChange={(event) => checkUsernameInput(event.target.value)}
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
