import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import NonFollowersListItem from './NonFollowersListItem';
import User from '../redux/interfaces';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

function NonFollowersList() {
  const nonFollowersList = useSelector((state: RootState) => {
    return state.followers.nonFollowersList;
  });

  return (
    <Box
      sx={{
        mt: 8,
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <Typography
        sx={{ mt: 2, mb: 2, ml: 'auto', mr: 'auto' }}
        component="h5"
        variant="h5"
      >
        Non-Followers: {nonFollowersList.length}
      </Typography>
      <List sx={{ width: '100%' }}>
        {nonFollowersList.map((nonFollowersListItem: User) => (
          <NonFollowersListItem
            key={nonFollowersListItem.id}
            {...nonFollowersListItem}
          />
        ))}
      </List>
    </Box>
  );
}

export default NonFollowersList;
