import SectionIntro from './SectionIntro'
import styles from './experience.module.css'
import ListEntry from './ListEntry'

const Experience = () => {
  return (
    <section id="experience">
      <div className={styles.wrapper}>
        <SectionIntro dark={false}>Experience</SectionIntro>
        <div className={styles.sectionContent}>
          <ListEntry
            title={'General Assembly Immersive Bootcamp'}
            date={'Apr 2023 - Present'}
          >
            <li>Full Stack remote immersive bootcamp.</li>
            <li>
              Tech-Stack: Javascript + React + MongoDB + Express.js + Node.JS +
              Python + PostgresQL + Django + MaterialUI
            </li>
          </ListEntry>
          <ListEntry title={'Infinite Recovery'} date={'Apr 2020 - Apr 2023'}>
            <li>
              I have helped over 1000 people on their journey to find permanent
              sobriety, with the goal of giving them my experience, strength,
              and hope through my own journey.
            </li>
          </ListEntry>
        </div>
      </div>
    </section>
  )
}

export default Experience
