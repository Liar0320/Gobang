import { GAMEMODE , PLAYERSTATUS } from "./enum";
let gameConfig = {
    mode:GAMEMODE.battleWithFriends,
    turn:PLAYERSTATUS.black,
    scalingRatio:1,
    setScaling(ratio:Number){
        gameConfig.scalingRatio = gameConfig.scalingRatio* ratio;
        abstractChess.size.width = abstractChess.size.width *  ratio;
        abstractChess.size.height = abstractChess.size.height *  ratio;
        abstractChess.cellSize.width = abstractChess.cellSize.width * ratio;
        abstractChess.cellSize.height = abstractChess.cellSize.height * ratio;
        abstractChess.emptySize.top = abstractChess.emptySize.top * ratio;
        abstractChess.emptySize.left = abstractChess.emptySize.left * ratio;
    }
}

let abstractChess = {
    size:{width:275,height:275},
    cellSize:{width: 275/15 , height : 275/15 },
    emptySize:{top:25,left:25},
    containt:initChess([15,15]),
}

function initChess(size:Array<Number>) {
    var result = [];
    for (let i = 0; i < size[0]; i++) {
        if(!Array.isArray(result[i])) result[i] = [];
        for (let j = 0; j < size[1]; j++) {
            result[i][j] = PLAYERSTATUS.empty
        }
    }
    return result;
}

export { gameConfig , abstractChess }