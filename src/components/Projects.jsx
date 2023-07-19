import SectionIntro from './SectionIntro'
import styles from './projects.module.css'
import ImgOverlay from './ImgOverlay'
import wordle from '../assets/wordle.png'
import devhive from '../assets/devhive.png'
import zephyr from '../assets/zephyr.png'
import coindash from '../assets/coindash.png'

const Projects = () => {
  return (
    <section id="projects">
      <div className={styles.wrapper}>
        <SectionIntro dark={true}>Projects</SectionIntro>
        <div className={styles.sectionContent}>
          <ImgOverlay
            imgSrc={wordle}
            title={'Wordle Clone'}
            projectLink={'http://willc-wordle-clone.surge.sh/'}
            githubLink={'https://github.com/wcerteza/Wordle-Clone-'}
          >
            Clone of the popular word guessing game Wordle. Implements API of
            random 5 letter words.
          </ImgOverlay>
          <ImgOverlay
            imgSrc={devhive}
            title={'DevHive Tech Blog'}
            projectLink={'https://dev-hive-blog.herokuapp.com/'}
            githubLink={'https://github.com/wcerteza/DevHiveBlog'}
          >
            Blog application built with MongoDB + Express.js + Node.js.
            Implements OAuth and dynamically renders data from Database.
          </ImgOverlay>
          <ImgOverlay
            imgSrc={zephyr}
            title={'Zephyr Forum'}
            projectLink={'https://zephyr1.fly.dev/'}
            githubLink={'https://github.com/wcerteza/Zephyr'}
          >
            Cutting edge alternative to traditional online forums. Powered by
            PostgreSQL + Django + Python. Utilizes HTTP API for random user
            avatars.
          </ImgOverlay>
          <ImgOverlay
            imgSrc={coindash}
            title={'Coin Dash'}
            projectLink={'https://wc-coin-dash.surge.sh/'}
            githubLink={'https://github.com/wcerteza/Zephyr'}
          >
            This project is a MERN stack application with integrated OpenAI API
            for crypto information. It utilizes Chart.js for dynamic chart
            visualization and Coingecko API for cryptocurrency data on both the
            front-end and backend. The result is a powerful web application with
            advanced features, real-time cryptocurrency insights, and seamless
            user experience.
          </ImgOverlay>
        </div>
      </div>
    </section>
  )
}

export default Projects
