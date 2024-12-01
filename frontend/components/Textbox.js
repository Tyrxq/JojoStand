import React from 'react'

const Textbox = ({submit,func,loading,pics}) => {
  return (
    <form className = {pics.length === 0 ? "text-container-nothing" : "text-container pt-3"} onSubmit = {submit}>
       
        <textarea className = {loading === true ? "loading-text" : "normal-text"}id = {pics.length === 0 ? "textbox-nothing" : "textbox"} placeholder="Type in details about yourself" onChange={(e) => func(e.target.value)}/>
        <button id = {pics.length === 0 ? "text-button-nothing" : "text-button"} type = "submit"><span className="material-symbols-outlined">mediation</span> </button>
        {loading && <div className="loading-spinner"></div>}
  </form>
  )
}

export default Textbox
