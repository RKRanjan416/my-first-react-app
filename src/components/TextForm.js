import React, {useState} from 'react'

export default function TextForm(props) {
  const[text, setText]=useState('')
  const handleUpClick=()=>{
    // console.log('Uppercase was Clicked: ' + text)
    setText(text.toUpperCase())
    props.showAlert('Text converted to upper case', 'success')
  }
  const handleLoClick=()=>{
    // console.log('Uppercase was Clicked: ' + text)
    setText(text.toLowerCase())
    props.showAlert('Text converted to lower case', 'success')
  }
  const clearTextClick=()=>{
    // console.log('Uppercase was Clicked: ' + text)
    setText('')
    props.showAlert('Text cleared', 'success')
  }

  const handleCopyText=()=>{
    var text=document.getElementById('mybox')
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert('Text copied to clipboard', 'success')
  }
  const handleOnChange=(event)=>{
    // console.log('OnChange Clicked')
    setText(event.target.value)
  }


  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'#042743':'white'}}>
    <div>
      <h1>{props.heading}</h1>
            <div className="mb-3">
        <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'#042743':'white'}}></textarea>
          </div>
          <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
          <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
          <button className='btn btn-primary mx-1' onClick={clearTextClick}>Clear Text</button>
          <button className='btn btn-primary mx-1' onClick={handleCopyText}>Copy Text</button>
    </div>
    </div>
    <div className='container my-3' style={{color:props.mode==='light'?'#042743':'white'}}>
      <h2>Your text summary</h2>
      <p>{text.trim().split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.trim().split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter something into the textbox above to preview it'}</p>
    </div>
    </>
  )
}
