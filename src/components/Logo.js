
import { Link as RouterLink } from 'react-router-dom';
import LogoM from '../logo.png'
// ----------------------------------------------------------------------


export default function Logo() {
  // OR
  // const logo = <Box component="img" src="/static/logo.svg" sx={{ width: 40, height: 40, ...sx }} />

  const logo = (
    <div style={{marginBottom: "20px"}}>
      <img src = {LogoM} alt="" style={{height:"80px", width:"80px"}} />
    </div>
  );

  return <RouterLink to="/">{logo}</RouterLink>;
}
