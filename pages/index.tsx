import styles from './index.module.scss';
import TerminalComponent from '../components/terminalComponent/TerminalComponent';

export default function IndexPage() {
  return(
    <main className={styles.main}>
      <TerminalComponent />
    </main>
  );
}
