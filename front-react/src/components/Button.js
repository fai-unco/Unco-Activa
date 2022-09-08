const Button = ({ type = 'submit', className, ...props }) => (
  <button
    type={type}
    className={`${className} items-center
    py-2 bg-board border border-transparent rounded-full font-Hurme-Geometric-N
    text-xs text-white uppercase tracking-widest hover:bg-yellow  hover:text-black
      focus:outline-none focus:border-gray focus:bg-yellow
      focus:ring ring-gray disabled:opacity-25 transition ease-in-out duration-200`}
    {...props}
  />
)

export default Button
