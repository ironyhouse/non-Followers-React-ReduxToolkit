import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import logo from '../static/images/Instagram-Logo.svg';

function NonFollowersListItem({ name, username }: any) {
  return (
    <ListItem>
      <img
        alt="Instagram Logo"
        style={{
          height: '50px',
          width: '50px',
          border: '2px solid #CA2168',
          borderRadius: '50%',
          marginRight: '10px',
        }}
        src={logo}
        loading="lazy"
      />
      <ListItemText primary={username} secondary={name} />
    </ListItem>
  );
}

export default NonFollowersListItem;
