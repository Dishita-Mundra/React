import React from 'react'
import Child1 from './Child1'

const Parent1 = () => {

  const fullname = "Hamza Ali Mazari";

  function Alert() {
    alert("Hosla Endhan Badla");
  }

  return (
    <>
      <div>Parent</div>
      <h1>Rendered in Parent comp: {fullname}</h1>

      <Child1 name={fullname} alert={Alert} />
    </>
  )
}

export default Parent1