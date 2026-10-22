import Image from "next/image";
import { Barlow_Condensed } from "next/font/google";
import styles from "./home-hero.module.css";
import { ContactLinks } from "@/components/contact-links";
import { profile } from "@/data/site";

const heroFont = Barlow_Condensed({
  weight: "800",
  subsets: ["latin"],
  display: "swap",
  variable: "--hero-heading-font",
  fallback: ["Impact", "Arial Narrow", "Helvetica Neue", "Arial", "sans-serif"],
  adjustFontFallback: false,
});

export default function HomePage() {
  return (
    <>
      <section className={heroFont.variable + " " + styles.hero} aria-labelledby="home-introduction">
        <div className={styles.topline}>
          <p className={styles.descriptor}>{profile.department} <span aria-hidden="true">/</span> {profile.university}</p>
          <p className={styles.edition}>Personal research portfolio</p>
        </div>
        <div className={styles.composition}>
          <div className={styles.copy}>
            <h1 id="home-introduction" className={styles.name}>
              <span>HAYEON</span>{" "}<span>YUN</span>
            </h1>
            <div className={styles.intro}>
              <p className={styles.tagline}>
                <span>Curious about the science.</span>
                <span>Hands-on with the engineering.</span>
              </p>
              <p className={styles.researchDescriptor}>Bioelectronics · Biomedical Devices · Research</p>
              <ContactLinks showLabels />
            </div>
          </div>
          <figure className={styles.portrait}>
            <div className={styles.portraitMount}>
              <div className={styles.portraitFrame}>
                <Image
                  src={profile.photo}
                  alt={profile.photoAlt}
                  fill
                  sizes="(max-width: 359px) calc(100vw - 40px), (max-width: 767px) 320px, (max-width: 1000px) 280px, 320px"
                  quality={85}
                  loading="eager"
                  className={styles.portraitImage}
                />
              </div>
            </div>
          </figure>
        </div>
      </section>

      <div className={"home-notes " + styles.notes}>
        <section className={styles.aboutPanel} aria-labelledby="about-me">
          <h2 id="about-me" className="subsection-title">About Me</h2>
          <div className="home-about">
            {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <h3 className="mini-heading">Research Interests</h3>
          <ul className="keyword-list">
            {profile.interests.map((interest) => <li key={interest}>{interest}</li>)}
          </ul>
        </section>
        <section className={"education-section " + styles.educationPanel} aria-labelledby="education">
          <h2 id="education" className="subsection-title">Education</h2>
          <ol className="education-list">
            {profile.education.map((entry) => (
              <li key={entry.institution}>
                <h3>{entry.institution}</h3>
                <p>{entry.degree}</p>
                <p className="education-date">{entry.dates}</p>
                <p className="education-gpa">GPA <span>{entry.gpa}</span></p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </>
  );
}
