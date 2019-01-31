import { GAMEMODE , PLAYERSTATUS } from "./enum";
let gameConfig = {
    mode:GAMEMODE.battleWithFriends,
    turn:PLAYERSTATUS.black,
    turns:[PLAYERSTATUS.black,PLAYERSTATUS.white],
    width:600,
    scalingRatio:1,
    setScaling(ratio:number){
        gameConfig.scalingRatio = gameConfig.scalingRatio* ratio;
        abstractChess.size.width = abstractChess.size.width *  ratio;
        abstractChess.size.height = abstractChess.size.height *  ratio;
        abstractChess.cellSize.width = abstractChess.cellSize.width * ratio;
        abstractChess.cellSize.height = abstractChess.cellSize.height * ratio;
        // abstractChess.emptySize.top = abstractChess.emptySize.top * ratio;
        // abstractChess.emptySize.left = abstractChess.emptySize.left * ratio;
    }
}


class AbstractChess {
    size:rect = {width:0,height:0}
    cellSize:rect = {width:0,height:0}
    containt = null;
    constructor(size:Array<Number>,height:number,width:number) {
        this.containt = this._initChess(size);
        this._initSize(height,width);
    }

    _initChess(size:Array<Number>) {
        var result = [];
        for (let i = 0; i < size[0]; i++) {
            if(!Array.isArray(result[i])) result[i] = [];
            for (let j = 0; j < size[1]; j++) {
                result[i][j] = PLAYERSTATUS.empty
            }
        }
        return result;
    }

    _initSize(height:number,width:number){
        this.size.width = width;
        this.size.height = height;
        this.cellSize.width = 2*width/14;
        this.cellSize.height = 2*height/14;
    }

    _isRules(boardLayout,current:Array<number>,turn){
        var matchOpreat = [1, 1];
        var method = 0;
        // 用for比while应该更好
        while (++method !== 5) {
            var count = { forWard: 0, backWard: 0 };
            var _rows = current[1];
            var _cols = current[0];

            switch (method) { // 五子棋的四种获胜情况
            case 1:
                matchOpreat = [1, 0]; break; // 1,1 1,2 1,3 1,4 1,5
            case 2:
                matchOpreat = [1, 1]; break; // 1,1 2,2 3,3 4,4 5,5
            case 3:
                matchOpreat = [0, 1]; break; // 1,1 2,1 3,1 4,1 5,1
            case 4:
                matchOpreat = [-1, 1]; break; // 1,5 2,4 3,3 4,2 5,1
            }
            // 判断上一行是否存在(rows - matchOpreat[1]>=0)
            while (_rows - matchOpreat[1] >= 0 && boardLayout[_rows = _rows - matchOpreat[1]][_cols = _cols - matchOpreat[0]] === turn) {
                count.forWard++;
            }
            _rows = current[1];
            _cols = current[0];
            // 判断下一行是否存在(rows + matchOpreat[1]<=14)
            while (_rows + matchOpreat[1] <= 14 && boardLayout[_rows = _rows + matchOpreat[1]][_cols = _cols + matchOpreat[0]] === turn) {
                count.backWard++;
            }
            if (count.backWard + count.forWard >= 4) return true;
        }
        return false;
    }

    //plyaer无法使用cc.enmu枚举接收
    setCell(location:cc.Vec2,player){
        var x:number = Math.round((location.x + this.size.width)/this.cellSize.width);
        var y:number = Math.round((location.y + this.size.height)/this.cellSize.height);
        var isExist = true;
        if(this.containt[x][y] === PLAYERSTATUS.empty) {
            isExist = false;
            this.containt[x][y] = player;
        }
        return {
            isExist:isExist,
            pois: !isExist && cc.v2((x - 7)*this.cellSize.width,(y - 7)*this.cellSize.height),
            bol: !isExist && this._isRules(this.containt,[y,x],player)
        };
    }
}

let abstractChess = new AbstractChess([15,15],275,275);


// let abstractChess = {
//     size:{width:275,height:275},
//     cellSize:{width: 275/15 , height : 275/15 },
//     emptySize:{top:25,left:25},
//     containt:initChess([15,15]),
// }

// let gameCtrls = {
//     gameStatus:
// }

interface player{
    name:string
    id:string
    icon:string
}

interface rect{
    width:number,
    height:number
}

// class player {
//     name:string
//     id:string
//     icon:string
//     constructor(name:string,id:string,icon:string) {
//         this.name = name;
//         this.id = id;
//         this.icon = icon
//     }
// }
export { gameConfig , abstractChess , player }