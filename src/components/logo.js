/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import banner from 'assets/images/EMPOROOMS.png';

export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      <span style={{fontWeight:"bold", fontSize: '20px'}}>EMPOROOMS</span>
      <span style={{marginTop: '-10px', padding: 0}}>hosts</span>
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'flex-start',
    cursor: 'pointer',
    display: 'flex',
    width: 'auto',
    flexDirection: 'column'
  },
  image: {
    height: 'auto',
    width: [100, null, 100],
  },
};
