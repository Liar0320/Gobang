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

    @property(cc.Prefab)
    chessBlack: cc.Prefab = null;

    @property(cc.Prefab)
    chessWhite: cc.Prefab = null;

    @property(cc.Node)
    player01: cc.Node = null;

    @property(cc.Node)
    player02: cc.Node = null;

    @property
    currentColor: Number = PLAYERSTATUS.black;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        if(gameConfig.mode  === GAMEMODE.battleWithFriends) console.log("和好友对战");
        
    }

    init () {

    }

    boardInit () {

    }

    // update (dt) {}
}
