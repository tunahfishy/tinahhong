import React from 'react'
import './Footer.css'
import LinkedIn from '../../assets/linkedIn.png'
import Facebook from '../../assets/facebook.png'
import GoodReads from '../../assets/goodreads.png'
// END IMPORT SECTION

export default class Footer extends React.Component {

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
        <footer className="footer">
            <div className='footer-container'>
              <div className='social-media-container'>
                <span class="dot"></span>
                <a href='https://www.linkedin.com/in/tinahhong/'>
                  <img alt="linkedIn icon" src={LinkedIn}></img>
                </a>
                <a href='https://www.goodreads.com/user/show/91406541-tinah'>
                  <img alt="goodReads icon" src={GoodReads}></img>
                </a>
                <a href='https://www.facebook.com/tinah.hong.5'>
                  <img alt="facebook icon" src={Facebook}></img>
                </a>
                <span class="dot"></span>
              </div>
            </div>
        </footer>
    )
  }
}
