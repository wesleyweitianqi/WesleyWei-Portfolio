import React, {useEffect, useMemo, useRef, useState} from 'react'
import * as THREE from 'three'
import {Canvas, useFrame} from '@react-three/fiber'
import {Text, TrackballControls} from '@react-three/drei'
import {SectionWrapper} from '../hoc'
import {motion} from "framer-motion";
import {textVariant} from "../utils/motion.js";
import {styles} from "../styles.js";


const Skills = () => {
  function Word({children, ...props}) {
    const color = new THREE.Color()
    const fontProps = {
      font: '/Inter-Bold.woff',
      fontSize: 2.5,
      letterSpacing: -0.05,
      lineHeight: 1,
      'material-toneMapped': false
    }
    const ref = useRef()
    const [hovered, setHovered] = useState(false)
    const over = (e) => (e.stopPropagation(), setHovered(true))
    const out = () => setHovered(false)
    // Change the mouse cursor on hover
    useEffect(() => {
      if (hovered) document.body.style.cursor = 'pointer'
      return () => (document.body.style.cursor = 'auto')
    }, [hovered])
    // Tie component to the render-loop
    useFrame(({camera}) => {
      // Make text face the camera
      ref.current.quaternion.copy(camera.quaternion)
      // Animate font color
      ref.current.material.color.lerp(color.set(hovered ? '#fa2720' : '#45465e'), 0.1)
    })
    return <Text ref={ref} onPointerOver={over} onPointerOut={out}
                 onClick={() => console.log('clicked')} {...props} {...fontProps} children={children}/>
  }

  const skills = [
    'HTML5', 'Javascript', 'Scss', 'Matlab', 'Docker',
    'CSS', 'Python', 'Java', 'PostgreSQL', 'Git',
    'Redux', 'Linux', 'React', 'Redis',
    'NodeJS', 'Airflow',
  ]

  function Cloud({count = 3, radius = 20}) {
    // Create a count x count random words with spherical distribution
    const words = useMemo(() => {
      const words = [
        'JAVA',
        'F-END',
        'Tailwind',
        "Bootstrap5",
        'MYSQL',
        'JS',
        'CSS',
        'SASS',
        'DOCKER',
        'HTML',
        'React'
      ]

      // const randomWords = words[Math.floor(Math.random() * words.length)]
      const temp = []
      const spherical = new THREE.Spherical()
      const phiSpan = Math.PI / (count + 1)
      const thetaSpan = (Math.PI * 2) / count
      for (let i = 1; i < count + 1; i++)
        for (let j = 0; j < count; j++) temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), skills[i + j]])
      return temp
    }, [count, radius])
    return words.map(([pos, word], index) => <Word key={index} position={pos} children={word}/>)
  }
  return (
      <div className='flex flex-col justify-center'>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Knowledge</p>
          <h2 className={styles.sectionHeadText}>
            Skills.
          </h2>
        </motion.div>
        <div className='flex justify-center items-center'>
          <Canvas className='Content_2_moduleDown text-secondary' style={{height: '600px', width: '555px', fontSize: '12px', color: "white"}}
                  dpr={[1, 2]}
                  camera={{position: [0, 0, 35], fov: 90}}>
            <fog attach="fog" args={['#fff', 0, 80]}/>
            <Cloud count={8} radius={20}/>
            <TrackballControls/>
          </Canvas>
        </div>
      </div>

  )
}

export default SectionWrapper(Skills, 'feedbacks')