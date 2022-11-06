import React from 'react'
import './Home.css'
// END IMPORT SECTION

export default class Home extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
    // BEGIN STATE VARIABLES

    // END STATE VARIABLES
    }
  }

  componentDidMount() {

  }

  // BEGIN ONCHANGE HANDLERS
  
  // END ONCHANGE HANDLERS

  // BEGIN RENDER METHODS

  // END RENDER METHODS

  render() {
    return (
        <div className='home-container'>
          <section id='home'>
            <header>
              <h1 className="glow">Tinah Hong</h1>
              <h3>Full-Stack Developer</h3>
            </header>
          </section>
        </div>
    )
  }
}
