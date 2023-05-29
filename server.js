const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

const users = [];

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        const data = JSON.parse(message);

        if (data.type === 'login') {
            const user = {
                id: ws,
                username: data.username
            };
            users.push(user);
            broadcastMessage({ type: 'userList', users: getUsers() });
        } else if (data.type === 'message') {
            const messageData = {
                username: data.username,
                text: data.text
            };
            broadcastMessage({ type: 'message', message: messageData });
        }
    });

    ws.on('close', () => {
        const user = getUser(ws);
        if (user) {
            users.splice(users.indexOf(user), 1);
            broadcastMessage({ type: 'userList', users: getUsers() });
        }
    });
});

function broadcastMessage(message) {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(message));
        }
    });
}

function getUsers() {
    return users.map((user) => user.username);
}

function getUser(ws) {
    return users.find((user) => user.id === ws);
}