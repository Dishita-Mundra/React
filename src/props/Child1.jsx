import React from 'react'

const Child1 = ({ name, alert }) => {
  return (
    <>
      <div>Child data name: {name}</div>

      {/* use alert function inside onclick */}
      <button onClick={alert}>Click</button>
    </>
  )
}

export default Child1