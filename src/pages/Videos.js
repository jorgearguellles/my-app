import React from 'react'
import Video from "../components/Video.js";
import "./styles/Videos.css"

const Videos = () => {
  return (
    <div className='videos-section'>
      <Video 
        title="Getting Started"
        info="Learn how to create an account, set up your wallet, and what you can do on Praxu"
      />
      <Video 
        title="FAQs"
        info="Learn answers to frequently asked questions on Praxu"
      />
      <Video 
        title="Buying"
        info="Learn how to purchase tickets and understand gas fees and what’s gas free on Praxu"
      />
      <Video 
        title="Selling"
        info="Learn how to list your tickets for sale and understand the different ways to list your tickets"
      />
      <Video 
        title="Account Help"
        info="Learn how to adjust your account settings and configure your Praxu profile"
      />
      <Video 
        title="User Safety"
        info="Learn more about anti-fraud and user safety processes on Praxu"
      />
      <Video 
        title="Partners"
        info="Learn how you can partner with us to enage with the Praxu team"
      />
      <Video 
        title="Developers"
        info="Learn how you can develop with Praxu"
      />
    </div>
  )
}

export default Videos;