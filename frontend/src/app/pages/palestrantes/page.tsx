import Loading from "../../loading"
import { Suspense } from "react"

const palestrantes = () => {
  return(
    <Suspense fallback={<Loading />}>
      <h1>Palestrantes</h1>
    </Suspense>
  )
}

export default palestrantes