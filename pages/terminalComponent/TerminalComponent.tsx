import styles from './TerminalComponent.module.scss';

const TerminalComponent = () => {

  const ascii = `
                   ___                                               
                  /\\_ \\                                              
 __  __  __     __\\//\\ \\     ___    ___     ___ ___      __          
/\\ \\/\\ \\/\\ \\  /'__\`\\\\ \\ \\   /'___\\ / __\`\\ /' __\` __\`\\  /'__\`\\        
\\ \\ \\_/ \\_/ \\/\\  __/ \\_\\ \\_/\\ \\__//\\ \\L\\ \\/\\ \\/\\ \\/\\ \\/\\  __/        
 \\ \\___x___/'\\ \\____\\/\\____\\ \\____\\ \\____/\\ \\_\\ \\_\\ \\_\\ \\____\\       
  \\/__//__/   \\/____/\\/____/\\/____/\\/___/  \\/_/\\/_/\\/_/\\/____/                                                                          
  `

  return(
    <div className={styles.terminal}>
      <pre>
        <code>
          {ascii}
        </code>
      </pre>

      <div className={styles.mainSection}>
        <pre>
          <code>
            hello stranger,
            <br/>
            <br/>
            my name is nikita dvoriadkin. i am full-stack engineer at
            <span> </span>
            <a href="https://www.linkedin.com/company/cisco/mycompany/verification/">@cisco</a>
          </code>
        </pre>
      </div>
    </div>
  )
}

export default TerminalComponent;