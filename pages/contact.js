//Import the Link API to support client-side navigation
import Link from 'next/link'
import Layout from '../components/MyLayout'

export default () => (
  <Layout>
    <h2>Contact Me:</h2>
    <table>

    <tr>
    <b>Email:</b>
    <td>ethanpikedev@gmail.com</td>
    </tr>
    
    <tr>
    <b>Phone:</b>
    <td>+27 81 276 1226</td>
    </tr>

    <tr>
    <b>Github:</b> 
    <td><a href="https://github.com/EthanPikeDev">EthanPikeDev</a></td>
    
    </tr>
    </table>

  </Layout>
)