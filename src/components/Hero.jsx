import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="about">
      <div className={styles.content}>
        <p className={styles.eyebrow}>Frontend Developer</p>
        <h1 className={styles.heading}>
          Building beautiful<br />
          <span className={styles.highlight}>web experiences.</span>
        </h1>
        <p className={styles.sub}>
          I just completed a 4-year part-time education in frontend development.
          I love crafting interfaces that are clean, accessible, and a joy to use.
        </p>
        <a href="#projects" className={styles.btn}>View my work</a>
      </div>
      <div className={styles.decoration} aria-hidden="true">
        <div className={styles.blob1} />
        <div className={styles.blob2} />
      </div>
    </section>
  )
}
