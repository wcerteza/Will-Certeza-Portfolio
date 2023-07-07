import styles from './sectionintro.module.css'
const SectionIntro = (props) => {
  const { children, dark } = props
  return (
    <div className={styles.headerText}>
      <div className={dark ? styles.lineDark : styles.line}></div>
      <h1 className={dark ? styles.textDark : styles.text}>{children}</h1>
      <div className={dark ? styles.lineDark : styles.line}></div>
    </div>
  )
}
export default SectionIntro
