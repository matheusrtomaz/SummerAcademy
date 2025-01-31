import styles from "./Footer.module.css";
import { Facebook, Globe, Copyright } from "lucide-react";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.content}>
                <p className={styles.text}>
                    <Copyright className={styles.copyright} /> 2025 Accenture.
                    All rights reserved.
                </p>
                <div className={styles.iconsContainer}>
                    <Facebook className={styles.iconss} />
                    <Globe className={styles.iconss} />
                </div>
            </div>
        </div>
    );
}
