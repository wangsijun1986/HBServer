var shortcut = require('windows-shortcuts');
var fs = require("fs");
//windows�µĿ�������
if(process.platform.match(/^win/)){
    //��������Ŀ¼
    var startupMenu="";
    //APPDATAĿ¼����Roming����win7,win8��ͬ��ϵͳ����Ŀ¼
    if(/Roaming/.test(process.env.APPDATA)){
        startupMenu=process.env.APPDATA+"\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\\";
    }else{
        //winXp��ͬ��ϵͳ����Ŀ¼
        startupMenu=process.env.USERPROFILE+"\\����ʼ���˵�\\����\\����\\";
    }    //��Ŀ¼�����ɵĿ�ݷ�ʽ����
    var startupTarget=startupMenu+"start_up.lnk"; /*ע�����*/
    //Ҫ���ƿ�ݷ�ʽ��ȥ��Դ����
    var sourcePrograme=__dirname+"\\start_up.bat"; /*ע�����*/
    //���ھ�ɾ��,�����ھʹ���
    if(fs.existsSync(startupTarget)){
        fs.unlink(startupTarget,function(err){
            if(err){
                console.error("ȡ��������������",err);
            }
            else
            {
                console.log("ȡ�����������ɹ�");
            } 
        })
    }else{
        shortcut.create(startupTarget,sourcePrograme,function(err){
            if(err){
                console.error("���ÿ�����������",err);
            }
            else
            {
                console.log("���ÿ��������ɹ�");
            }
        })
    }
}