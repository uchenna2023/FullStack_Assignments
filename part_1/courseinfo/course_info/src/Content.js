import React from 'react'
import Part from './Part'

const Content = (props) => {
    console.log(props.parts)
    
  return (
    <div>
            <Part />
            <Part />
            <Part />
        
    </div>
  )
}

export default Content