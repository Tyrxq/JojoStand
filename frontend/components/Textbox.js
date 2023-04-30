import React from 'react'

const Textbox = ({submit,func,loading}) => {
  return (
    <form className = "text-container" onSubmit = {submit}>
       
        <textarea id = "textbox" placeholder="Type in details about yourself" onChange={(e) => func(e.target.value)}/>
        <button id = "text-button" type = "submit">Generate </button>
        {loading && <div className="loading-spinner"></div>}
  </form>
  )
}

export default Textbox
