'use client'

import { Suspense } from "react"
import Loading from "../../loading"
import {useState} from 'react'
import styles from './styles.module.sass'

const Inscricoes = () => {

  const [isActive_1, setIsActive_1] = useState(false)
  const [isActive_2, setIsActive_2] = useState(false)
  const [isActive_3, setIsActive_3] = useState(false)

  return(
    <Suspense fallback={<Loading />}>
      <div className={styles.container}>
      <form action="#" className={styles.form}>
        <h1>Inscrições</h1>
        <div className={styles.form_row}>
          <div className={styles.input_data}>
            <input type="text" required />
            <div className={styles.underline}></div>
            <label htmlFor="">Nome</label>
          </div>
          <div className={styles.input_data}>
            <input type="text" required />
            <div className={styles.underline}></div>
            <label htmlFor="">Sobrenome</label>
          </div>
        </div>
        <div className={styles.form_row}>
          <div className={styles.input_data}>
            <input type="text" required />
            <div className={styles.underline}></div>
            <label htmlFor="">Email</label>
          </div>

        </div>
        <div className={styles.form_row}>
          <div className={styles.input_data}>
            <input type="text" required />
            <div className={styles.underline}></div>
            <label htmlFor="">Instituição</label>
          </div>
        </div>
        <div className={styles.form_row}>
          <div className={styles.input_data}>
            <input type="text" required />
            <div className={styles.underline}></div>
            <label htmlFor="">CPF</label>
          </div>
        </div>
        <div className={styles.contentSelect}>
          <div className={isActive_1 ? `${styles.dropdown} ${styles.active}` : styles.dropdown} onClick={() => setIsActive_1(!isActive_1)}>
            <input 
              type="text" 
              className={styles.textBox} 
              id="select"
              name="userService"
              placeholder="Forma de participação"
            />
            <div className={styles.option}>
              <div>Ouvinte</div>
              <div>Palestrante</div>
              <div>Mesa Redonda</div>
              <div>Pôster</div>
            </div>
          </div>
          <div className={isActive_2 ? `${styles.dropdown} ${styles.active}` : styles.dropdown} onClick={() => setIsActive_2(!isActive_2)}>
          <input 
            type="text" 
            className={styles.textBox} 
            id="select"
            name="userService"
            placeholder="Tipo de participação"
          />
          <div className={styles.option}>
             <div>Ouvinte</div>
            <div>Palestrante</div>
            <div>Mesa Redonda</div>
            <div>Pôster</div>
          </div>
          </div>
        </div>
        <div className={styles.contentSelect}>
          <div className={isActive_3 ? `${styles.dropdown} ${styles.active}` : styles.dropdown} onClick={() => setIsActive_3(!isActive_3)}>
            <input 
              type="text" 
              className={styles.textBox} 
              id="select"
              name="userService"
              placeholder="Participará de quais atividades"
            />
            <div className={styles.option}>
              <div>Palestra</div>
              <div>Oficina</div>
            </div>
          </div>
        </div>
        <div className={styles.submitBtn}>
          <div className={styles.input_data}>
            <input type="submit" value="Enviar" />
          </div>
        </div>
      </form>
      </div>
    </Suspense>
  )
}

export default Inscricoes
