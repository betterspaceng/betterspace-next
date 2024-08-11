import Logo from "@/public/Logo.svg";
import Linkedin from "@/public/Linkedin.svg";
import Instagram from "@/public/Instagram.svg";
import Twitter from "@/public/Twittter.svg";
import Facebook from "@/public/Facebook.svg";
import Chevron from "@/public/arrow-right.svg";
import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <footer className={styles.StyledFooter}>
      <div className={styles.FooterTopContainer}>
        <div className={styles.FooterTopText}>
          <h5 className={styles.FooterTopTextBold}>
            Your well-being deserves to be a priority.
          </h5>
          <p className={styles.FooterTopTextLight}>
            Be among the first to experience Betterspace
          </p>
        </div>
        <div className={styles.FooterTopField}>
          <input
            className={styles.FooterTopFieldInput}
            placeholder="Email Address"
            type="email"
          />
          <button className={styles.FooterTopFieldButton}>
            Submit
            <Image styles={{ width: "100%" }} src={Chevron} alt="Arrow Right" />
          </button>
        </div>
      </div>
      <div className={styles.FooterBottomContainer}>
        <div className={styles.FooterBottomContent}>
          <Image
            style={{ width: "100%", height: "fit-content" }}
            src={Logo}
            alt="Logo"
            // width="100%"
          />
        </div>
        <div className={styles.FooterBottomBlock}>
          <div className={styles.FooterBottomContent}>
            <Link href="/about" className={styles.FooterBottomLink}>
              About
            </Link>
            <Link href="/pricing" className={styles.FooterBottomLink}>
              Pricing
            </Link>
            <Link href="/contact" className={styles.FooterBottomLink}>
              Contact
            </Link>
            <Link href="/privacy" className={styles.FooterBottomLink}>
              Privacy
            </Link>
            <Link href="/terms" className={styles.FooterBottomLink}>
              Terms
            </Link>
          </div>
          <div className={styles.FooterSocials}>
            <button className={styles.FooterSocialsButton}>
              <Image styles={{ width: "100%" }} src={Linkedin} alt="Linkedin" />
            </button>
            <button className={styles.FooterSocialsButton}>
              <Image
                styles={{ width: "100%" }}
                src={Instagram}
                alt="Instagram"
              />
            </button>
            <button className={styles.FooterSocialsButton}>
              <Image styles={{ width: "100%" }} src={Twitter} alt="Twitter" />
            </button>
            <button className={styles.FooterSocialsButton}>
              <Image styles={{ width: "100%" }} src={Facebook} alt="Facebook" />
            </button>
          </div>
        </div>
        <div className={styles.FooterBottomBlock}>
          <p className={styles.FooterBottomBlockText}>
            © 2024 betterspace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
