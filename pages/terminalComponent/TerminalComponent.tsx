import styles from './TerminalComponent.module.scss';
import {handWaveAscii, welcomeAscii} from './ascii';

const TerminalComponent = () => {

  const loveItems = [
    {name: "js/ts", id: 0},
    {name: "react", id: 1},
    {name: "java", id: 2},
    {name: "spring", id: 3},
  ];

  return (
    <div className={styles.terminal}>
      <pre>
        <code>
          <div className={styles.welcomeAscii}>{welcomeAscii}</div>
          <div className={styles.handWaveAscii}>{handWaveAscii}</div>
        </code>
      </pre>
      <div className={styles.mainSection}>
        <p className={styles.greetings}>
          hello stranger,
          <br/>
          <br/>
          my name is nikita dvoriadkin. i am full-stack engineer&nbsp;
          <a href="https://www.linkedin.com/company/cisco/">@cisco</a>
        </p>
        <p>
          I love:&nbsp;
          {loveItems.map((item) =>
            <span key={ item.id }>
              <span className={styles.loveItem}>
                { item.name }
              </span>
              { loveItems.length - 1 !== item.id && ", " }
            </span>
          )}
        </p>
        <p>
          <a href="https://twitter.com/nick_dee11">twitter</a>&nbsp;|&nbsp;
          <a href="https://t.me/nick_dee1">telegram</a>&nbsp;|&nbsp;
          <a href="https://www.linkedin.com/in/nickdee1/">linkedIn</a>
        </p>
      </div>
    </div>
  )
}

export default TerminalComponent;
