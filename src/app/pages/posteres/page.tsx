import { Suspense } from "react"
import Loading from "../../loading"
import styles from "./styles.module.sass"


const posteres = () => {

  return(
    <Suspense fallback={<Loading />}>
      <div className={styles.container}>
        <h1>Pôsteres</h1>

        <h2>Submissão</h2>
        <div>
          <p>O arquivo resumo deverá ter no máximo 2 páginas, ser salvo no formato PDF e submetido com um nome seguindo o seguinte formato: Poster_nome do autor_últimosobrenome.pdf
 A submissão de trabalho é feita pelo formulário Google Forms no momento da inscrição</p>
        </div>
        <h2>Apresentação</h2>
        <div>
        <p>
        O pôster deverá possuir cordão superior para poder ser pendurado. Dimensões máxima 1mx1m. O título, autor(es) e orientador(es) devem ser indicados
        na parte superior. Tamanho das letras: Título 70 (1,5cm), autores e orientadores tamanho 50 (1cm), texto tamanho 28 (0,7cm).
Os pôsteres serão expostos em ambiente de circulação dos participantes. O autor terá oportunidade de apresenta-los nos horários programados. O autor ou autores devem estar próximos ao pôster nos horários da apresentação para uma apresentação oral sucinta do seu trabalho para todos os interessados no trabalho.
Somente serão aceitos os trabalhos que estiverem de acordo com as normas detalhadas. Para submeter o trabalho para aprovação será necessário realizar a inscrição como participante.</p>
        </div>
      </div>
    </Suspense>
  )

}

export default posteres
