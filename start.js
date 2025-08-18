// start.js
const { execSync } = require("child_process");

const [major] = process.versions.node.split(".");
const nodeMajor = parseInt(major, 10);

try {
  if (nodeMajor >= 17) {
    console.log(`Node ${nodeMajor} detected → using legacy provider flag`);
    execSync("set NODE_OPTIONS=--openssl-legacy-provider && react-scripts start", {
      stdio: "inherit",
      shell: true
    });
  } else {
    console.log(`Node ${nodeMajor} detected → starting normally`);
    execSync("react-scripts start", {
      stdio: "inherit",
      shell: true
    });
  }
} catch (err) {
  process.exit(1);
}
