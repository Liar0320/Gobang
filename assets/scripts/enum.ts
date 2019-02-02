// 棋子
enum PLAYERSTATUS {
    black,
    white,
    empty
}

enum GAMEMODE {
    battle,
    robot,
    rank,
    battleWithFriends
}

enum GAMESTATUS {
    waiting,
    running,
    ended
}

// enum ABSTRACTFALLDOWN {
//     exist,
//     preClick,
//     falldown
// }

//     waiting:-1,
//     running:-1,
//     ended:-1
// })

export { 
    PLAYERSTATUS,
    GAMEMODE,
    GAMESTATUS
};