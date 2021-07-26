
import 'twin.macro'
import tw from 'twin.macro';
import { motion } from "framer-motion"
const Heading = tw.h1`text-blue-600 text-2xl p-2`

const Container=() => <motion.div whileHover={{ scale: 1.2, rotate: 90 }} whileTap={{
  scale: 0.8,rotate: -90,
  borderRadius: "100%"
}}  tw="h-12 w-12  mt-5 text-center bg-green-100">tes</motion.div>;

const index = () => {
  return (
    <div>
      <Heading>Hello World</Heading>
      <p tw="text-2xl text-blue-700">tesstt</p>
      <motion.div whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: "100%"
        }} 
        tw="flex flex-col justify-center h-12 w-12 gap-y-5 bg-green-200">
      </motion.div>
        <Heading>Hello World</Heading>
        <Container />
    </div>
  )
}

export default index
