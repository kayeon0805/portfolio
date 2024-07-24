import { BufferGeometry, Skeleton } from 'three'

declare module 'three' {
  interface Object3D {
    geometry?: BufferGeometry
    skeleton?: Skeleton
  }
}
