//Import the Link API to support client-side navigation
import Link from 'next/link'
import Layout from '../components/MyLayout'
import Image from 'react-bootstrap/Image'



export default () => (
  <Layout>
    <h1>Technologies I use:</h1>
    <p>Listed below are the core Technologies and frameworks I use to develop full stack web applications.</p>

    <br/>
    <ul>
    <li>HTML5</li>
    <li>CSS3</li>
    <li>JavaScript</li>
    <li>React</li>
    <li>Redux</li>
    <li>NodeJS</li>
    <li>NextJS</li>
    <li>Express</li>
    <li>MongoDB</li>
    </ul>

    <br />
    <hr />

    <h1>Projects:</h1>
    <br />

    <h2>iTunes Search app:</h2>
    <p>This is a full-stack application created using react and express.</p>
    <p>The front-end of the app is used built with React and allows the user to search for anything on the iTunes store.</p>
    <p>The Back end of the app is built with express and fetches the data from the iTunes API.</p>
    <br />
    <hr />
    <h3>Demo:</h3>
    <Image style={{width: '800px', height: '400px'}} src="/static/images/yerr.gif" thumbnail />
    <br />
    <Link href="https://dashboard.heroku.com/"><a>Live Demo:</a></Link>
    


   
    

  </Layout>
)