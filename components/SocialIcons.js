import styles from "../styles/SocialIcons.module.css";

import GitHubLogo from "./SVGs/GitHubLogo";
import LinkedInLogo from "./SVGs/LinkedInLogo";
import InstagramLogo from "./SVGs/InstagramLogo";

const SocialIcons = ({ direction = "row" }) => {
  return (
    <div className={`${styles.social_icons} ${direction === "row" ? styles.row : styles.column}`}>
      <a href="https://github.com/ChristianAnagnostou" target="_blank">
        <GitHubLogo />
      </a>
      <a href="https://www.linkedin.com/in/ChristianAnagnostou" target="_blank">
        <LinkedInLogo />
      </a>
      <a href="https://www.instagram.com/christian.anagnostou/" target="_blank">
        <InstagramLogo />
      </a>
    </div>
  );
};

export default SocialIcons;
