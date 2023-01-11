async function run() {
  console.log(`Function was run at ${new Date().toLocaleString()}`);
  const repo = process.env.REPO_URL;
  if (!repo) {
    console.error("REPO_URL not set");
    process.exit(1);
  }
  console.log({ repo });
}

run();
