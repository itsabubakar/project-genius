import Link from 'next/link'
import React from 'react'

type Props = {}

const NotFound = (props: Props) => {
  return (
    <div>
      <div className="grid h-screen place-content-center bg-white px-4">
  <h1 className="uppercase tracking-widest text-gray-500 text-3xl">404 | Not Found</h1>
        <Link className='mt-2 text-center text-blue-500' href="/">Go back to Home</Link>

</div>
  </div>
  )
}

export default NotFound