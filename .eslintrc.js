    //https://eslint.org/docs/user-guide/configuring
module.exports = {
    //https://github.com/standard/standard/blob/master/RULES.md
    "extends": "standard",
     "rules":{
         // 去掉驼峰检查
        "camelcase": 0,
        "indent": ["error", 4],
        "semi": ["error", "always"]
     }
};