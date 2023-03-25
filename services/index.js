/*
    GraphQL queries to query andn fetch data from database.
*/
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
                slug
            }
        }
    `
    const result = await request(graphqlAPI, query)

    return result.posts
}

export const getPostDetails = async (slug) => {

    const query = gql`
        query getPostDetails($slug: String!) {
            post(where: { slug: $slug}){
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
                content{
                    raw
                }
            }
        }
    `


    const result = await request(graphqlAPI, query, {slug})

    return result.post
}

export const getCategories = async () => {
    const query = gql`
        query GetCategories(){
            categories{
                name
                slug
            }
        }
    `

    const result = await request(graphqlAPI, query)

    return result.categories
}

export const getRelatedPosts = async (categories, slug) => {
    const query = gql`
        query GetRelatedPosts($slug: String!, $categories: [String!]){
            posts(
                where: { slug_not: $slug, AND: {categories_some: {slug_in: $categories }}} 
                last: 3
            ){
                title
                featuredImage{
                    url
                }
                createdAt
                slug
            }
        }
    `

    const result = await request(graphqlAPI, query, { categories, slug })

    return result.posts
}

export const getRecentPosts = async () => {
    const query = gql`
        query GetRecentPosts(){
            posts(
                orderBy: createdAt_ASC
                last: 3
            ){
                title
                featuredImage{
                    url
                }
                createdAt
                slug
            }
        }
    `

    const result = await request(graphqlAPI, query)

    return result.posts
}

export const getCategoriedPostSlugs = async (category) => {
    const query = gql`
        query GetCategoriedPosts($category: String!){
            posts(
                where: { categories_some: {slug: $category }} 
            ){
                title
                featuredImage{
                    url
                }
                createdAt
                slug
                categories {
                    name
                    slug
                }
                author {
                    bio
                    name
                    id
                    photo {
                    url
                    }
                }
            }
        }
    `

    const result = await request(graphqlAPI, query, { category })

    return result.posts
}

export const getCategoryTitle = async (slug) => {
    const query = gql`
        query GetCategoryTitle($slug: String!){
            categories(
                where: {slug: $slug}
            ){
                name
            }
        }
    `

    const result = await request(graphqlAPI, query, {slug})

    return result.categories
}