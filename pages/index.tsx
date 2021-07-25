
import 'twin.macro'
import tw from 'twin.macro';
import { motion } from "framer-motion"
const Heading = tw.h1`text-blue-600 text-2xl p-2`

const Container = tw.div`h-12 w-12 m-auto mt-5 text-center bg-green-100`;

const index = () => {
  return (
    <div>
      <Heading>Hello World</Heading>
      <p className="text-2xl text-blue-700">tesstt</p>
      <motion.div whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: "100%"
        }} 
        tw="flex flex-col justify-center h-12 w-12 gap-y-5 bg-green-200">
      </motion.div>
        <Heading>Hello World</Heading>
    </div>
  )
}

export default index
