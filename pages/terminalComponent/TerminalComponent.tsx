import styles from './TerminalComponent.module.scss';

const TerminalComponent = () => {

  const ascii = `
                   ___                                               
                  /\\_ \\                                              
 __  __  __     __\\//\\ \\     ___    ___     ___ ___      __          
/\\ \\/\\ \\/\\ \\  /'__\`\\\\ \\ \\   /'___\\ / __\`\\ /' __\` __\`\\  /'__\`\\        
\\ \\ \\_/ \\_/ \\/\\  __/ \\_\\ \\_/\\ \\__//\\ \\_\\ \\/\\ \\/\\ \\/\\ \\/\\  __/        
 \\ \\___x___/'\\ \\____\\/\\____\\ \\____\\ \\____/\\ \\_\\ \\_\\ \\_\\ \\____\\       
  \\/__//__/   \\/____/\\/____/\\/____/\\/___/  \\/_/\\/_/\\/_/\\/____/                                                                          
  `

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
          {ascii}
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