import React from "react"
import Slide from 'react-reveal/Slide';

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Pierre Le Vaillant – Product designer" keywords={[`portfolio`, `interactive designer`, `product designer`]} />
    <div style={{ overflow: `hidden`, }}>
      <Slide bottom>
        <h1>Pierre Le Vaillant</h1>
      </Slide>
    </div>
    <div style={{ overflow: `hidden`, }}>
      <Slide bottom>
        <h2>Designer, <a href="https://www.area17.com" target="_blank" rel="noopener noreferrer">AREA 17</a></h2>
      </Slide>
    </div>
  </Layout>
)

export default IndexPage
