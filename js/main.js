let openProps={};
let onMenuOpened=false;
let onAnimationEnd=true;
let styleIntro=document.getElementById('Intro').style;
let styleMyMenu=document.getElementById('MyMenu').style;
let styleStars=document.getElementById('stars').style;
let elFormBox=document.getElementById('FormBox');
let elFormParBox=document.getElementById('FormParallaxBox');
let arrInput=document.getElementsByClassName('form-input');
let arrTabNum=document.getElementsByClassName('tab-num');
let arrExContent=document.getElementsByClassName('ex-content');
let arrHeaderBtn=document.getElementsByClassName('header-btn');
let formInput=document.getElementsByClassName('form-input');
let zShadowArr=[
    document.getElementById('z-1').style,
    document.getElementById('z-2').style,
    document.getElementById('z-3').style,
    document.getElementById('z-4').style,
]

function httpGet() {
    let xmlHttp = new XMLHttpRequest();
    let fData={
        name: formInput[0].value,
        email: formInput[1].value,
        phone: formInput[2].value,
    }
    xmlHttp.open( "POST",
        'https://api.mailgun.net/v3/sandboxb29947b412d747d9951607769cb68b6c.mailgun.org/messages?from=mailgun@sandboxb29947b412d747d9951607769cb68b6c.mailgun.org&to=novacakk@gmail.com&subject=Hello&text='+'name: '+fData.name+'email: '+fData.email+'phone: '+fData.phone,
        false );
    xmlHttp.setRequestHeader("Authorization", "Basic "+btoa("api:74f0bca9d18a65759babf09653971aed-02fa25a3-2b28a078"));
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function validateInput(input_id, pattern_text) {
    let form = document.getElementById("FormBox");
    let data = document.getElementById(input_id);
    if (data.value.match(pattern_text)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        data.style.borderColor = "#00ff00";
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        data.style.borderColor = "#ff0000";
    }
    if (data.value == "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
    }
}
function validationEmail() {
    let pattern = "[a-zZ-Z0-9\.]*@[a-zZ-Z0-9\.]*\.[a-zZ-Z0-9\.]{2,3}";
    validateInput("Email", pattern);
}
function validationPhone() {
    let pattern = "\\+[0-9]{11}";
    validateInput("Phone", pattern);
}
function validationName() {
    let pattern = "[a-zA-Z]*";
    validateInput("Name", pattern);
}

elFormParBox.addEventListener('mousemove', formRotate)
function formRotate(ev){
    /*elFormBox.style.transform = `perspective(2000px) rotatey(${(ev.offsetX - this.offsetWidth/2) / 12}deg) rotatex(${((ev.offsetY - this.offsetHeight / 2) / 12) * -1}deg)`;*/
    elFormBox.style.transform=`perspective(2000px) rotatey(${(ev.pageX-this.offsetWidth*0.5)/this.offsetWidth*30}deg) rotatex(${((ev.pageY-this.offsetHeight*0.5)/this.offsetHeight*30)*-1}deg)`;
}
/*elFormBox.addEventListener('mouseout', formDefault)
function formDefault(ev){
    this.style.transform = '';
}*/

if (!window.sessionStorage.getItem('done')) {
    styleIntro.display='block';
    styleMyMenu.display='none';
    window.onload=(function(){
        styleIntro.opacity='1'
        setTimeout(function(){
            styleIntro.top='-100%';
            styleMyMenu.display='flex';
            setTimeout(function(){
                styleIntro.display='none';
            },1510);
        },1510);
    });
    sessionStorage.setItem('done', 1);
}else{
    styleIntro.display='none';
    styleMyMenu.display="flex";
}

function openEx(id1,id2,id3,id4,backColor){
    onAnimationEnd = false;
    let style1=document.getElementById(id1).style;
    let style2=document.getElementById(id2).style;
    let style3=document.getElementById(id3).style;
    let style4=document.getElementById(id4).style;


    if(window.innerWidth>900){
        style1.width='100%';
        style2.width=style3.width='0%';
    }else{
        style1.height='100%';
        style2.height=style3.height='0%';
    }
    style1.backgroundColor=backColor;
    /*style1.cssText=`background-color: ${backColor}; font-size: 60px!important;`;*/
    /*style2.fontSize=style3.fontSize='15px';*/
    Array.prototype.forEach.call(formInput,function(e){
        e.value='';
        e.style.borderColor='transparent';
    });
    Array.prototype.forEach.call(arrTabNum,function(e){
        e.style.opacity='0';
    });
    setTimeout(function(){
        style1.display=style2.display=style3.display='none';
        styleMyMenu.display='none';
        document.getElementById('Example').style.display='block';
        styleStars.display='block';
        style4.display='block';
        setTimeout(function(){
            Array.prototype.forEach.call(arrExContent,function(e){
                e.style.opacity='1';
            });
            document.getElementById('LogoLetters').style.opacity='1';
            document.getElementById('Back').style.cssText=`transform: rotate(360deg); opacity: 1; left: 30px;`;
            setTimeout(function(){
                document.getElementById('TextContainer').style.opacity='1';
                styleStars.opacity='1';

                if(id1==='ThirdTab') {
                    document.getElementById('FormBox').style.boxShadow = 'rgba(0,0,0, 0.5) 0 20px 70px 4px';
                    setTimeout(function () {

                        /*document.getElementById('FormBox').style.boxShadow = 'rgba(98, 98, 98) 5px -5px, grey 10px -10px, #8f8f8f 15px -15px, rgba(175, 175, 175) 20px -20px';*/

                        zShadowArr[0].cssText=`transform: translateZ(-200px); top: -0px; left: 0px; opacity: 1`;
                        zShadowArr[1].cssText=`transform: translateZ(-150px); top: -0px; left: 0px; opacity: 1`;
                        zShadowArr[2].cssText=`transform: translateZ(-100px); top: -0px; left: 0px; opacity: 1`;
                        zShadowArr[3].cssText=`transform: translateZ(-50px); top: -0px; left: 0px; opacity: 1`;

                        setTimeout(function () {
                            Array.prototype.forEach.call(arrInput, function (e, i) {
                                setTimeout(function () {
                                    e.style.opacity = '1';
                                    e.style.transform = 'translate(-15px,15px)';
                                    e.style.boxShadow='rgba(98, 98, 98) 5px -5px, grey 10px -10px, #8f8f8f 15px -15px';
                                    if (i === arrInput.length - 1) {
                                        document.getElementsByTagName('body')[0].style.overflowY = 'auto';
                                        onAnimationEnd = true;
                                        openProps = {id1, id2, id3, id4};
                                    }
                                }, i * 310);
                            });
                        }, 310);

                    }, 210);
                }else{
                    document.getElementsByTagName('body')[0].style.overflow = 'auto';
                    onAnimationEnd = true;
                    openProps = {id1, id2, id3, id4};
                };

            },510);
        },10);
    },1010);
};

function closeEx(props){
    onAnimationEnd = false;
    let style1=document.getElementById(props.id1).style;
    let style2=document.getElementById(props.id2).style;
    let style3=document.getElementById(props.id3).style;
    let style4=document.getElementById(props.id4).style;

    /*style1.fontSize=style2.fontSize=style3.fontSize='40px';*/
    Array.prototype.forEach.call(arrExContent,function(e){
        e.style.opacity='0';
    });
    document.getElementById('TextContainer').style.opacity='0';
    styleStars.opacity='0';
    document.getElementById('LogoLetters').style.opacity='0';

    /*document.getElementById('FormBox').style.boxShadow='0 0 0 0 #fff';*/
    Array.prototype.forEach.call(zShadowArr,function(e){
        e.opacity='0';
        e.transform = 'translateZ(0)';
        e.top='0';
        e.left='0';
    });
    Array.prototype.forEach.call(arrInput,function(e){
        e.style.opacity='0';
        e.style.transform = 'translate(0,0)';
        e.style.boxShadow='0 0 0 0 #fff';
    });

    document.getElementById('Back').style.cssText=`transform: rotate(180deg); opacity: 0; left: -30px;`;
    setTimeout(function (){
        elFormBox.style.transform=``;
        style4.display='none';
        styleStars.display='none';
        document.getElementById('Example').style.display='none';
        styleMyMenu.display='flex';
        style1.display=style2.display=style3.display='flex';
        setTimeout(function (){
            Array.prototype.forEach.call(arrTabNum,function(e){
                e.style.opacity='1';
            });
            if(window.innerWidth>900){
                style1.width=style2.width=style3.width='100%';
            }else{
                style1.height=style2.height=style3.height='100%';
            }
            style1.backgroundColor='transparent';
            onAnimationEnd = true;
        },10);
        document.getElementsByTagName('body')[0].style.overflow='hidden';
    },510);
};

function menuSwitcher(){
    onAnimationEnd = false
    if(onMenuOpened===true){
        document.getElementById('MiddleMS').style.backgroundColor='#fff';
        document.getElementById('TopMS').style.transform='rotate(0deg) translate(0, 0)';
        document.getElementById('BottomMS').style.transform='rotate(0deg) translate(0, 0)';
        Array.prototype.forEach.call(arrHeaderBtn,function(e) {
            e.style.opacity = '0';
        });
        setTimeout(function (){
            Array.prototype.forEach.call(arrHeaderBtn,function(e){
                e.style.display='none';
            });
            onAnimationEnd = true
            onMenuOpened=false
        },310);
    }
    else{
        document.getElementById('MiddleMS').style.backgroundColor='transparent';
        document.getElementById('TopMS').style.transform='rotate(45deg) translate(5px, 5px)';
        document.getElementById('BottomMS').style.transform='rotate(-45deg) translate(10px, -11px)';
        Array.prototype.forEach.call(arrHeaderBtn,function(e){
            e.style.display='block';
        });
        setTimeout(function (){
            Array.prototype.forEach.call(arrHeaderBtn,function(e) {
                e.style.opacity = '1';
            });
            onAnimationEnd = true
            onMenuOpened=true
        },10);
    };
}
