const mainButton = document.getElementById('mainButton');
const levelOne = document.getElementById('levelOne');

mainButton.addEventListener('click', function() {
    mainButton.classList.toggle('slideDown')

    setTimeout(function() {
        mainButton.classList.toggle('slideUp');
      }, 800); // 添加一个延迟（单位为ms）
    setTimeout(function() {
        levelOne.classList.toggle('show');
      }, 1400); // 添加一个延迟（单位为ms）

    
    
});



//levelTwo
const levelTwoCharacter = document.getElementById('levelTwoCharacter');
const levelThreeCharacter = document.getElementById('levelThreeCharacter');

const levelTwoFriend = document.getElementById('levelTwoFriend');
const levelThreeFriend = document.getElementById('levelThreeFriend');

const levelTwoMessage = document.getElementById('levelTwoMessage');
const levelThreeMessage = document.getElementById('levelThreeMessage');

const levelTwoMap = document.getElementById('levelTwoMap');
const levelThreeMap = document.getElementById('levelThreeMap');

const levelTwoSetting = document.getElementById('levelTwoSetting');
const levelThreeSetting = document.getElementById('levelThreeSetting');


levelTwoCharacter.addEventListener('click', function() {
    levelThreeCharacter.classList.toggle('show');
    levelThreeFriend.classList.remove('show');
    levelThreeMessage.classList.remove('show');
    levelThreeMap.classList.remove('show');
    levelThreeSetting.classList.remove('show');
});
    


levelTwoFriend.addEventListener('click', function() {
    levelThreeFriend.classList.toggle('show');
    levelThreeCharacter.classList.remove('show');
    levelThreeMessage.classList.remove('show');
    levelThreeMap.classList.remove('show');
    levelThreeSetting.classList.remove('show');
});


levelTwoMessage.addEventListener('click', function() {
    levelThreeMessage.classList.toggle('show');
    levelThreeCharacter.classList.remove('show');
    levelThreeFriend.classList.remove('show');
    levelThreeMap.classList.remove('show');
    levelThreeSetting.classList.remove('show');
});



levelTwoMap.addEventListener('click', function() {
    levelThreeMap.classList.toggle('show');
    levelThreeCharacter.classList.remove('show');
    levelThreeFriend.classList.remove('show');
    levelThreeMessage.classList.remove('show');
    levelThreeSetting.classList.remove('show');
});



levelTwoSetting.addEventListener('click', function() {
    levelThreeSetting.classList.toggle('show');
    levelThreeCharacter.classList.remove('show');
    levelThreeFriend.classList.remove('show');
    levelThreeMessage.classList.remove('show');
    levelThreeMap.classList.remove('show');
});

//confirmApplication
const teamApplication = document.getElementById('teamApplication');
const confirmApplication = document.getElementById('confirmApplication');
const bottonArea = document.getElementById('bottonArea');

teamApplication.addEventListener('click', function() {
    confirmApplication.classList.toggle('show');
    buttonArea.style.display = 'none';
    
});

//click 接受 

const accept = document.getElementById('accept');

accept.addEventListener('click', function() {
    confirmApplication.classList.remove('show');   
    sent.classList.toggle('show');
});


