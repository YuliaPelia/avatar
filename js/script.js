window.addEventListener("DOMContentLoaded", () => {
  const elementsToTranslate = document.querySelectorAll("[data-translate]");
  const swich = document.getElementById("switch");
  swich.addEventListener("click", () => {
    let currentLanguage = document.documentElement.lang;
    let newLanguage = currentLanguage === "en" ? "uk" : "en";
    document.documentElement.lang = newLanguage;

    let translations = {
      en: {
        main: "Main",
        about: "About Us",
        contact: "Contact Us",
        exit: "Log In",
        descr:
          "I'm speaking with the warrior! \n Your spirit goes with Eywa, \n your body stays behind to become part of the People. \n Fight with us!",
        join: "Join clan",
        titleAboutPeople:
          "“MORE SKY PEOPLE ARE GONNA COME. THEY’RE \n GONNA COME LIKE A RAIN THAT NEVER ENDS.”",
        author: "JAKE SULLY",
        watch: "WATCH TRAILER",
        energy:
          "“ALL ENERGY IS ONLY BORROWED, AND ONE DAY \n YOU HAVE TO GIVE IT BACK.”",
        study: "Let's learn the Na'vi language",
        hello: "Hello",
        howAreYou: "How Are You?",
        well: "I'm Well",
        thank: "Thank you",
        see: "I See You",
        follow: "Follow me!",
        mother:
          "“OUR GREAT MOTHER DOES NOT TAKE SIDES, \n SHE PROTECTS ONLY THE BALANCE OF LIFE.”",
        authorTo: "NEYTIRI",
      },

      uk: {
        main: "Головна",
        about: "Про нас",
        contact: "Контакти",
        exit: "Вхід",
        descr:
          "Хоробрий воїне, звертаюсь до тебе! Твій дух йде з Ейвою, \n  твоє тіло залишається, \n  щоб стати частиною Народу. \n Борись разом з нами!",
        join: "Приєднатися до клану",
        titleAboutPeople:
          "“БАГАТО ЛЮДЕЙ З НЕБА ПРИЙДЕ. ВОНИ \n ПРИЙДУТЬ, ЯК ГРОЗА, ЯКА НІКОЛИ НЕ ЗАКІНЧУЄТЬСЯ.”",
        author: "Джейк Саллі",
        watch: "Дивитись трейлер",
        energy:
          "“ВСЯ ЕНЕРГІЯ ЛИШЕ ЗАПОЗИЧЕНА, ОДНОГО ДНЯ \n ЇЇ ДОВЕДЕТЬСЯ ПОВЕРНУТИ.”",
        study: "Вчимо мову На’ві",
        hello: "Привіт",
        howAreYou: "Як справи?",
        well: "Все добре",
        thank: "Дякую",
        see: "Я бачу тебе",
        follow: "Слідуй за мною!",
        mother:
          "“НАША ВЕЛИКА МАТИ НЕ СТАЄ НА ЯКУСЬ СТОРОНУ, \n ВОНА ЗАХИЩАЄ ЛИШЕ ЖИТТЄВИЙ БАЛАНС.”",
        authorTo: "Нейтірі",
      },
    };

    elementsToTranslate.forEach((element) => {
      let key = element.getAttribute("data-translate");
      const translationText = translations[newLanguage][key];

      if (translationText.includes("\n")) {
        const lines = translationText.split("\n");
        const newHTML = lines
          .map((line) => `<span>${line}</span><br>`)
          .join("");
        element.innerHTML = newHTML;
      } else {
        element.textContent = translationText;
      }
    });
  });
});
