import React from 'react'
import './Blogs.css'
import achievementGap from '../../assets/achievement-gap.jpeg'
import chicago from '../../assets/chicago.jpeg'
import head from '../../assets/head-start.jpeg'
import baby from '../../assets/baby.jpeg'

// END IMPORT SECTION

export default class Blogs extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
    // BEGIN STATE VARIABLES
        blogs: [
          <div className='blogs-ind' id={1}>
            <a href={'https://thepassionpost.home.blog/2019/04/03/the-role-of-standardized-tests-in-the-perpetuation-of-the-achievement-gap/'} className='blog-title'>
                <img alt="standardized tests blog" className='blog-img' src={achievementGap} />
                <h2 className='blog-title'>The Role of Standardized Tests in the Perpetuation of the Achievement Gap</h2>
            </a> 
            <hr></hr>
            <p>In the nineteenth century, eugenicists believed that race determined intelligence, and they created IQ tests to help them confirm this. In a journal from Washington University, civil rights activist W.E.B. DuBois was quoted as saying that these IQ tests were administered to “put black folk absolutely beyond the possibility of civilization” (Au). These tests were . . .</p>
          </div>,

          <div className='blogs-ind' id={2}>
            <a href={'http://thepassionpost.home.blog/2018/10/28/hope-for-the-homeless/'} className='blog-title'>
                <img alt="Hope for the Homeless blog" className='blog-img' src={chicago} />
                <h2 className='blog-title'>Hope For The Homeless</h2>
            </a> 
            <hr></hr>
            <p>There's nothing better than a carefree stroll down North Chicago. Grand, twisting skyscrapers loom over me as I gaze at the horizon, waving at the passengers on a cruise boat as they float down a lazy river. Suddenly, a voice calls up at me. At my feet, a man sits, rattling a cup of spare . . .</p>
          </div>,

          <div className='blogs-ind' id={3}>
            <a href={'http://thepassionpost.home.blog/2020/01/15/policy-in-the-alleviation-of-the-achievement-gap-head-start/'} className='blog-title'>
                <img alt="policy in the alleviation of the achievement gap blog" className='blog-img' src={head} />
                <h2 className='blog-title'>Policy In The Alleviation Of The Achievement Gap: Head Start</h2>
            </a> 
            <hr></hr>
            <p>In Lyndon B. Johnson’s 1964 State of the Union Address, he shared his vision for a War on Poverty. As part of this, he planned to develop a program to prepare low-income children for elementary school. A major issue in the perpetuation of poverty is inequity in the quality of education, so Johnson appointed agencies . . .</p>
          </div>, 

          <div className='blogs-ind' id={4}>
            <a href={'http://thepassionpost.home.blog/2020/01/08/the-psychology-of-baby-brain-development/'} className='blog-title'>
                <img alt="psychology of baby development blog" className='blog-img' src={baby} />
                <h2 className='blog-title'>The Psychology of Baby Brain Development</h2>
            </a> 
            <hr></hr>
            <p>The distance from a mother's crooked elbow to the wide eyes of their newborn baby matches the range of the baby's field of vision perfectly. This clever design by nature assures that the baby's brain can easily form neural networks to create an emotional connection to the caregiver. A newborn baby's brain is primed to . . .</p>
          </div> 
        ],

        slide: 2,
    // END STATE VARIABLES
    }
  }

  componentDidMount() {

  }

  // BEGIN ONCHANGE HANDLERS

  leftSlide = () => {
    let nextSlide = this.state.slide-1;
    if (nextSlide < 0)
      nextSlide = 3
    this.setState({
        slide: nextSlide
    })
  }

  rightSlide = () => {
    let nextSlide = this.state.slide+1;
    if (nextSlide >= 4)
      nextSlide = 0
    this.setState({
        slide: nextSlide
    })
  }

  setSlide = (slide) => {
    this.setState({
      slide: slide
    })
  }

  // END ONCHANGE HANDLERS

  // BEGIN RENDER METHODS

  // END RENDER METHODS

  render() {
    return (
        <section id='blogs'>
          <header className='blogs-title'>
            <h2>Blogs</h2>
            <h3>Thoughts from <a className="blog-link" href="https://thepassionpost.home.blog/">The School Of Tunah</a></h3>
          </header>
          <div className='blogs-grid'>
            <div className='blogs-carousel'>
              <div className='leftButton' onClick={()=>this.leftSlide()}>&#10157;</div>
              <div className='carousel'>
                <div>
                  <div className='inner' style={{transform: "translateX(-0%)"}}>
                    {this.state.blogs[this.state.slide]}
                  </div>
                  <div className='dots'>
                    <span className={this.state.slide===0? "activeDot" : "dot"} onClick={()=>this.setSlide(0)}></span>
                    <span className={this.state.slide===1? "activeDot" : "dot"} onClick={()=>this.setSlide(1)}></span>
                    <span className={this.state.slide===2? "activeDot" : "dot"} onClick={()=>this.setSlide(2)}></span>
                    <span className={this.state.slide===3? "activeDot" : "dot"} onClick={()=>this.setSlide(3)}></span>
                  </div>
                </div>
              </div>
              <div className='rightButton' onClick={()=>this.rightSlide()}>&#10157;</div>
            </div>
            <br></br>
            <a className='blog-btn' href={'https://thepassionpost.home.blog/'}>Read More</a>
          </div>            

        </section>
    )
  }
}