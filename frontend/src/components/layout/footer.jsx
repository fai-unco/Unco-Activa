import React from 'react'

function footer() {
    return (
        <footer className="flex justify-center items-center text-center bottom-0 bg-gray-darker text-white h-24">
            <div className="text-center p-4">
                <div className='flex justify-center'>
                    <a href='https://www.facebook.com/bienestaruncoma/' target="_blank"><img src='./Facebook.svg' className='h-7 p-1'/></a>
                    <a href='https://twitter.com/prensaunco' target="_blank"><img src='./Twitter.svg' className='h-7 p-1'/></a>
                    <a href='https://www.instagram.com/sbucomahue/' target="_blank"><img src='./Instagram.svg' className='h-7 p-1'/></a>
                </div>
                © 2022 Copyright: 
                <a className="text-whitehite" href="#"> Unco Activa</a>
            </div>
        </footer>
    )
}

export default footer