import { Suspense } from "react"
import Loading from '../../loading'

const comoChegar = () => {
  return(
    <Suspense fallback={<Loading />}>
      <h1>Como chegar</h1>
    </Suspense>
  )
}

export default comoChegar