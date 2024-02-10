import Link from 'next/link';
import styles from './Header.module.scss';

export const Header = async () => {
  return (
    <header className={styles.Header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/store">Animales</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Link href="/login">Login</Link>
      </div>
    </header>
  );
};
