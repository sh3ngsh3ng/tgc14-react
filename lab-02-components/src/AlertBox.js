// for a function to be recongized
// as a react component, the first
// alphabet MUST be uppercase
export default function AlertBox(props) {
    // MUST RETURN JSX
    return (
      <div className='alert' style={{backgroundColor:props.color, borderWidth:'2px'}}> 
      {props.message}
    </div>
    )
  }