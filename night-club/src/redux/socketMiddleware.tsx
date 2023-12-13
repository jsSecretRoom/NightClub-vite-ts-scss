import io from 'socket.io-client';

const socket = io('ваш_сервер_сокетов');

export const socketMiddleware = () => (store) => (next) => (action) => {
  if (action.meta && action.meta.emit) {
    socket.emit(action.meta.emit, action.payload);
  }
  return next(action);
};