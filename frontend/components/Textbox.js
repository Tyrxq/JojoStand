import React from 'react'

const Textbox = ({submit,func}) => {
  return (
    <form class = "text-container" onSubmit = {submit}>
        <textarea id = "textbox" placeholder='Give details about yourself' onChange={(e) => func(e.target.value)}/>
        <button id = "text-button" type = "submit">Generate Stand</button>
  </form>
  )
}

export default Textbox
