import React from 'react'
import './About.css'
import resume from '../../assets/resume.pdf'
// END IMPORT SECTION

export default class About extends React.Component {

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
        <section id='about'>
          <header>
            <h3>Hi, I'm Tinah</h3>
            <hr className='about-divider'></hr>
            <div className='about-info'>
              <p>I'm currently studying computer science and business analytics at MIT.
              Right now I'm learning software development in preparation for my incoming summer internship as a SWE at Microsoft.
              I've specifically been learning web and software development, and UI/UX</p>
              <p>My top skills include the MERN stack, Typescript, Python, AWS, and more</p>
              <br></br>
              <a className='resume' href={resume}>View My Resume Here</a>
            </div>
            <div className='about-info'>
              <p>
                Beyond coding, I love playing basketball with friends and with the varsity team at MIT. I enjoy playing guitar and singing with my acapella group. I seek out adventerous trips, hikes, stargazing, and adrenaline rushes such as skydiving
              </p>
            </div>

          </header>
        </section>
    )
  }
}