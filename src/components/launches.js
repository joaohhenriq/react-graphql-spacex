import React, { Fragment } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import LaunchItem from './launchItem'

const LAUNCHES_QUERY = gql`
    query LaunchesQuery{
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`

class Launches extends React.Component {
    render() {
        return (
            <div className='container'>
                <h1 className='display-4 my-3'>Launches</h1>
                <Query query={LAUNCHES_QUERY}>
                    {
                        //provided by query - desestructuring
                        ({ loading, error, data }) => {
                            if (loading) return <h4>Loading...</h4>
                            if (error) console.log(error)

                            return <Fragment>
                                {
                                    data.launches.map(launch => (
                                        <LaunchItem key={launch.flight_number} launch={launch} />
                                    ))
                                }
                            </Fragment>
                        }
                    }
                </Query>
            </div>
        )
    }
}

export default Launches