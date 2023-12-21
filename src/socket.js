import { io } from 'socket.io-client';

const URL = 'http://localhost:3001';

// const io = new Server({
//   cors: {
//     origin: "http://localhost:3000"
//   }
// });

// io.listen(3001);
export const socket = io(URL);
