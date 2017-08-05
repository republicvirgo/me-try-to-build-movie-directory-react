import React from 'react'
import ReactDOM from 'react-dom'

// component
import Navbar from './Components/Navbar'
// container
import Sidebar from './Containers/Sidebar'

class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <Navbar />
        <div className='row'>
          <div className='col-lg-3'>
            <Sidebar />
          </div>
          <div className='col-lg-9'>
            Movie list
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render (<App />, document.getElementById('container'))
