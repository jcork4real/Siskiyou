import * as React from "react"
import Layout from "../components/layout"
import Hero from '../components/hero.js'
import Statement from '../components/statement.js'
import Features from '../components/features.js'
import USP from '../components/usp.js'
import Closing from '../components/closing.js'

const IndexPage = () => {
  return (
    <Layout>
      <Hero/>
      <Statement/>
      <Features/>
      <USP/>
      <Closing/>
    </Layout>
  )
  }

export default IndexPage
