import LoadingButton from '@mui/lab/LoadingButton';
import Logo from '../app/static/images/Instagram-Logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useRef, useState } from 'react';

type SearchFormParam = {
  isLoading: boolean;
  setUserURL: (value: string) => void;
  getNonFollowers: () => void;
};

export default function SearchForm({
  isLoading,
  setUserURL,
  getNonFollowers,
}: SearchFormParam) {
  const [isUserURLInvalid, setIsUserURLInvalid] = useState(false);
  const inputRef = useRef(null);

  const checkUserURLInput = (inputData: string) => {
    const baseURL = 'https://www.instagram.com/';
    let userName: string = inputData.split('/').pop() || "";
    let regExp =  new RegExp(/^[a-zA-Z0-9_.]{1,30}$/);
    let userURL: URL;

    if (regExp.test(userName) && userName) {
      userURL = new URL(userName, baseURL);
      setUserURL(userURL.href);
      setIsUserURLInvalid(false)
    } else {
      setIsUserURLInvalid(true)
    }

    // debugger;
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <img
        alt="Instagram Logo"
        style={{ width: '100px', height: '100px', margin: '0 auto' }}
        src={Logo}
        loading="lazy"
      />
      <Typography sx={{ mt: 4 }} component="h5" variant="h5">
        Enter userURL:
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        error={isUserURLInvalid}
        variant="outlined"
        disabled={isLoading}
        id="userURL"
        label="@userURL or https://www.instagram.com/userURL/"
        name="userURL"
        ref={inputRef}
        onChange={(event) => checkUserURLInput(event.currentTarget.value)}
      />
      <LoadingButton
        type="submit"
        onClick={getNonFollowers}
        endIcon={<SearchIcon />}
        loading={isLoading}
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
