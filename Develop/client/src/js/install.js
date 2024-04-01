const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default behavior
  event.preventDefault();
  // Store the event to use it later
  deferredPrompt = event;
  // Show the install button
  butInstall.style.display = 'block';
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  // Hide the install button
  butInstall.style.display = 'none';
  // Show the installation prompt
  deferredPrompt.prompt();
  // Wait for the user to respond
  const choiceResult = await deferredPrompt.userChoice;
  if (choiceResult.outcome === 'accepted') {
    console.log('User accepted the installation prompt');
  } else {
    console.log('User dismissed the installation prompt');
  }
  // Clear the deferredPrompt variable
  deferredPrompt = null;
});

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('App installed successfully');
});
