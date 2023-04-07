# 7.4.2023 Filip
[] vsetky vsg vue files prerobte na svg-cka tak ako mate logoPerrito.svg
[] styl by mal byt v priecinku _themes/
[] ak sa pouzivaju assety na viacerych miestat dajte ich pod views/assets/ ak nie presunut pod komponent/page kde sa pouzivaju, odstranit tento priecinok

# 5.4.2023 Marko
[] folder assets by sa mal nazyvat _theme
[] rozdelit do priecinkov, idealne podla vasej potreby, ale tak, aby bolo jasne vidno, co je co, proste mozte si spravit aj subfoldre (styles, images)
    - images nech idu do images foldru, a napr. tailwind.css nech ide do styles foldra
[] svg's nerobit ako vue komponenty a nastavovat im zbytocne cez propy vysku aj sirku, spravit to jednoducho ako .svg file a do neho vlozit tie samotne vectory, potom pouzit svgcko ako obrazok (klasika <img>) s tym, ze vysku a sirku nastavis obrazku, easy af
[] kludne si mozte assety aj rozdelit, lebo su layoutove assety (navbar/footer) porozhadzovane s dalsimi ikonkami, alebo teda nazvat icons