import { SunIcon } from '@heroicons/react/24/outline'

const Nav = () => {
  return (
    <div className='bg-white flex justify-between p-4 shadow-md'>
        <img src='/images/portfolio-logo.png' alt="Portfolio logo" />
        <SunIcon className='h-10 bg-primary-green rounded-full p-2 text-white' />
    </div>
  )
}

export default Nav