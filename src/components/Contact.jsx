import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Get in touch</p>
        <h2 className={styles.heading}>Let's work together.</h2>
        <p className={styles.sub}>
          I'm currently looking for new opportunities. Whether you have a question
          or just want to say hi, my inbox is always open.
        </p>
        <a href="mailto:espendr@outlook.com" className={styles.btn}>Say hello</a>
      </div>
    </section>
  )
}
