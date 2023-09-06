import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/static/'>Static</Link>
        </li>
        <li>
          <Link href='/user/apiUser'>Next Static Api User</Link>
        </li>
        <li>
          <Link href='/user/7'>Next Dynamic Api User #7</Link>
        </li>
        <li>
          <Link href='/user/clientUser'>JSON Pl Client User #9</Link>
        </li>
        <li>
          <Link href='/user/clientAjaxUser'>JSON Pl Client Ajax User #1</Link>
        </li>
      </ul>
    </header>
  );
}
