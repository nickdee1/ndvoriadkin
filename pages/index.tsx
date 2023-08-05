import styles from './index.module.scss';
import TerminalComponent from './terminalComponent/TerminalComponent';

export default function IndexPage() {
  return(
    <main className={styles.main}>
      <TerminalComponent />
    </main>
  );
}