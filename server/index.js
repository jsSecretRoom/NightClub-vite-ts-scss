// index.js

const { Server } = require('socket.io');
const http = require('http');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

// Используем Map для хранения tableStates для каждой даты
const tableStatesByDate = new Map();

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('join', (formattedDate) => {
        console.log('User connected to room:', formattedDate);
        socket.join(formattedDate);

        if (!tableStatesByDate.has(formattedDate)) {
            tableStatesByDate.set(formattedDate, Array.from({ length: 16 }, () => ({ reserved: false })));
        }

        io.to(formattedDate).emit('updateTables', tableStatesByDate.get(formattedDate));
    });

    socket.on('reserveTable', (data) => {
        handleTableAction(data, true);
    });

    socket.on('releaseTable', (data) => {
        handleTableAction(data, false);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
    
    function handleTableAction(data, reserve) {
        const { jsnumber, formattedDate } = data;
        console.log(`${reserve ? 'Table' : 'Released table'} ${jsnumber} for date: ${formattedDate}`);
        
        const currentTableStates = tableStatesByDate.get(formattedDate);
        currentTableStates[jsnumber].reserved = reserve;
            
        tableStatesByDate.set(formattedDate, currentTableStates);
        io.to(formattedDate).emit('updateTables', currentTableStates);
    }
});

server.listen(5000, () => {
    console.log("Server is running on port 5000");
});