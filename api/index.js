
import app from './index.js';     // Option A
// import app from './api/index.js'; // Option B
const port = 3001;
app.listen(port, () => console.log(`Local dev: http://localhost:${port}`));
