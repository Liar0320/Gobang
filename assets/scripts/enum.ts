// 棋子
const PLAYERSTATUS = cc.Enum({
    black:-1,
    white:-1,
    empty:-1
})

const GAMEMODE = cc.Enum({
    battle:-1,
    robot:-1,
    rank:-1,
    battleWithFriends:-1
})

export { 
    PLAYERSTATUS,
    GAMEMODE
};