export const getUsername = async (username) => {
    const data = JSON.stringify({
        query: `
        query GithubRepoQeury($userName: String!){ 
            user (login:$userName) {
            name
            avatarUrl
            bio
            name
            followers {
                totalCount
                }
            following {
            totalCount
                }
            starredRepositories {
            totalCount
                }
            location
            twitterUsername
            repositories(privacy: PUBLIC, first: 20, orderBy: {direction: DESC, field: CREATED_AT}) {
                totalCount
                    edges {
                    node {
                        name
                        updatedAt
                        stargazerCount
                        forkCount
                        description
                        url
                        languages(first: 1) {
                        edges {
                            node {
                            color
                            name
                            }
                        }
                        }
                        }
                    }
            }
            }
        }`,
        variables: {
            username: username,
        },
    });

    const body = data;

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer "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"`,
        },
        body: body,
    };

    const response = await fetch(endpoint, options);
    const dataOutput = await response.json();
    console.log(dataOutput);
};
