import BaseController from "./BaseController.js";
import Room from "../../models/Room.js"

export default class RoomController extends BaseController {

    joinRoom = ({ roomId }) => {

        this.socket.join(roomId);


    }

    newRoomCreated = ({ roomId, userId }) => {
        const room = new Room({
            name: 'test',
             roomId,
             userId,
        })
        room.save();
        this.socket.emit('new-room-created', {room})
    }

    roomRemoved = async ({roomId}) => {
        await Room.deleteOne({ roomId });
        this.socket.emit('room-removed', { roomId })
    }
}