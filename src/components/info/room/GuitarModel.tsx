import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'

export function GuitarModel(props: GroupProps) {
  const { nodes, materials } = useGLTF('models/guitars/scene.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.35, 0, 0]} rotation={[0, Math.PI / 6, 0]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials['Plastic.Black']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['Metal.Chrome']} />
        <mesh geometry={nodes.Object_6.geometry} material={materials['Amp.Peavey.Leather']} />
        <mesh geometry={nodes.Object_7.geometry} material={materials['Amp.Peavey']} />
      </group>
      <group position={[-0.35, 0, 0]} rotation={[-Math.PI, -Math.PI / 6, -Math.PI]}>
        <mesh geometry={nodes.Object_9.geometry} material={materials['Plastic.Black']} />
        <mesh geometry={nodes.Object_10.geometry} material={materials['Metal.Chrome']} />
        <mesh geometry={nodes.Object_11.geometry} material={materials['Amp.Peavey.Leather']} />
        <mesh geometry={nodes.Object_12.geometry} material={materials['Amp.Peavey']} />
      </group>
      <group position={[-0.416, 0.003, 0.33]} rotation={[1.265, 0.172, -0.497]}>
        <mesh geometry={nodes.Object_14.geometry} material={materials['Metal.Chrome']} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.Strings} />
        <mesh geometry={nodes.Object_16.geometry} material={materials['Guitar.Fender.Telecaster']} />
        <mesh geometry={nodes.Object_17.geometry} material={materials['Guitar.Fender.Telecaster.Metalic']} />
      </group>
      <group position={[-0.18, 0, 0.151]} rotation={[-Math.PI, -0.837, -Math.PI]}>
        <mesh geometry={nodes.Object_19.geometry} material={materials.Strings} />
        <mesh geometry={nodes.Object_20.geometry} material={materials['Metal.Chrome']} />
        <mesh geometry={nodes.Object_21.geometry} material={materials['Plastic.White']} />
        <mesh geometry={nodes.Object_22.geometry} material={materials['Guitar.Fender.Stratocaster']} />
        <mesh geometry={nodes.Object_23.geometry} material={materials['Guitar.Fender.Stratocaster.Metallic']} />
      </group>
      <group position={[3.262, 0.273, 5.581]} rotation={[-3.128, 1.396, -Math.PI]}>
        <group position={[6, 0, -2]}>
          <mesh geometry={nodes.Object_27.geometry} material={materials['Plastic.Black.Smooth']} />
          <mesh geometry={nodes.Object_29.geometry} material={materials['Metal.Chrome']} position={[0.014, 0.01, 0.211]} rotation={[0.284, 1.122, 1.427]} />
          <mesh geometry={nodes.Object_31.geometry} material={materials['Metal.Chrome']} position={[-0.054, 0.008, 0.059]} rotation={[1.584, 0.001, 0.099]} />
        </group>
      </group>
      <group position={[-5.636, 0.35, -7.52]} rotation={[0, -1.158, 0]}>
        <group position={[9, 0, -2]}>
          <mesh geometry={nodes.Object_35.geometry} material={materials['Plastic.Black.Smooth']} />
          <mesh geometry={nodes.Object_37.geometry} material={materials['Metal.Chrome']} position={[-0.05, 0.006, 0.197]} rotation={[1.551, 0.256, -0.144]} />
          <mesh geometry={nodes.Object_39.geometry} material={materials['Metal.Chrome']} position={[0.044, 0.025, 0.147]} rotation={[1.63, 0.003, 0.048]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.glb')
