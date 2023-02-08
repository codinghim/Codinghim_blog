import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT

export const getPosts = async () => {
    const query = gql`
        query getPosts {
            postsConnection {
                edges {
                    node {
                        author {
                            bio
                            name
                            id
                            photo {
                            url
                            }
                        }
                        categories {
                            name
                            slug
                        }
                        createdAt
                        excerpt
                        slug
                        title
                        featuredImage {
                            url
                        }
                    }
                }
            }
        }
    `

    const result = await request(graphqlAPI, query)
    return result.postsConnection.edges
}

export const getFeaturedPosts = async () => {
    const query = gql`
        query GetFeaturedPosts(){
            posts(where: {featuredPost:true}){
                title
                featuredImage{
                    url
                }
            }
        }
    `
    const result = await request(graphqlAPI, query)

    return result.posts
}