import Link from 'next/link';
import s from './Header.module.scss';

export const Header = async () => {
  return (
    <header className={s.header}>
      <nav>
        <ul className={s.list}>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/animals">Animales</Link>
          </li>
        </ul>
      </nav>
      <div className={s.user}>
        <Link className={s.login} href="/login">
          Iniciar Sesión
        </Link>
        <Link className={s.signup} href="/signup">
          Registrarse
        </Link>
      </div>
    </header>
  );
};
