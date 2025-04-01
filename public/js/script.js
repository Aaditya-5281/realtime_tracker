// Initialize Socket.IO connection
const socket = io();
let map; // Declare map as a global variable

// Listen for connection events


if (navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
        const { latitude, longitude } = position.coords;
        socket.emit('sendLocation', { latitude, longitude });
    },
    (error) => {
        console.error('Error getting location:', error);
    },
    {
        enableHighAccuracy: true,
        timeout: 3000,
        maximumAge: 0
    });
}

// Initialize the map
map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">Aaditya</a>'
}).addTo(map);

const markers = {};

socket.on("receiveLocation", (data) => {
    const { id, latitude, longitude } = data;
    
    // Check if this user already has a marker
    if (markers[id]) {
        // Update existing marker position
        markers[id].setLatLng([latitude, longitude]);
    } else {
        // Create a new marker for this user
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    }
    
    // You can add a popup to the marker if needed
    markers[id].bindPopup(`User ${id}`).openPopup();
    
    // Pan the map to this location
    map.setView([latitude, longitude], map.getZoom());
});

socket.on("userDisconnected", (id) => {
    if (markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
});