import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Pierre Le Vaillant – Product designer" keywords={[`portfolio`, `interactive designer`, `product designer`]} />
    <div style={{ overflow: `hidden`, }}>
      <h1>Pierre Le Vaillant</h1>
    </div>
    <div style={{ overflow: `hidden`, }}>
      <h2>Designer, <a href="https://www.area17.com" target="_blank" rel="noopener noreferrer">AREA 17</a></h2>
    </div>
  </Layout>
)

export default IndexPage
