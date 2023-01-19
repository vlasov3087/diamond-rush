import styles from "./discordButton.module.scss";
import Image from "next/image";

const DiscordButton = () => {
  return (
    <div className={styles.buttonWrapper}>
      <div className={styles.spinner}>
        <div className={styles.spinner1}></div>
      </div>
      <a
        href="https://discord.gg/rGJBwQfkHe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          width={32}
          height={32}
          className={styles.logo}
          src="/images/discord.svg"
          alt="logo"
        />
      </a>
    </div>
  );
};

export default DiscordButton;
