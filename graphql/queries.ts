import { gql } from 'graphql-request';

export const GET_CORPORATE_LANDING_PAGE = gql`
    query GetCorporateLandingPage {
        landingPages(where: {key: "corporateTraining"}) {
            title
            subtitle
            stage
            id
            cta
            metrics {
                ... on Metric {
                    id
                    label
                    stage
                    value
                    key
                }
            }
            key
            prices {
                amount
                baseFeatures
                discount
                icon
                id
                specialFeatures
                title
                unsupportedFeatures
            }
        }
    }
`;