import SectionIntro from './SectionIntro'
import styles from './aboutme.module.css'
const Aboutme = () => {
  return (
    <section id="aboutme" className="aboutme">
      <div className="about-wrapper">
        <SectionIntro>ABOUT ME</SectionIntro>
        <div className="section-content">
          <p className="about-p">
            With a background in the rehabilitation field, I developed a passion
            for helping others, displaying strong leadership qualities, and
            fostering effective communication with individuals from diverse
            backgrounds and ethnicities. Transitioning into software engineering
            through a bootcamp, I now apply my solutions-driven mindset to
            create innovative <strong>full-stack</strong> solutions that align
            with my newfound passion.
          </p>
          <p className="about-p">
            Besides coding, you can often find me spending quality time with my
            furry companion, my adorable dog! Training my dog has taught me so
            much about <strong>patience</strong> and{' '}
            <strong>consistency</strong>, skills that I bring to my work as
            well.
          </p>
          <p className="about-p">
            The journey from rehabilitation to software engineering might seem
            like a big leap, but it was fueled by my{' '}
            <strong>unwavering passion</strong> for coding. I attended a
            bootcamp, and it was the best decision I ever made! I enjoy bringing
            my diverse skill set and excellent communication skills to every
            project, making sure we achieve our goals together.
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
