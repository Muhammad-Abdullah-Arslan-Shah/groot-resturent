import React from 'react'

 function Alert(props) {

  return (
   <>
   <div style={{height : '100px'}}>
     {props.alert && <div className="alert alert-primary" role="alert">
 <strong>{props.alert.type}</strong>: {props.alert.msg}
</div>}
</div>
</>
  )
}
export default Alert