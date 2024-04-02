
import { Suspense } from 'react'
import Loading from '../../loading'

const faleConosco = () => {
  return(
    <Suspense fallback={<Loading />}>
      <h1>Fale conosco</h1>
    </Suspense>
  )
}

export default faleConosco