import React from 'react'

import { Helmet } from 'react-helmet'

import Slide from '../components/slide'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Marketing Event Page</title>
        <meta property="og:title" content="Marketing Event Page" />
      </Helmet>
      <main className="home-main">
        <div className="home-hero section-container">
          <div className="home-blue-background"></div>
        </div>
        <div className="home-speakers section-container">
          <div className="home-max-width max-content-container">
            <div className="home-heading-container">
              <h1 className="home-text">
                <span>meet our SPONSORS</span>
                <span></span>
              </h1>
            </div>
            <h1 className="home-text03">Coming soon</h1>
          </div>
        </div>
        <div className="home-location">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxDb2xsZWdlfGVufDB8fHx8MTY5OTk0NzE4M3ww&amp;ixlib=rb-4.0.3&amp;w=1500"
            className="home-image"
          />
          <div className="home-content-container section-container">
            <div className="home-container1">
              <span className="home-text04">MNNIT, Allahabad</span>
              <span className="home-text05">24-26 NOV 2023</span>
              <div className="home-container2">
                <span className="home-text06">UDBHAV 2K23</span>
              </div>
              <div className="home-container3">
                <span className="home-text07">beautiful, vibrant berlin</span>
                <span className="home-text08">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus eget tincidunt odio, ut rhoncus ligula. In lorem est,
                  venenatis sed justo suscipit, varius mollis felis. Suspendisse
                  et massa ipsum. Mauris molestie eros mi, id egestas nibh
                  sodales eu. Donec porttitor convallis ante. Cras bibendum,
                  erat at suscipit vehicula,
                </span>
                <div className="home-btns-container">
                  <button className="button-secondary button button-md">
                    register
                  </button>
                  <button className="home-learn-more button button-outline button-md-border">
                    learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-previous-events section-container">
          <div className="home-max-width1 max-content-container">
            <div className="home-heading-container1">
              <h1 className="home-text09 Heading2">
                <span>previous events</span>
              </h1>
              <span className="home-text11">
                Take a tour of our previous conferences
              </span>
            </div>
          </div>
          <div data-type="slider" className="home-slider">
            <Slide rootClassName="slide-root-class-name4"></Slide>
            <Slide
              heading="Slide #2"
              rootClassName="slide-root-class-name1"
            ></Slide>
            <Slide
              heading="Slide #3"
              rootClassName="slide-root-class-name"
            ></Slide>
            <Slide
              heading="Slide #4"
              rootClassName="slide-root-class-name3"
            ></Slide>
            <Slide
              heading="Slide #5"
              rootClassName="slide-root-class-name2"
            ></Slide>
          </div>
          <div className="home-slider-controls">
            <div data-action="previousSlide" className="home-go-left">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
              </svg>
            </div>
            <div data-action="nextSlide" className="home-go-right">
              <svg viewBox="0 0 1024 1024" className="home-icon2">
                <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
              </svg>
            </div>
          </div>
        </div>
      </main>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Home
