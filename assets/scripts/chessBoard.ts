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
import { PLAYERSTATUS , GAMEMODE } from "./enum";
import { gameConfig } from "./gameConfig"
@ccclass
export default class NewClass extends cc.Component {

    // @property({type:cc.Node,serializable:true,displayName:"选手一"})
    // player01:cc.Node = null;

    // @property({type:cc.Node,serializable:true,displayName:"选手二"})
    // player02:cc.Node = null;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
 
    }

    start () {
        if(gameConfig.mode  === GAMEMODE.battleWithFriends) console.log("和好友对战");
        this.node.height = this.node.width * gameConfig.scalingRatio;

        // var player01 = this.player01.getComponent('player');
        // var player02 = this.player02.getComponent('player');
        // this.playerSetTurn(player01,player02);

        // this.node.on(cc.Node.EventType.TOUCH_START,player01.fallChess,player01);
        // this.node.on(cc.Node.EventType.TOUCH_START,player02.fallChess,player02)
        // let firstNode = cc.instantiate(this.chessBlack);
        // firstNode.setParent(this.chessBoard);
        // firstNode.setPosition(-abstractChess.size.width,abstractChess.size.height);
    }


    // changeTurn(){
    //     gameConfig.turn =   gameConfig.turn === gameConfig.turns[0] ?
    //                         gameConfig.turns[1] :
    //                         gameConfig.turns[0] ;
    // }


    // playerSetTurn (player01,player02) {
    //     player01 = player01 || this.player01.getComponent('player');
    //     player02 = player02 || this.player02.getComponent('player');
    //     var turns = gameConfig.turns;
    //     turns.push(turns.shift())
    //     player01.turn = turns[0];
    //     player02.turn = turns[1];
    // }

    // update (dt) {}
}
