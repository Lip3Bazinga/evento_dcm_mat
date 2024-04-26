import styles from "./styles.module.sass"

interface ModalProps {
  isOpen : boolean
  setIsOpen : Function
  children : any
}

export default function Modal({isOpen, setIsOpen, children} : ModalProps){
  if(!isOpen) return null
  
  return(
    <div className={styles.modalOverlay}>
      <section>
        <button onClick={(() => {setIsOpen(false)})}>X</button>
        {children}
      </section>
    </div>
  );
}