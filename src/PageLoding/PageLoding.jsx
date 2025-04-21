import React from 'react'
import './PageLoding.css'
import { PropagateLoader} from 'react-spinners'
function PageLoding() {
  return (
    <div className='Loding'>
      <PropagateLoader
        color="#f99500"
        size={20}
      />
    </div>

  )
}

export default PageLoding
