import React from 'react'
import PropTypes from 'prop-types';
const Link = ({route}) => {
  return (
    <li className='mr-8 px-6 hover:bg-yellow-400 
    '>
            <a href={route.path}>{route.name}</a></li>
  )
}

Link.PropTypes={
    route:PropTypes.object
}

export default Link