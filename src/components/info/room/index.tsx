import { Suspense } from 'react'
import Loader from '../../common/loader'
import { RoomModel } from './RoomModel'
import { ComputerModel } from './ComputerModel'
import { GuitarModel } from './GuitarModel'
import { CatModel } from './CatModel'
import { SimpleCharacterModel } from './SimpleCharacterModel'
import { SideTableModel } from './SideTableModel'
import { BunnyModel } from './BunnyModel'
import { StyledCanvas } from './styles'

function Room() {
  return (
    <Suspense fallback={<Loader />}>
      <StyledCanvas camera={{ position: [2, 2.5, 10] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={2} />
        <group position={[0, 0, 0]}>
          <RoomModel rotation={[0, (80 * Math.PI) / 100, 0]} />
          <ComputerModel scale={[0.4, 0.4, 0.4]} position={[-1, 0, -4]} rotation={[0, (80 * Math.PI) / 100, 0]} />
          <GuitarModel scale={[3, 3, 3]} position={[5, 0, -2]} rotation={[0, (-34 * Math.PI) / 100, 0]} />
          <SideTableModel scale={[2, 2, 2]} position={[-5, 0, 1.8]} rotation={[0, (30 * Math.PI) / 100, 0]} />
          <BunnyModel scale={[0.2, 0.2, 0.2]} position={[-5, 1.7, 1.8]} rotation={[0, (85 * Math.PI) / 100, 0]} />
          <CatModel scale={[0.002, 0.002, 0.002]} position={[2, 0, 3]} rotation={[0, (-10 * Math.PI) / 100, 0]} />
          <SimpleCharacterModel scale={[0.8, 0.8, 0.8]} position={[0, 0, 3]} rotation={[0, (12 * Math.PI) / 100, 0]} />
        </group>
      </StyledCanvas>
    </Suspense>
  )
}

export default Room
