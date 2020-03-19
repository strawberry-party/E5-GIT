import { createStore } from 'redux';

var rawInitState = {
    userId: "3000",
    userName: "전승규",
    userGender: "M",
    userPhone: "01033333333",
    userPW: "lorem12",
    rooms: [
        { id: 2, writer: '태형', dep: '대전', dest: '우한', desc: '추가정보 없음', joinedUsers: ["2000", "3000"], maxNum: 4 },
        { id: 3, writer: '신성철', dep: '카이스트', dest: '디지스트', desc: '전총장님 나가신다', joinedUsers: ["2000", "3000"], maxNum: 4},
    ],
    maxId: 3, //db와 연동되면 roomlist table 의 최대 길이로 설정해야 할 것임.
    notices: [
        { id: 1, title: '중요공지', desc: '카택전 v0.1 런칭' }
    ]
};

var myRooms = rawInitState.rooms.filter(function (room) {
    if (room.joinedUsers.indexOf(rawInitState.userId) > -1) { //a.indexOf(x) : a라는 배열에 x와 일치하는 원소가 있을 시 x의 index 반환
        return true;
    }
    return false;
});

var initState = { ...rawInitState, myRooms };

function reducer(state = initState, action) {
    var newState, newRooms, newMyRooms, room;
    var userId = state.userId;
    if (action.type === 'create') { //방 만들기
        var newId = state.maxId + 1;
        room = { id: newId, writer: action.writer, dep: action.dep, dest: action.dest, desc: action.desc, joinedUsers: [state.userId], maxNum: action.maxNum };
        // console.log(room);
        newRooms = [...state.rooms, room];
        newMyRooms = [...state.myRooms, room]
        newState = { ...state, rooms: newRooms, maxId: newId, myRooms: newMyRooms };
        return newState;
    }

    if (action.type === 'join') { //방에 참가
        room = state.rooms.filter(function(room){ //room: 참가하고자 하는 방 (참고로 배열)
            if(room.id === action.roomId){
                return true;
            } else {
                return false;
            }
        });
        var joinRoom = room[0];

        if (joinRoom.joinedUsers.length === joinRoom.maxNum) { //정원이 다 찬 경우
            window.alert("정원이 다 찼습니다.")
            return state;
        }

        if(joinRoom.joinedUsers.indexOf(userId) > -1) { //userId 가 이미 joinedUsers에 있는 경우
            window.alert('이미 참여한 방입니다');
            return state;
        }

        joinRoom.joinedUsers.push(userId);
        // console.log("joined", room, userId, room.joinedUsers);
        newMyRooms = [...state.myRooms, joinRoom];
        newState = { ...state, myRooms: newMyRooms };
        return newState;
    }

    if (action.type === 'delete') {
        newRooms = state.rooms.filter(function (room) { //방 삭제
            if (room.id === action.roomId) {
                return false;
            }
            return true;
        });

        newMyRooms = state.myRooms.filter(function (myRoom) { //'나의 방'에도 삭제할 방이 있으면 삭제
            if (myRoom.id === action.roomId) {
                return false;
            }
            return true;
        });

        newState = { ...state, rooms: newRooms, myRooms: newMyRooms };
        return newState;
    }

    if (action.type === 'quit') { //방 나가기
        newMyRooms = state.myRooms.filter(function(myRoom){ 
            if (myRoom.id !== action.roomId) return true;
            else return false;
        });
        
        room = state.rooms.filter(function(room){ //room: 나가고자 하는 방 (참고로 배열)
            if(room.id === action.roomId) return true;
            else return false;
        });
        var quitRoom = room[0];

        var newJoinedUsers = quitRoom.joinedUsers.filter(function (user) { //나간 사람을 제외한 새로운 joinedUsers
            if (user === userId) return false;
            else return true;
        })
        
        quitRoom.joinedUsers = newJoinedUsers;
        newRooms = state.rooms.filter(function(room){
            if(room.id === quitRoom.id) return false;
            else return true;
        });
        newRooms.push(quitRoom);
        // console.log("quit", room, userId, room.joinedUsers);
        newState = { ...state, rooms: newRooms, myRooms: newMyRooms };
        return newState;
    }
    return state;
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
