import React from 'react';
import './Help.css';
import Feature from './Feature/feature';

const featuresData = [
    {
      title: 'Adding Goals Effectively',
      text: 'The Add a Goal page empowers you to efficiently input your objectives by defining titles, descriptions, and deadlines. You can align your personal goals with your organizational objectives by selecting departmental goals.'
    },
    {
      title: 'Managing Your Goals',
      text: 'The View Goals page offers a comprehensive overview of your added objectives. Here, you can seamlessly edit, delete, and rate your goals. Additionally, you can utilize checkboxes to indicate goal completion.'
    },
    {
      title: 'Home Page Insights',
      text: 'The Home page provides valuable insights, displaying the skills requiring improvement according to your supervisor’s assessment. It also presents a list of goals awaiting your review and upcoming review dates.'
    },
    {
      title: 'Performance Visualization',
      text: 'Explore the Performance Management page, where graphical representations of your goals over time offer valuable insights. These visualizations effectively demonstrate your performance trends and evolution.'
    }
  ];
const Help = () => {
  return (
    <div className='help__features section__padding' id='features'>
      <div className='help__features-heading'>
        <h1 className='gradient__text'>A simple and flexible solution for organizing 360-degree feedback surveys and employee performance management.</h1>
      </div>
      <div className='help__features-container'>
        {
          featuresData.map((item, index) => (
            <Feature title={item.title} text={item.text} key={item.title + index} /> 
          ))}
      </div>
    </div>
  )
}

export default Help;
