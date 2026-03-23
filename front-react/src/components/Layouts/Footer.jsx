import React from 'react'

function footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex justify-center items-center text-center bottom-0 bg-gray-darker h-24">
      <div className="text-center p-4">
        <div className='flex justify-center text-gray'>
          <a href='https://www.facebook.com/bienestaruncoma/' target="_blank" rel="noreferrer"><img src='/logos/Facebook.svg' className='h-7 p-1' alt='logo Facebook'/></a>
          <a href='https://twitter.com/prensaunco' target="_blank" rel="noreferrer"><img src='/logos/Twitter.svg' className='h-7 p-1' alt='logo Twiter'/></a>
          <a href='https://www.instagram.com/sbucomahue/' target="_blank" rel="noreferrer"><img src='/logos/Instagram.svg' className='h-7 p-1' alt='logo Instagram'/></a>
        </div>
        <span className='text-gray'>
                   &copy; {year} <a href='/' className='hover:text-gray-light'> UNCo Activa. </a> Todos los derechos reservados.
        </span>
      </div>
    </footer>
  )
}

export default footer