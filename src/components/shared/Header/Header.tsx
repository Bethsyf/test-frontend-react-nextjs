'use client';
import Link from 'next/link';
import s from './Header.module.scss';
import { logout } from 'app/services/firebase/methods';

export const Header = async () => {
  const handleLogout = async () => {
    try {
      await logout();
      console.log('sesion cerrada');
    } catch (error) {
      console.log(error);
    }
  };
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
        <button onClick={handleLogout}>Cerrar Sesión</button>
        <Link className={s.signup} href="/signup">
          Registrarse
        </Link>
      </div>
    </header>
  );
};
