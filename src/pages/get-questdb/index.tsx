import React from "react"

import Layout from "../../theme/Layout"

import { Top } from "../../modules/get-questdb/Top"
import { Products } from "../../modules/get-questdb/Products"
import { CompareFeatures } from "../../modules/get-questdb/CompareFeatures"
import LiveDemo from "../../modules/index-live-demo"

const title = "Get QuestDB"
const description =
  "The fastest open source time-series database for organizations, on premise or on the cloud."

const GetQuestDB = () => (
  <Layout canonical="/get-questdb" description={description} title={title}>
    <Top />
    <Products />
    <CompareFeatures />
    <LiveDemo />
  </Layout>
)

export default GetQuestDB
