    const chat = document.querySelector('.chat');
    const settings = document.querySelector('.settings');
    
    const chatBtn = document.getElementById('chat-1');
    const settingsBtn = document.getElementById('settings_btn');
    const listThemes = document.getElementById('list_themes');
    const settingsList = document.querySelector('.sets-list');
    const settingsCase = document.querySelector('.sets-case');
    const themesCase = document.querySelector('.case_themes');
    

    function openSettings(){
        chat.style.display = 'none';
        settings.style.display = 'flex';
        settingsList.style.display = 'flex';
    }

    function openChat(){
        chat.style.display = 'block';
        settings.style.display = 'none';
        settingsCase.style.display = 'none';
        themesCase.style.display = 'none';
    }

    settingsBtn.addEventListener('click', openSettings);
    chatBtn.addEventListener('click', openChat);

    listThemes.addEventListener('click', () => {
        console.log("Themes >");    

        settingsList.style.display = 'none';
        settingsCase.style.display = 'flex';
        themesCase.style.display = 'flex';
    });



    //Mobile section

    const mobileSideBar = document.querySelector('.mobile-side-bar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const leftSideBar = document.querySelector('.left-side-bar');
    const rightSideBar = document.querySelector('.right-side-bar');

    function openMobileChats(){
        mobileMenuBtn.style.display = 'none';
        mobileSideBar.style.display = 'none';
        chat.style.display = 'none';
        leftSideBar.style.display = 'flex';
        leftSideBar.style.width = 100 + '%';
    }

    function closeMobileChats(){
        mobileMenuBtn.style.display = 'block';
        mobileSideBar.style.display = 'flex';
        chat.style.display = 'block';
        leftSideBar.style.display = 'none';
        leftSideBar.style.width = 250 + 'px';
    }

    mobileMenuBtn.addEventListener('click', openMobileChats);
    
    chatBtn.addEventListener('click', () => {
        openChat();
            if (window.innerWidth <= 768) { // условие для мобильного экрана, можно подкорректировать
            closeMobileChats();
        }
    });