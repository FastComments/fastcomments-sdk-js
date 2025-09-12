// Test fixture that intentionally imports Node.js built-ins
// This should fail when loaded in a browser-like environment (happy-dom)
// Used to validate that our testing approach correctly catches Node.js dependencies

const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

module.exports = {
  testNodeImports: () => {
    // Try to use Node.js APIs
    const hash = crypto.createHash('sha256');
    const exists = fs.existsSync('./package.json');
    const dirname = path.dirname(__filename);
    
    return { hash, exists, dirname };
  }
};