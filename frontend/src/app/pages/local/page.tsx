import { Suspense } from "react"
import Loading from '../../loading'

const local = () => {
  return(
    <Suspense fallback={<Loading />}>
      <h1>Local</h1>
    </Suspense>
  )
}

export default local