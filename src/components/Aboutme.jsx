import SectionIntro from './SectionIntro'
import styles from './aboutme.module.css'
const Aboutme = () => {
  return (
    <section id="aboutme" className="aboutme">
      <div className="about-wrapper">
        <SectionIntro>ABOUT ME</SectionIntro>
        <div className="section-content">
          <p className="about-p">
            I am a solutions driven <strong>Full Stack</strong> developer
          </p>
          <p className="about-p">
            I originally worked in the rehabilitation industry helping others
            recover but wanted to pursue my passion software development
          </p>
          <p className="about-p">
            I love to create, grow, and continue working on myself
          </p>
          <p className="about-p">
            Check out my projects below to see what I can do!
          </p>
        </div>
        <div className="about-icons">
          <a href="https://github.com/wcerteza" className="anchor">
            <i className="fa-brands fa-github icons"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/will-certeza/"
            className="anchor"
          >
            <i className="fa-brands fa-linkedin icons"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Aboutme
