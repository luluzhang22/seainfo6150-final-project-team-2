import React from 'react';
import styles from './About.module.css';

const About = () => (
  <div>
    <div className={styles.title}>
      <text className={styles.title}>About Us</text>
    </div>
    <div className = {styles.textarea}>
      <article className = {styles.article}>
        <p>Vehicle Mart is a long running automobile dealership in Washington State, having opened its doors and filled its lot all the way back in 1957. Since then, our family-owned dealership and excellent staff members have happily served drivers in Lynnwood, Edmonds, Tacoma, Bellevue, Kirkland, Redmond, Woodinville and Seattle. That’s a lot of area to cover and plenty of people stopping by every day, but we’re up to the task.</p>
        <p>Vehicle Mart of Washington isn’t just about bringing the Mercedes-Benz C 300 or CLA 250 to luxury-focused motorists, but we also believe in being a part of the community. Our sponsorship deal with AA is a point of pride for us, but not nearly as much as our ability to contribute to local charities. The Seattle Children’s Hospital has a special place in our hearts, and we’re always happy to contribute donations.</p>
        <p>What else do you need to know about us? Our company values center on loyalty. Loyalty to you, loyalty to our community and loyalty to our employees. We like to think if we treat you with the respect and consideration you deserve, you’ll keep coming back for more. We know we must be doing something right, because we have many employees here who have worked for us for more than a decade, and we’re always happy to see familiar faces coming back for quality service work or to scope on their next new car. We hope you’ll become one of those familiar faces after you stop by Vehicle Mart and experience our customer service first hand.</p>
      </article>
    </div>
    
  </div>
);

export default About;
