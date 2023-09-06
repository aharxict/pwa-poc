import Header from '../Header/Header';
import styles from './Layout.module.css';
type Props = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};

export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>{children}</div>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}
