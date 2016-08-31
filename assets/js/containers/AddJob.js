import React from 'react'
import { connect } from 'react-redux'
import { addJob } from '../actions'

const mapStateToProps = (state, ownProps) => {}
  return {
    food: () => {console.log("bear")}
  }
}

let AddJob = ({ dispatch, food }) => {
  let input
  food()
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addJob(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add New Job
        </button>
      </form>
    </div>
  )
}
AddJob = connect()(AddJob)

export default AddJob