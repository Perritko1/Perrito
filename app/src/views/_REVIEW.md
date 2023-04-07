# 7.4.2023 Filip
[] pod views by mali byt cisto len screeny ostatne komponenty by mali byt v _components priecinku
	- takze /views -> /home/home.vue, /contect/contact.vue (neviem ake mate screeny toto su priklady)
	- ak su komponenty ktore sa vyuzivaju na viac ako jednom screene hodte ich do /views/_components
	- take co sa pouzivaju len na konkretnom screene napr home tak dajte do /views/home/_components
[] dajte si zalezat na spravnom tabovani kodu, je to strasne neprehladne
[] ked pouzivate komponenty davajte ich velkym prvym pismenom, je to tak prehladnejsie <Shield-vector />
[] je to na vas, ale ja by som z dizajnoveho hladiska nemenil na kazdej stranke linky v headery, iba by som vyznacil na ktorej page sa uzivatel nachadza, vdaka comu by ste mohli vytvorit header component ktory by ste len reusovali namiesto kodenia pre kazdu page samostatne
[] nedavajte vsade milion enterov vymazat

# 5.4.2023 Marko
[] Files by som nazyval vsetky po anglicky, a mal v tom poriadok
[] Nejde to ani servnut, lebo ste to pushli s errorom, checknite si error, presne vam pise, co treba poriesit
[] Naco je tento komponent "FirstVisitMaj"? ak bude len na jednu h1, tak h1 vytiahnut z neho von
[] "FirstVisitStr" upravte formatovanie (hlavne taby), je to hruza :D
[] V "HomePage.vue" to mate este aj napisane ze -> "// @ is an alias to /src" a ajtak tam tie cesty mate takto -> "../components/LoginBtn.vue" (to iste aj "StrazcoviaPage.vue")
[] V "RegisterPage" si prosim vas spravte normalne tie .svg, nepouzivajte to takto, ked si to mozte spravit ako obyc svg, nech to mate zladene na celom webe, nie vsade inak