import {motion} from "framer-motion"

interface Props {
  width?: number
  height?: number
}
const Moon = ({width = 30, height = 30}: Props) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className="fill-gray-900"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none"></rect>
      <motion.path
        d="M88,148a68,68,0,1,1,68,68H76a44,44,0,1,1,14.30583-85.62208"
        fill="none"
        className="stroke-gray-900"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
        initial={{
          opacity: 0,
          rotate: -45,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          rotate: 0,
          pathLength: 1,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      ></motion.path>
      <motion.path
        d="M46.99,138.92889A64.12919,64.12919,0,0,1,9.6218,94.37955l.00023-.001A64.0566,64.0566,0,0,0,86.37854,17.622l.00084-.00019A64.02478,64.02478,0,0,1,136,80q0,1.51431-.06961,3.01174"
        fill="none"
        className="stroke-gray-900"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
        initial={{
          opacity: 0,
          rotate: -45,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          rotate: 0,
          pathLength: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      ></motion.path>
    </motion.svg>
  )
}

export default Moon
