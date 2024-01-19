// Octokit.js
// https://github.com/octokit/core.js#readme
import { Octokit } from "https://esm.sh/@octokit/core";
const octokit = new Octokit({
    auth: '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'
  })
  
  const data = await octokit.request('GET /users/asharabsaad/repos', {
    username: 'Asharab Saad',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  console.log(data)