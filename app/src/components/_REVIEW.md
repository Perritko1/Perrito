# 7.4.2023 Filip
[] vsetky komponenty okrem NavBar.vue vymazte, vsetko v sebe obsahuje jeden element, to by sa nemalo robit ako komponenty pointa komponentov je zprehladnit kod tak ze sa rozdeli do viacerych logickych casti, nie ze sa jeden riadok da do zvlast suboru
[] navbar presunte do views/_components tento priecinok vymazte

# 5.4.2023 Marko
[] zase by som to rozdelil na layout componenty, buttony a potom zvysok, lebo to je v sebe nahadzane
[] vsetky tieto komponenty su uplne zbytocne, zbytocne to riesit takto, ak v tom komponente ma byt jeden a tag + button tag, tak to rovno radsej vytiahnite von a vkladajte do ostatnych kompoenentov ako kod
[x] v styloch nepouzivate "scoped" co znamena, ze je je jedno v ktorom komponente mate ake styles. Ak pouzijete "scoped", tak sa vam styl pouzije len na obsah daneho komponentu