import { Suspense } from "react"
import Loading from "../../../loading"
const cartaz = () => {

  return(
    <Suspense fallback={<Loading />}>
      <h1>Cartaz</h1>
    </Suspense>
  )

}

export default cartaz