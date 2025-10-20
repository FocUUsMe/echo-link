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