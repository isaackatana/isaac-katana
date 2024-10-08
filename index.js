const { exec } = require('child_process');

// Function to start the back
function startBack() {
  const back = exec('npm run back', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error starting back: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Back stderr: ${stderr}`);
    }
    console.log(`Back stdout: ${stdout}`);
  });

  back.stdout.on('data', (data) => {
    console.log(`[Back]: ${data}`);
  });
}

// Function to start the front
function startFront() {
  const front = exec('npm run front', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error starting front: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Front stderr: ${stderr}`);
    }
    console.log(`Front stdout: ${stdout}`);
  });

  front.stdout.on('data', (data) => {
    console.log(`[Front]: ${data}`);
  });
}

// Start both back and front
startBack();
startFront();
