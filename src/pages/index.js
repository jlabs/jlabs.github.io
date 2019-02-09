import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Listing from "../components/listing"

import SEO from "../components/seo"
import Image from "../components/image"

const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Listing />
  </Layout>
)

export default IndexPage
