import React from 'react'

class Sidebar extends React.Component {
  render () {
    return (
      <div>
        <div className='page-header'>
          <h4>Movie Genre <small>Filter movie by genre</small></h4>
        </div>
        <ul className='list-group'>
          <a href='#' className='list-group-item active'>
            Action
          </a>
          <a href='#' className='list-group-item'>Horor</a>
          <a href='#' className='list-group-item'>Adventure</a>
          <a href='#' className='list-group-item'>Drama</a>
          <a href='#' className='list-group-item'>Romance</a>
        </ul>
      </div>
    )
  }
}

export default Sidebar