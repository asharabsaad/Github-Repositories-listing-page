// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: 'YOUR-TOKEN'
  })
  
  await octokit.request('GET /orgs/{org}/repos', {
    org: 'ORG',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })