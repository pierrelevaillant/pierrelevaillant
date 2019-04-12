import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

const IndexPage = () => (
  <Layout>
    <SEO title="Pierre Le Vaillant – Product designer" keywords={[`portfolio`, `interactive designer`, `product designer`]} />
    <div style={{ overflow: `hidden` }}>
      <Slide bottom>
        <h1>Pierre Le Vaillant</h1>
      </Slide>
    </div>
    <div style={{ overflow: `hidden` }}>
      <Slide bottom delay={150}>
        <h2>Designer, <a href="https://www.area17.com" target="_blank" rel="noopener noreferrer">AREA 17</a></h2>
      </Slide>
     </div>
  </Layout>
)

export default IndexPage
