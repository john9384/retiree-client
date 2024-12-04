import React from "react"
import { Welcome } from "./sections/Welcome"
import { BusinessFeatures } from "./sections/Features"
import { HowItWorks } from "./sections/HowItWorks"
import { useAuth } from "contexts/AuthContext"
import { BlankPageLoader } from "components/Loaders"

const HomePage = () => {
  const { state, dispatch } = useAuth()
  return (
    <React.Fragment>
      <Welcome />
      <BusinessFeatures />
      <HowItWorks />
      {state.isLoading && <BlankPageLoader />}
    </React.Fragment>
  )
}

export default HomePage
