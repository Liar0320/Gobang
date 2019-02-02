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
import { PLAYERSTATUS, ABSTRACTFALLDOWN } from "./enum";
import { abstractChess , gameConfig , i_setCellResult } from "./gameConfig";
@ccclass
export default class NewClass extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    @property({type:cc.Enum(PLAYERSTATUS),serializable:true,displayName:"代表方"})
    turn = PLAYERSTATUS.empty

    @property({type:cc.Node,serializable:true,displayName:"棋盘"})
    chessBoard:cc.Node = null;

    @property({type:cc.Prefab,serializable:true,displayName:"黑色棋子"})
    chessBlack: cc.Prefab = null;

    @property({type:cc.Prefab,serializable:true,displayName:"白色棋子"})
    chessWhite: cc.Prefab = null;

    @property(cc.Node)
    preChess:cc.Node = null;
    
    @property
    userId:string = '';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        console.log(this.preChess.active);
        this.chessBlack.data.setScale(gameConfig.scalingRatio);
        this.chessWhite.data.setScale(gameConfig.scalingRatio);
        this.chessBoard.on(cc.Node.EventType.TOUCH_START,this.fallChess,this);
    }

    fallChess(e:cc.Event.EventTouch){
        console.log(this.preChess.active);
        if(this.turn !== gameConfig.turn) return false;
        var pois = this.chessBoard.convertToNodeSpaceAR(e.getLocation());
        var result = abstractChess.setPreCell(pois);
        if(this.preChess.active === false) this.preChess.active = true;
        if(result){
            this.preChess.setPosition(result);
        }
    }




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
