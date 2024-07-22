import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'

export function RoomModel(props: GroupProps) {
  const { nodes, materials } = useGLTF('models/room/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.normal} />
      <mesh geometry={nodes.Object_40.geometry} material={materials.paintings} position={[0, 0.5, 0]} />
    </group>
  )
}

useGLTF.preload('/scene.gltf')
