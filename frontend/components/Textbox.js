import React from 'react'

const Textbox = ({submit,func,loading,pics}) => {
  return (
    <form className = "text-container" onSubmit = {submit}>
       
        <textarea className = {loading === true ? "loading-text" : "normal-text"}id = {pics.length === 0 ? "textbox-nothing" : "textbox"} placeholder="Type in details about yourself" onChange={(e) => func(e.target.value)}/>
        <button id = {pics.length === 0 ? "text-button-nothing" : "text-button"} type = "submit">Generate </button>
  </form>
  )
}

export default Textbox
