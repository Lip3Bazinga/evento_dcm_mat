import { Suspense } from "react"
import Loading from "../../../loading"

const cronograma = () => {
  return(
    <Suspense fallback={<Loading />}>
      <h1>Cronograma</h1>
    </Suspense>
  )
}

export default cronograma