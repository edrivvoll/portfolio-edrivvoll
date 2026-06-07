import ProjectCard from './ProjectCard'
import projects from '../data/projects'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <p className={styles.eyebrow}>Selected work</p>
        <h2 className={styles.heading}>Projects</h2>
        <div className={styles.grid}>
          {projects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
