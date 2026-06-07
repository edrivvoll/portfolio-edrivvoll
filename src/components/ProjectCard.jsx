import styles from './ProjectCard.module.css'

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

export default function ProjectCard({ tag, title, description, screenshot, github, live }) {
  return (
    <article className={styles.card}>
      <div className={styles.imgWrap}>
        {screenshot
          ? <img src={screenshot} alt={`${title} screenshot`} />
          : <div className={styles.placeholder}><span>Screenshot coming soon</span></div>
        }
        <div className={styles.overlay} />
      </div>
      <div className={styles.body}>
        <span className={styles.tag}>{tag}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <div className={styles.links}>
          <a href={github} className={styles.link} target="_blank" rel="noopener noreferrer">
            GitHub <ExternalIcon />
          </a>
          {live && (
            <a href={live} className={`${styles.link} ${styles.linkLive}`} target="_blank" rel="noopener noreferrer">
              Live site <ExternalIcon />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
