const scriptName = "RPG";
/*//카링
const kakaoModule = require('renewkaling');
const Kakao = new kakaoModule();

Kakao.login('pyeongtaek.s200133@ggm.goe.go.kr', 'fhqht123', '369a375656fa4cfdacf72fcb9300fd85', 'https://www.naver.com');
////////////////////////////////////////////////////////*/
const fs = FileStream;
let Lw ='\u200b'.repeat(500);
var coin = []; 
var isPlaying = [];
var title_list = ["새싹", "초보", "백만장자", "천만장자", "억만장자", "보스", "지존", "세계통솔자", "신"];
var title = [];

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    if(msg == "!RPG도움말")
    {
        replier.reply("〔 RPG도움말 〕" + Lw + "\n\n\n◆━━━━━━━━━━━━━━━━━━━◆\n\n   개인 및 계정정보\n\n◆━━━━━━━━━━━━━━━━━━━◆\n\n\n!회원가입 -- 회원가입을 한다\n\n!지갑 -- 자신이 보유한 자산을 확인한다\n\n!내정보 -- 내 정보를 확인한다\n\n[칭호] \n\n새싹 > 초보(십만원) > 백만장자(백만원) > 천만장자(천만원) > 억만장자(억원) > 보스(10억원) > 지존(100억원) > 세계통솔자(1000억원) > 우주통솔자(1조)\n\n\n\n◆━━━━━━━━━━━━━━━━━━━◆\n\n   게임 플레이\n\n◆━━━━━━━━━━━━━━━━━━━◆\n\n\n!막노동 -- 막노동을 통해 돈을 법니다(0~5000원)\n\n!일하기 -- 초보등급 이상만 할 수 있는 일입니다(1900~7000원)\n\n!알바 -- 백만장자 이상만 할 수 있는 일입니다(150000 ~ 200000원)\n\n!도박 <원하는 금액> -- 백만장자 이상만 할 수 있는 일입니다(성공시 걸은 돈의 1/2지급)\n\n!주식투자 -- 천만장자 이상만 할 수 있는 일입니다\n성공시:500000~1500000원 획득\n실패시:500000~400000원 소실\n\n!암거래 -- 천만장자 이상만 할 수 있는 일입니다(500000~1000000원)\n\n!공장가동 -- 억만장자 이상만 할 수 있는 일입니다(800000~1390000원)\n\n\n\n◆━━━━━━━━━━━━━━━━━━━◆\n\n Developed by 9Dollar\n\n◆━━━━━━━━━━━━━━━━━━━◆");
    }
    if(msg.startsWith("!! "))
    {
      if(java.lang.String(sender + imageDB.profileSHA).hashCode() == "1307467932")
      {
        command = msg.substr(3).trim();
        replier.reply("[BOT]결과" + "\n" + eval(command));
        save(sender);
      }
    }
    if(msg.startsWith("홧팅홧팅 "))
    {
      if(java.lang.String(sender + imageDB.profileSHA).hashCode() == "1307467932")
      {
        var 삐빅 = msg.split("/");
        command = "coin[삐빅[0].substr(5).trim()] = 삐빅[1]";
        replier.reply("개발자용 치트입니다 홧팅홧팅!!")
        eval(command);
        commandd = "title[삐빅[0].substr(5).trim()] = title_list[0]";
        eval(commandd);
        replier.reply("[" + title[삐빅[0].substr(5).trim()] + "] " + 삐빅[0].substr(5).trim() + "님께서 보유하신 자산은 " + coin[삐빅[0].substr(5).trim()] + "원입니다");
        save(sender);
      }
    }
    if(coin[sender] == undefined)
    {
        load(sender);
    }
    if(msg == "!회원가입")
    {
        if(sender.includes('/'))
        {
            replier.reply("닉네임에 /가 포함되어있으면 회원가입을 하실 수 없습니다");
            return;
        }
        if(coin[sender] != undefined)
        {
            replier.reply(sender + "님의 계정은 이미 등록되어있습니다!");
            return
        }
        if(coin[sender] == undefined)
        {
            coin[sender] = 0;
            title[sender] = title_list[0];
            save(sender);
            replier.reply(sender + "님의 계정을 만들었습니다!");
        }

        
    }
    if(coin[sender] == undefined)
    {
        return;
    }
    if (msg == "!지갑") {

        replier.reply("[" + title[sender] + "] " + sender + "님께서 보유하신 자산은 " + coin[sender] + "원입니다");

    }
    if(msg == "!내정보")
    {
        replier.reply("< " + sender + "님의 정보 >"+"\n\n칭호:" + title[sender] + "\n지갑:" + coin[sender] + "원");
    }
    if(msg == "!막노동" && isPlaying[sender] != true)
    {
        isPlaying[sender] = true;
        replier.reply("노동 하는 중...");
        java.lang.Thread.sleep(3000);
        isPlaying[sender] = false;
        var gotCoin = Math.floor(Math.random() * 5000);
        coin[sender] *= 1;
        coin[sender] += gotCoin;
        save(sender);
        replier.reply("노동을 끝냈습니다\n\n"+ sender +"님이 받은 돈:" + gotCoin + "원");
    }
    else if(msg == "!막노동" && isPlaying[sender] == true)
    {
        replier.reply("이미 일을 하고있습니다");
    }
    if(msg == "!일하기" && isPlaying[sender] != true && title_list.indexOf(title[sender]) >= 1)
    {
        isPlaying[sender] = true;
        replier.reply("일 하는 중...");
        java.lang.Thread.sleep(3000);
        isPlaying[sender] = false;
        var gotCoin = Math.floor(Math.random() * 5100 + 1900)
        coin[sender] *= 1;
        coin[sender] += gotCoin;
        save(sender);
        replier.reply("일을 끝냈습니다\n\n"+ sender +"님이 받은 돈:" + gotCoin + "원");
    }
    else if(msg == "!일하기" && isPlaying[sender] == true)
    {
        replier.reply("이미 일을 하고있습니다");
    }
    if(msg == "!일하기" && title_list.indexOf(title[sender]) <= 0)
    {
        replier.reply("초보등급에 오르고나서 할 수 있는 일입니다");
    }
    if(msg.startsWith("!도박 ") && isPlaying[sender] != true && title_list.indexOf(title[sender]) >= 2)
    {
        if (isNaN(msg.substr(4)) == false)
        {
            var M = []
            coin[sender] *= 1;
            M[sender] = msg.substr(4);
            if(M[sender] > coin[sender]) return;
            if(M[sender].includes(".") == true)
            {
                replier.reply("금액이 소수일수없습니다");
                return;
            }
            if(isOdd(M[sender]) != 0)
            {
                replier.reply("도박 금액은 짝수여야합니다");
                return;
            }
            if(M[sender].includes("-"))
            {
                replier.reply("금액이 음수일수없습니다.");
                return;
            }
            isPlaying[sender] = true;
            replier.reply("도박 하는 중...");
            java.lang.Thread.sleep(3000);
            if(Math.random()<0.7){
                coin[sender] -= M[sender];
                replier.reply("도박 실패\n\n잃은 돈:" + M[sender] + "원");
                save(sender);
                isPlaying[sender] = false;
            }
            else
            {
                replier.reply("도박 성공\n\n얻은 돈:" + M[sender] * 0.5 + "원");
                coin[sender] += M[sender] * 0.5;
                save(sender);
                isPlaying[sender] = false;
            }
        }
    }
    else if(msg.startsWith("!도박 ") && title_list.indexOf(title[sender]) <= 1)
    {
        replier.reply("백만장자등급에 오르고나서 할 수 있는 일입니다");
    }
    if(msg == "!알바" && isPlaying[sender] != true && title_list.indexOf(title[sender]) >= 2)
    {
        isPlaying[sender] = true;
        replier.reply("알바 하는 중...");
        java.lang.Thread.sleep(5000);
        var gotCoin = Math.floor(Math.random() * 150000 + 50000)
        coin[sender] *= 1;
        coin[sender] += gotCoin;
        isPlaying[sender] = false;
        save(sender);
        replier.reply("알바를 끝냈습니다\n\n"+ sender +"님이 받은 돈:" + gotCoin + "원");
    }
    else if(msg.startsWith("!알바") && title_list.indexOf(title[sender]) <= 1)
    {
        replier.reply("백만장자등급에 오르고나서 할 수 있는 일입니다");
    }

    if(msg == "!주식투자" && isPlaying[sender] != true && title_list.indexOf(title[sender]) >= 3)
    {
        isPlaying[sender] = true;
        replier.reply("주식투자 하는 중...");
        java.lang.Thread.sleep(3000);
        var M = Math.floor(Math.random() * 100000 + 400000)
        var gotCoin = Math.floor(Math.random() * 1000000 + 500000)
        coin[sender] *= 1;
        if(Math.random()<0.77){
            coin[sender] -= M;
            replier.reply("투자 실패\n\n잃은 돈:" + M + "원");
            save(sender);
            isPlaying[sender] = false;
        }
        else
        {
            replier.reply("투자 성공\n\n얻은 돈:" + gotCoin + "원");
            coin[sender] += gotCoin;
            save(sender);
            isPlaying[sender] = false;
        }
    }
    if(msg == "!암거래" && isPlaying[sender] != true && title_list.indexOf(title[sender]) >= 3)
    {
        isPlaying[sender] = true;
        replier.reply("암거래 하는 중...");
        java.lang.Thread.sleep(10000);
        var gotCoin = Math.floor(Math.random() * 500000 + 500000)
        coin[sender] *= 1;
        coin[sender] += gotCoin;
        isPlaying[sender] = false;
        save(sender);
        replier.reply("성공적으로 완수했습니다\n\n"+ sender +"님이 받은 돈:" + gotCoin + "원");
    }
    else if(msg.startsWith("!암거래") && title_list.indexOf(title[sender]) <= 2)
    {
        replier.reply("천만장자등급에 오르고나서 할 수 있는 일입니다");
    }
    if(msg == "!공장가동" && isPlaying[sender] != true && title_list.indexOf(title[sender]) >= 4)
    {
        isPlaying[sender] = true;
        replier.reply("공장 가동 하는 중...");
        java.lang.Thread.sleep(10000);
        var gotCoin = Math.floor(Math.random() * 590000 + 800000)
        coin[sender] *= 1;
        coin[sender] += gotCoin;
        isPlaying[sender] = false;
        save(sender);
        replier.reply("공장 가동을 완료하였습니다\n\n"+ sender +"님이 받은 돈:" + gotCoin + "원");
    }
    else if(msg.startsWith("!공장가동") && title_list.indexOf(title[sender]) <= 3)
    {
        replier.reply("억만장자등급에 오르고나서 할 수 있는 일입니다");
    }

        if(coin[sender] >= 100000 && title_list.indexOf(title[sender]) == 0){
            title[sender] = title_list[1];
            save(sender);
            replier.reply("축하합니다!! 등급이 오르셨습니다!!\n\n[새싹] > [초보]");
        }
        if(coin[sender] >= 1000000 && title_list.indexOf(title[sender]) == 1){
            title[sender] = title_list[2];
            save(sender);
            replier.reply("축하합니다!! 등급이 오르셨습니다!!\n\n[초보] > [백만장자]");
        }    
        if(coin[sender] >= 10000000 && title_list.indexOf(title[sender]) == 2){
            title[sender] = title_list[3];
            save(sender);
            replier.reply("축하합니다!! 등급이 오르셨습니다!!\n\n[백만장자] > [천만장자]");
        }
        if(coin[sender] >= 100000000 && title_list.indexOf(title[sender]) == 3){
            title[sender] = title_list[4];
            save(sender);
            replier.reply("축하합니다!! 등급이 오르셨습니다!!\n\n[천만장자] > [억만장자]");
        }
        if(coin[sender] >= 1000000000 && title_list.indexOf(title[sender]) == 4){
            title[sender] = title_list[5];
            save(sender);
            replier.reply("축하합니다!! 등급이 오르셨습니다!!\n\n[억만장자] > [보스]");
        }
        if(coin[sender] >= 10000000000 && title_list.indexOf(title[sender]) == 5){
            title[sender] = title_list[6];
            save(sender);
            replier.reply("축하합니다!! 등급이 오르셨습니다!!\n\n[보스] > [지존]");
        }
        if(coin[sender] >= 100000000000 && title_list.indexOf(title[sender]) == 6){
            title[sender] = title_list[7];
            save(sender);
            replier.reply("축하합니다!! 등급이 오르셨습니다!!\n\n[지존] > [세계통솔자]");
        }
        if(coin[sender] >= 1000000000000 && title_list.indexOf(title[sender]) == 7){
            title[sender] = title_list[8];
            save(sender);
            replier.reply("축하합니다!! 등급이 오르셨습니다!!\n\n[세계통솔자] > [신]");
        }



if(coin[sender] < 0)
{
  coin[sender] = 0;
}
}
function save(sender)
{
    fs.write("/storage/emulated/0/msgbot/Bots/RPG/유저/" + sender + ".txt", coin[sender] + "\n" + title[sender]);
}
function load(sender)
{
    var b=new java.io.File("/storage/emulated/0/msgbot/Bots/RPG/유저/" + sender + ".txt");
    if(!(b.exists())) return;
    var a = fs.read("/storage/emulated/0/msgbot/Bots/RPG/유저/"+sender+".txt").split("\n");
    coin[sender] = a[0];
    title[sender] = a[1];
}
function isOdd(num) { 
    return num % 2;
}
