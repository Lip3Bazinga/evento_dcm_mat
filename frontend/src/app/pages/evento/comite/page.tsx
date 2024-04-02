import { Suspense } from "react"
import Loading from "../../../loading"

const comite = () => {

  return (
    <Suspense fallback={<Loading />}>
      <h1>Comitê</h1>
    </Suspense>
  )
}

export default comite