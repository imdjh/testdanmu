$("#game").danmu({
      top: 0,
      left: 0,
      height: 600,  //弹幕区高度
      width: 800,   //弹幕区宽度
      zindex :99999,   //弹幕区域z-index属性
      speed:7000,      //滚动弹幕的默认速度，这是数值值得是弹幕滚过每672像素所需要的时间（毫秒）
      sumTime:65535,   //弹幕流的总时间
      danmuLoop:false,   //是否循环播放弹幕
      defaultFontColor:"#fff",   //弹幕的默认颜色
      fontSizeSmall:40,     //小弹幕的字号大小
      FontSizeBig:40,       //大弹幕的字号大小
      opacity:"0.8",            //默认弹幕透明度
      topBottonDanmuTime:6000,   // 顶部底部弹幕持续时间（毫秒）
      SubtitleProtection:false,     //是否字幕保护
      positionOptimize:false,         //是否位置优化，位置优化是指像AB站那样弹幕主要漂浮于区域上半部分

      maxCountInScreen: 40,   //屏幕上的最大的显示弹幕数目,弹幕数量过多时,优先加载最新的。
      maxCountPerSec: 10      //每分秒钟最多的弹幕数目,弹幕数量过多时,优先加载最新的。
});

$('#game').danmu('danmuStart');
 $('#game').danmu('addDanmu', { "text":'halo',"color":'white',"size":1,"position":0,"time":$('#game').data("nowTime"),"isnew":""});
$('#game').danmu('addDanmu', JSON.parse(composeDanmu('hao')));
function composeDanmu (text) {
       var struText = {};
             struText ={ "text":text,"color":'white',"size":1,"position":0,"time":$('#game').data("nowTime"),"isnew":""};

                 return JSON.stringify(struText);
}
function addmyname () {$("#game").danmu("addDanmu", [JSON.parse(composeDanmu('djh'))])}
setInterval(addmyname, 86);
