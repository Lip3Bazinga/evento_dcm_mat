import { Suspense } from "react"
import Loading from '../../loading'

const hospedagem = () => {
  return(
    <Suspense fallback={<Loading />}>
      <h1>Hospedagem</h1>
    </Suspense>
  )
}

export default hospedagem