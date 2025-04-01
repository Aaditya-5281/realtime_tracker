
# Real-Time Location Tracker

A real-time location tracking application built with Node.js, Express, and Socket.IO that allows users to share their location with others in real-time.

## Features

- Real-time location sharing
- Live updates when users connect/disconnect
- Web-based interface
- Socket.IO for real-time communication

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

## Project Architecture
![Screenshot](https://github.com/your-username/realtime_tracker/raw/main/images/Screenshot%202025-04-01%20151735.png)


## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd realtime_tracker
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
node app.js
```

The application will be available at `http://localhost:3000`

## Project Structure

```
realtime_tracker/
├── app.js              # Main server file
├── public/            # Static files (CSS, JS, etc.)
├── views/             # EJS template files
│   └── index.ejs      # Main page template
└── package.json       # Project dependencies
```

## Dependencies

- express: Web application framework
- socket.io: Real-time bidirectional communication
- ejs: Template engine

## Usage

1. Open the application in your web browser
2. Allow location access when prompted
3. Your location will be shared with other connected users in real-time
4. You'll see other users' locations as they connect

## API Endpoints

- `GET /`: Main application page
- WebSocket events:
  - `sendLocation`: Emitted when a user shares their location
  - `receiveLocation`: Broadcasted to all users when a location is received
  - `userDisconnected`: Broadcasted when a user disconnects

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.
