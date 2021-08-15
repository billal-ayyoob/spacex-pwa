import { gql } from '@apollo/client';

export const Query_Launch_List = gql`
    query LaunchList {
        launches {
            flight_number
            mission_name
            launch_year
        }
    }
    `;