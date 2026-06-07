import auctionHouse from '../assets/screenshot-auctionhouse.png'
import jsFrameworks from '../assets/screenshot-estore.png'
import holidaze from '../assets/screenshot-holidaze.png'

const projects = [
  {
    id: 1,
    tag: 'Semester Project 2',
    title: 'Auction House',
    description:
      'A fully functional online auction platform where users can register, log in, create listings with images and deadlines, and place bids on other listings. Built with vanilla JavaScript, Bootstrap, and the Noroff Auction API. The focus of this project was on functionality and API integration rather than visual design.',
    screenshot: auctionHouse,
    github: 'https://github.com/edrivvoll/semester-project-2',
    live: 'https://e-auctionhouse.netlify.app/src/feed',
  },
  {
    id: 2,
    tag: 'JavaScript Frameworks Course Assignment',
    title: 'eStore',
    description:
      'An online store built with React as part of the JavaScript Frameworks course assignment. Users can browse products, view details, add items to a cart, and complete a purchase. Focused on React fundamentals including component architecture, state management, and routing.',
    screenshot: jsFrameworks,
    github: 'https://github.com/edrivvoll/javascript-frameworks-ca',
    live: 'https://jsf-ca-espen.netlify.app',
  },
  {
    id: 3,
    tag: 'Project Exam 2',
    title: 'Holidaze',
    description:
      'A holiday venue booking platform built as the final project exam. Users can browse and search venues, view availability, and make bookings. Venue managers can register, create and manage their own listings. Built with React, showcasing the full range of skills developed throughout the frontend programme.',
    screenshot: holidaze,
    github: 'https://github.com/edrivvoll/project-exam-2',
    live: 'https://holidaze-bnb.netlify.app',
  },
]

export default projects
