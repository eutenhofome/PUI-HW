let chooseLanguage = document.querySelector('#language');

languages = [Spanish, French];

for (let i=0; i<2; i++) {
    let option = document.createElement('option');
    option.text = languages[i];
    chooseLanguage.add(option);
}