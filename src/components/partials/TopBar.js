import React from 'react'
import './TopBar.css'
import resume from '../../assets/resume.pdf'
// END IMPORT SECTION

export default class TopBar extends React.Component {

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
  handleJump = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth", block: "start"});
  }
  // END ONCHANGE HANDLERS

  // BEGIN RENDER METHODS

  // END RENDER METHODS

  render() {
    return (
        <header className="topBar">
            <div className='top-bar-container'>
                <div className='top-bar-links-container'>
                    <p onClick={() => this.handleJump('about')} className='nav-link'>About</p>
                    <p onClick={() => this.handleJump('projects')} className='nav-link'>Projects</p>
                    <p onClick={() => this.handleJump('blogs')} className='nav-link'>Blogs</p>
                    <a href={resume}><p className='nav-link'>Resume</p></a>
                </div>
            </div>
        </header>
    )
  }
}
