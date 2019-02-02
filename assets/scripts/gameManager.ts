// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
import { PLAYERSTATUS , GAMEMODE  ,GAMESTATUS } from "./enum";
import { gameConfig,abstractChess ,i_XY } from "./gameConfig"

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab)
    chessBlack: cc.Prefab = null;

    @property(cc.Prefab)
    chessWhite: cc.Prefab = null;

    @property(cc.Node)
    player01: cc.Node = null;

    @property(cc.Node)
    player02: cc.Node = null;
    
    @property({type:cc.Node,serializable:true,displayName:"棋盘"})
    chessBoard:cc.Node = null;

    @property({type:cc.Node,serializable:true,displayName:"最后一个提示棋子"})
    lastDownChess:cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    }

    start () {
        this.lastDownChess.zIndex = 999;
        this.chessBoard.getComponentsInChildren('preChess').forEach(v=>{
            v.gameMange = this;
        })
    }

    init () {

    }

    changeTurn(){   
        setTimeout(()=>{
            gameConfig.turn =   gameConfig.turn === gameConfig.turns[0] ?
                            gameConfig.turns[1] :
                            gameConfig.turns[0] ;
        })
    }

    receive(xy:i_XY){
        var result =   abstractChess.setCell(xy);
        if(result.bol){
            console.log("胜利");
            gameConfig.status = GAMESTATUS.ended;
        }else{
            this.changeTurn();
        }
        let chessPrefab = gameConfig.turn === PLAYERSTATUS.black ? this.chessBlack:this.chessWhite;
        let chess = cc.instantiate(chessPrefab);
        //怎么阻止事件传递
        // chess.on(cc.Node.EventType.TOUCH_START,(e:cc.Event)=>{e.stopPropagation();})
        chess.setParent(this.chessBoard);
        chess.setPosition(result.pois);
        this.lastDownChess.setPosition(result.pois);

    }

    stepCallBack(){
        var queueLen = abstractChess.queue.length;
        if(queueLen <2) return ;
        var len = this.chessBoard.children.length;
        this.chessBoard.children.splice(len-3 , 2);

        for (let i = queueLen -1 ; i > queueLen - 3; i--) {
            const xy = abstractChess.queue[i].xy;
            abstractChess.containt[xy.x][xy.y] = PLAYERSTATUS.empty;
            abstractChess.queue.splice(i,1);
        }

        var pois:cc.Vec2 = abstractChess.queue.length === 0 ? cc.v2(-9999,-9999) :
                    abstractChess.trasnferCellToSize(abstractChess.queue[abstractChess.queue.length-1].xy)
        this.lastDownChess.setPosition(pois);
   
    }


 


    update (dt) {
   
    }
}
