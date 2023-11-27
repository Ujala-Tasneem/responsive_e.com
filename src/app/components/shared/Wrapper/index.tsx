import { FC } from 'react'


const Wrapper:  FC <{children: React.ReactNode}> = ({children}) => {
  return (
    <div className='max-w-7xl  mx-auto py-6 px-10'> 
        {children}
    </div>
  )
}

export default Wrapper