import React, { ReactNode } from 'react'
import '@/style/Admin-Tours.css'
function layout({ children }:{children:ReactNode}) {
  return (
    <div>
        { children }
    </div>
  )
}

export default layout