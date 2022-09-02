const AuthCard = ({ logo, children }) => (
  <div className="min-h-screen flex flex-col justify-center sm:justify-center items-center sm:pt-0">
    <div className="max-w-md px-6 sm:px-6 py-4 bg-white shadow-md overflow-hidden rounded-lg">
      <div className="flex justify-center">{logo}</div>
      {children}
    </div>
  </div>
)

export default AuthCard
