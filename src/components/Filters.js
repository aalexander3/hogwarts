import React from 'react'

const Filters = (props) => {
  console.log(props);
  return (
    <div>
      <h3>Sort By:</h3>
      {/* when select gets changed, we need to update the app's state and sort the hogs */}
      <select onChange={props.handleSort}>
        <option value="name">Name</option>
        <option value="weight">weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water</option>
      </select>
      <button onClick={props.handleClick}>Show me greasy hogs</button>
    </div>
  )
}

export default Filters
