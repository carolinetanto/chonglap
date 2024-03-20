import { fetchAPI } from "./base";

export async function getPosts(first = 10) {
  const data = await fetchAPI(
    `query FetchPosts($first: Int = 10) {
        posts(first: $first) {
          nodes {
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
                node {
                    name
                }
            }
            slug
            title
          }
        }
      }`,
    {
      variables: {
        first,
      },
    }
  );

  return data?.posts?.nodes;
}

export async function getProducts(first = 10) {
  const data = await fetchAPI(
    `query FetchProducts($first: Int = 10) {
      products(first: $first) {
        nodes {
          slug
          title
          productField {
            thumbnail {
              node {
                sourceUrl
              }
            }
            category {
              nodes {
                name
              }
            }
          }
        }
      }
    }`,
    {
      variables: {
        first,
      },
    }
  );
  
  return data?.products?.nodes;
}

export async function getBlogs(first = 10) {
  const data = await fetchAPI(
    `query FetchBlogs($first: Int = 10) {
      blogs(first: $first) {
        nodes {
          slug
          title
          blogField {
            thumbnail {
              node {
                sourceUrl
              }
            }
            category {
              nodes {
                name
              }
            }
          }
        }
      }
    }`,
    {
      variables: {
        first,
      },
    }
  );
  
  return data?.blogs?.nodes;
}

export async function getEvents(first = 10) {
  const data = await fetchAPI(
    `query FetchEvents($first: Int = 10) {
      events(first: $first) {
        nodes {
          slug
          title
          eventField {
            thumbnail {
              node {
                sourceUrl
              }
            }
            category {
              nodes {
                name
              }
            }
          }
        }
      }
    }`,
    {
      variables: {
        first,
      },
    }
  );
  
  return data?.events?.nodes;
}
export async function getMembers(first = 10) {
  const data = await fetchAPI(
    `query FetchMembers($first: Int = 10) {
      members(first: $first) {
        nodes {
          title
          memberField {
            profilePicture {
              node {
                sourceUrl
              }
            }
            category {
              nodes {
                name
              }
            }
            position
            social {
              url
            }
          }
        }
      }
    }`,
    {
      variables: {
        first,
      },
    }
  );
  
  return data?.members?.nodes;
}

export async function getPostBySlug(slug: string) {
    const data = await fetchAPI(
      `query GetPost($id: ID = "") {
      post(id: $id, idType: SLUG) {
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
            node {
                name
            }
        }
        slug
        title
      }
    }`,
      {
        variables: {
          id: slug,
        },
      }
    );
  
    return data?.post;
  }
  
  export async function getProductBySlug(slug: string) {
    const data = await fetchAPI(
      `query GetProduct($id: ID = "") {
        product(id: $id, idType: SLUG) {
          slug
          title
          productField {
            thumbnail {
              node {
                sourceUrl
              }
            }
            gallery {
              nodes {
                sourceUrl
              }
            }
            category {
              nodes {
                name
              }
            }
            description
            store {
              hongKongIsland {
                name
                address
              }
              kowloon {
                name
                address
              }
              newTerritories {
                name
                address
              }
            }
            brand {
              node {
                sourceUrl
              }
            }
          }
        }
      }`,
      {
        variables: {
          id: slug,
        },
      }
    );
  
    return data?.product;
  }

  export async function getBlogBySlug(slug: string) {
    const data = await fetchAPI(
      `query GetBlog($id: ID = "") {
        blog(id: $id, idType: SLUG) {
          slug
          title
          blogField {
            thumbnail {
              node {
                sourceUrl
              }
            }
            gallery {
              nodes {
                sourceUrl
              }
            }
            category {
              nodes {
                name
              }
            }
            source {
              url
              title
            }
            content
          }
        }
      }`,
      {
        variables: {
          id: slug,
        },
      }
    );
  
    return data?.blog;
  }

  export async function getEventBySlug(slug: string) {
    const data = await fetchAPI(
      `query GetEvent($id: ID = "") {
        event(id: $id, idType: SLUG) {
          slug
          title
          eventField {
            thumbnail {
              node {
                sourceUrl
              }
            }
            gallery {
              nodes {
                sourceUrl
              }
            }
            category {
              nodes {
                name
              }
            }
            dateStart
            dateEnd
            description
          }
        }
      }`,
      {
        variables: {
          id: slug,
        },
      }
    );
  
    return data?.event;
  }