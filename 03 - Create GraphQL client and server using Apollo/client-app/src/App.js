import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const App = () => (
  <Query
    query={gql`
      {
        hello
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>

      return data.hello
    }}
  </Query>
)

export default App