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
            date={'Apr 2023 - July 2023'}
          >
            <li>Full Stack remote immersive bootcamp.</li>
            <li>
              Tech-Stack: Javascript + React + MongoDB + Express.js + Node.JS +
              Python + PostgresQL + Django + MaterialUI
            </li>
            <li>
              Front-End: : Proficient in HTML5, CSS3, JavaScript, and modern
              frameworks such as React, allowing me to craft complex and
              visually appealing user-friendly interfaces.
            </li>
            <li>
              Back-end: Experienced in server-side programming with Node.js and
              Python, utilizing frameworks like Express and Django to build
              scalable and efficient APIs.
            </li>
            <li>
              Databases: Skilled in working with both SQL and NoSQL databases,
              including MySQL, MongoDB, ensuring effective data storage and
              retrieval.
            </li>
            <li>
              Version Control: Proficient with Git and GitHub, enabling seamless
              collaboration and efficient code management.
            </li>
          </ListEntry>
          <ListEntry title={'Infinite Recovery'} date={'Apr 2020 - Apr 2023'}>
            <li>
              I have helped over 1000 people on their journey to find permanent
              sobriety, with the goal of giving them my experience, strength,
              and hope through my own journey.
            </li>
            <li>
              <strong>Effective Communication:</strong> As a support figure for
              individuals from diverse backgrounds, I honed my communication
              abilities to convey complex concepts in a clear and relatable
              manner. This skill translates well into software development,
              where clear communication with team members and stakeholders is
              crucial for successful project execution.
            </li>
            <li>
              <strong>Leadership and Mentorship:</strong> Being a source of
              experience, strength, and hope for others showcases my leadership
              and mentorship capabilities. I can apply these skills in guiding
              junior developers, fostering a positive team culture, and
              promoting continuous learning within the software development
              environment.
            </li>
            <li>
              <strong>Problem-Solving and Critical Thinking:</strong> Guiding
              people through their sobriety journeys involved navigating various
              challenges and obstacles. This experience cultivated my
              problem-solving and critical thinking skills, which are essential
              for identifying and resolving issues in software development, be
              it debugging code or devising efficient algorithms.
            </li>
          </ListEntry>
        </div>
      </div>
    </section>
  )
}

export default Experience
