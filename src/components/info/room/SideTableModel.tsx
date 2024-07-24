import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'

export function SideTableModel(props: GroupProps) {
  const { nodes, materials } = useGLTF('models/sidetable/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[15.956, 0, -128.526]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={0.1}>
          <mesh geometry={nodes.BedsideTable01_02_M_BedsideTable01_02_0.geometry} material={materials.M_BedsideTable01_02} position={[0, -910.561, 0]} />
        </group>
        <mesh
          geometry={nodes.BedsideTable01_01_M_BedsideTable01_01_0.geometry}
          material={materials.M_BedsideTable01_01}
          position={[107.517, 0, -128.754]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={0.1}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
