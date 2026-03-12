const { execSync } = require('child_process');

// A script we will evaluate inside the browser subagent
const script = `
    const name = document.querySelector('.hero-name').getBoundingClientRect();
    const title = document.querySelector('.hero-title').getBoundingClientRect();
    const tags = document.querySelector('.hero-tags').getBoundingClientRect();
    const desc = document.querySelector('.hero-description').getBoundingClientRect();
    console.log("Name left: " + name.left);
    console.log("Title left: " + title.left);
    console.log("Tags left: " + tags.left);
    console.log("Desc left: " + desc.left);
`;

console.log(script);
