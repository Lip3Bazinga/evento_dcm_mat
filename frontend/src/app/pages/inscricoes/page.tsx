import { Suspense } from "react"
import Loading from "../../loading"
import styles from './styles.module.sass'
const Inscricoes = () => {
  return(
    <Suspense fallback={<Loading />}>
      <div className={styles.container}>
      <form action="#" className={styles.form}>
        <h1>Inscrições</h1>
        <div className={styles.form_row}>
          <div className={styles.input_data}>
            <input type="text" required />
            <div className={styles.underline}></div>
            <label htmlFor="">First Name</label>
          </div>
          <div className={styles.input_data}>
            <input type="text" required />
            <div className={styles.underline}></div>
            <label htmlFor="">Last Name</label>
          </div>
        </div>
        <div className={styles.form_row}>
          <div className={styles.input_data}>
            <input type="text" required />
            <div className={styles.underline}></div>
            <label htmlFor="">Email Address</label>
          </div>
          <div className={styles.input_data}>
            <input type="text" required />
            <div className={styles.underline}></div>
            <label htmlFor="">Website Name</label>
          </div>
        </div>
        <div className={styles.submitBtn}>
          <div className={styles.input_data}>
            <input type="submit" value="submit" />
          </div>
        </div>
      </form>
      </div>
    </Suspense>
  )
}

export default Inscricoes
