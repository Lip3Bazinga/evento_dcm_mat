import { Suspense } from "react"
import Loading from "../../loading"

const posteres = () => {

  return(
    <Suspense fallback={<Loading />}>
      <h1>Pôsteres</h1>
    </Suspense>
  )

}

export default posteres
