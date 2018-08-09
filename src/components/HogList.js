import React from 'react'
import HogCard from './HogCard'

const HogList = (props) => {

  const mappedHogs = props.hogs.map(hog => (<HogCard key={hog.name} hog={hog} />))

  return (
    <div className="ui grid container">
      {mappedHogs}
    </div>
  )
}

export default HogList
