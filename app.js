const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the profile page
app.get('/', (req, res) => {
    const profileData = {
        name: 'Victor',
        field: 'Cloud Computing',
        batch: '2022',
        photo: 'https://storage.cloud.google.com/profil_ku/foto%20bangkit.PNG' // Ganti dengan nama file foto Anda
    };
    res.render('profile', { profile: profileData });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});