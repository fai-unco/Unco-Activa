const Input = ({ disabled = false, className, ...props }) => (
  <input
    disabled={disabled}
    className={`${className} rounded-full shadow-sm border-black
     focus:border-blue-cyan focus:ring focus:ring-blue-cyan focus:ring-opacity-50`}
    {...props}
  />
)

export default Input
