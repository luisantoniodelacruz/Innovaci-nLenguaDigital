//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=7; attempts=0; attemptsMax=1;
var score=0; scoreMax=7; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FDFFFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=30;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Buen Trabajo"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts="¡Intenta de nuevo!"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var cp_pal=["R1JBTcOBVElDQQ==","T1JUT0dSQUbDjUE=","Vk9DQUJVTEFSSU8=","UFVOVFVBQ0nDk04=","TEVDVFVSQQ==","VEVDTk9MT0fDjUE=","Q09NVU5JQ0FDScOTTg=="];var cp_ima=["","","","","","",""];var cp_mp3=["","","","","","",""];var cp_ogg=["","","","","","",""];var cp_que=["Q29uanVudG8gZGUgcmVnbGFzIHF1ZSBvcmdhbml6YW4gbGFzIHBhbGFicmFzIGVuIHVuYSBvcmFjacOzbi4=","UmVnbGFzIHBhcmEgZXNjcmliaXIgY29ycmVjdGFtZW50ZSBsYXMgcGFsYWJyYXMu","Q29uanVudG8gZGUgcGFsYWJyYXMgcXVlIGNvbm9jZW1vcyB5IHVzYW1vcyBhbCBjb211bmljYXJub3M=","U2lnbm9zIHF1ZSB1c2Ftb3MgcGFyYSBlc3RydWN0dXJhciB5IGRhciBzZW50aWRvIGEgbG9zIHRleHRvcw==","QWNjacOzbiBkZSBpbnRlcnByZXRhciB5IGNvbXByZW5kZXIgdW4gdGV4dG8gZXNjcml0by4=","Q29uanVudG8gZGUgaGVycmFtaWVudGFzIHF1ZSBmYWNpbGl0YW4gbGEgdmlkYSB5IGVsIGFwcmVuZGl6YWplLg==","SW50ZXJjYW1iaW8gZGUgaW5mb3JtYWNpw7NuIHkgbWVuc2FqZXMgZW50cmUgcGVyc29uYXMu"];var cp_num=[9,10,11,10,7,10,12];var cp_alt=["","",".","","","",""];
var wordsGame="SU5ERVg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var au="";var cp=[];var letters=[];var posAns=0;var lettersId=[];var lettersX=[];var lettersY=[];var lettersAns=[];var answers=[];var indexGame=1;var numle=5; var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ";var jobindex=[];
