const { exec } = require('child_process');

// Start the server
exec('npm run server', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error starting server: ${stderr}`);
    return;
  }
  console.log(`Server output: ${stdout}`);
});

// Start the client
exec('npm run client', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error starting client: ${stderr}`);
    return;
  }
  console.log(`Client output: ${stdout}`);
});

