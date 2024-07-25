import { Html } from '@react-three/drei'
import { Suspense } from 'react'
import Loader from '../../common/loader'

export default function ModelLoader({ children }: { children: React.ReactNode }) {
  return (
    <Suspense
      fallback={
        <Html>
          <Loader />
        </Html>
      }
    >
      {children}
    </Suspense>
  )
}
