const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "5e8ecd4a629b418ca05b094d2be2bb1f";

const scopes = [
    "streaming",
    "user-read-email",
    "user-read-private",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}`;

// loginUrl = "https://accounts.spotify.com/authorize?client_id=5e8ecd4a629b418ca05b094d2be2bb1f&response_type=code&redirect_uri=https://localhost:3000/&scope=streaming%20user-read-email%20user-read-private"