import React from 'react'
import './Projects.css'
import converge from '../../assets/converge.png'
import hackMIT from '../../assets/StockHackMIT.png'
// END IMPORT SECTION

export default class Projects extends React.Component {

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
    function callback(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          alert('intersecting')
          entry.classList.add('animation')
        }
      });
    }
    let observer = new IntersectionObserver(callback);
    let entries = document.querySelectorAll("project-ind");
    entries.forEach(entry => {
      observer.observe(entry);
    })

    return (
        <section id='projects'> 
          <header className='projects-title'>
            <h2>Projects</h2>
            <h3>View some of my previous coding projects</h3>
          </header>
          <div className='projects-grid'>
            <div className='project-ind'>
              <div className='project-img'>
                <a href='https://converge-weblab.herokuapp.com'>
                  <img src={converge} alt="converge social media app"/>
                </a>
              </div>
              <div className='project-info'>
                <a href='https://converge-weblab.herokuapp.com' className='project-title'>Converge Social Media App</a>
                <p>Converge is a social media app that enables users to create and join groups and communities that collaboratively manage a to-do list, finance sheet, events calendar, as well as a group chat. </p>
              </div>
            </div>
            <div className='project-ind'>
              <div className='project-info'>
                <a href='https://github.com/Aryo-Patel/HackMIT-2020' className='project-title'>Predictive Stock Market App</a>
                <p>Built over the course of 2 days during the 2020 MIT hackathon, this app, while not hosted, scrapes data from Yahoo Finance and uses ML algorithms to predict the future trends of different stocks. Additionally, this app teaches potential new investors the terms required to make informed trading decisions</p>
              </div>
              <div className='project-img'>
                <a href='https://github.com/Aryo-Patel/HackMIT-2020'>
                  <img src={hackMIT} alt="HackMIT stock app"/>
                </a>
              </div>
            </div>
            {/* <div className='project-ind'>
              <div className='project-img'>
                <img src={converge} alt="converge social media app"/>
              </div>
              <div className='project-info'>
                <a href='https://converge-weblab.herokuapp.com' className='project-title'>Project 3</a>
                <p>description. </p>
              </div>
            </div> */}

          </div>
        </section>
    )
  }
}
