//Import the Link API to support client-side navigation
import Link from 'next/link'
import Layout from '../components/MyLayout'

export default () => (
  <Layout>
    <h2>About Me:</h2>
    <p>I am a full-stack web developer with a passion for creating clean, creative and functional full-stack web applications.
    My preferred technology stack is the <em>MERN</em> stack. <br /> MongoDB, Express, React and NodeJS. I take pride in creating
    modern and attractive User Interfaces and ensuring the user experience is top notch.</p>
    <br />

    <h2>Why I love programming:</h2>
    <p>I have always loved problem solving and finding the perfect solution for the task. What I enjoy the most about web devlopment, is the sheer amount of 
    diverse options <br /> to solving problems.</p>

    <h4>What learning to code has done for me:</h4>

    <ul>
    <li>Allowed me to think differently or "outside the box" as some might call it.</li>
    <li>Find different solutions to problems that other people might not have done before.</li>
    <li>Built cool projects.</li>
    <li>Met likeminded people and contributed to the developer community.</li>
    </ul>

    <h2>Aspirations:</h2>
    <p>I aspire to become a full time, professional developer where I can grow and enhance my skills. Working with a team on projects that we are passionate about
    and that will make a difference in the world.</p>
  </Layout>
)