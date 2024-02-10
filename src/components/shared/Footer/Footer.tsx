import s from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <p>Animals World © {new Date().getFullYear()}</p>
    </footer>
  );
};
