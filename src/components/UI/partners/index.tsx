import styles from './styles.module.sass'
import sbm_logo from '@/../public/assets/images/sbm_logo.png'
import sbem_logo from '@/../public/assets/images/sbem_logo.png'
import usp_logo from '@/../public/assets/images/usp_logo.gif'
import Image from 'next/image'

const partners = () => {
  return(
    <section className={styles.partners}>
      <hr></hr>
      <div>
        <h3>Realização</h3>
        <Image src={sbm_logo} alt="logo 1" />
      </div>
      <hr></hr>
      <div>
        <h3>Organização</h3>
        <Image src={sbem_logo} alt="logo 2" />
      </div>
      <hr></hr>
      <div>
        <h3>Apoio</h3>
        <Image src={usp_logo} alt="logo 3" />
      </div>
    </section>
  )
} 
export default partners