const express = require('express');
var cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

app.get('/ingresar/:usuario/:contrasena', (req, res) => {
    let us = req.params.usuario;
    let usuario = us.toLowerCase();
    let cont = req.params.contrasena
    //res.json("Usuario: " + us + cont)

    if(usuario == "adhara" && cont == 125){
      res.json("Bienvenida :)")
      } else{
        res.json("Lo siento, los datos no son validos. Por favor intenta de nuevo...")
      }
})

let libros = [
  {
    "titulo": "Lesath. Memorias de un Engaño",
    "autor": "Tiffany Calligaris",
    "editorial": "Planeta",
    "genero" : "Fantasía",
    "portada" : "https://www.planetadelibros.com.mx/usuaris/libros/fotos/199/m_libros/portada_lesath_tiffany-calligaris_201505122127.jpg",
    "sinopsis" : "Adhara es hija de un elfo y una humana. Cuando cumple diecinueve años decide dejar el Bosque Encantado donde vive y conocer Lesath, el pueblo natal de su madre, y donde residen sus abuelos maternos. Pero su viaje a tal lugar no sera tranquilo, ni mucho menos, al llegar descubrira que su vida corre peligro, y que el reino entero esta sumido en una terrible farsa. De la mano del valiente Aiden, y el astuto mago Zul, Adhara descubrira el secreto oscuro que reina sobre Lesath, e intentaran desentrañarlo."
  },
  {
    "titulo": "Sombra y Hueso",
    "autor": "Leigh Bardugo",
    "editorial": "Planeta",
    "genero" : "Aventura",
    "portada" : "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9788/4180/9788418002496.jpg",
    "sinopsis" : "Alina Starkov, una adolescente huérfana es criada en la tierra de Praga de Ravka cuando inesperadamente, con el fin de salvar a su mejor amigo de la niñez utilizando un poder que no sabía que poseía, es capturada por el Grisha. Lucha para estar a la par de otros Grisha y para tener confianza en sus propias capacidades mientras comienza una rigurosa formación. Y aprenderá a ser dueña de sí misma, y del gran poder que posee."
  },
  {
    "titulo": "La Quinta Estación",
    "autor": "N. K. Jemisin",
    "editorial": "NOVA",
    "genero" : "CienciaFicción",
    "portada" : "https://th.bing.com/th/id/R.c216afcfeac13fddbb1b6ed39cc2a841?rik=ChIl7XkF2eCt7Q&pid=ImgRaw&r=0",
    "sinopsis" : "El supercontinente llamado Quietud es sacudido constantemente por la actividad sísmica, parte de la cual es devastadora para la civilización y provoca un invierno prolongado conocido como Quinta Estación. La historia sigue a una mujer de mediana edad llamada Essun de un pequeño pueblo llamado Tirimo, además de a una joven llamada Damaya y una mujer de unos veinte años llamada Syenite; todas con una conexión inesperada."
  },
  {
    "titulo": "La Tierra de Las Historias. El Hechizo de Los Deseos",
    "autor": "Chris Colfer",
    "editorial": "Desconocida",
    "genero" : "Fantasía",
    "portada" : "https://epub.us/wp-content/uploads/2016/07/The-Wishing-Spell-The-Land-of-Stories-series.jpg",
    "sinopsis" : "Después de la muerte de su padre, la vida de Alex y Conner Bailey parece venirse abajo, sin embargo, están a punto de dar un giro total, después de un gran descubrimiento sobre su familia. Al terminar en otro mundo completamente distinto al nuestro, los chicos buscarán una forma de volver a casa, conocida como El Hechizo de Los Deseos."
  },
  {
    "titulo": "Maze Runner. Correr o Morir",
    "autor": "James Dashner",
    "editorial": "V&R",
    "genero" : "CienciaFicción",
    "portada" : "https://th.bing.com/th/id/R.25179fbef2ef33b17a8ca1abb0cf11bf?rik=K8XZdqUCiDt%2fHA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-QXuaQZxAlW0%2fUZ1SKTNHrJI%2fAAAAAAAAAU4%2f4LaXQfAPQYM%2fs822%2fMaze%2bRunner_correr%2bo%2bmorir.jpg&ehk=1E40n3m5Bll25wNOAS2kvYtO3dKzqlM8bZ8bQ5e7U4c%3d&risl=&pid=ImgRaw&r=0",
    "sinopsis" : "Al despertar dentro de una oscura caja en movimiento, Thomas solo recuerda su nombre. No sabe quién es. Tampoco hacia dónde va. Pero no está solo: cuando el ascensor llega a su destino, las puertas se abren y se ve rodeado por un grupo de jóvenes (todos varones). El Área. Al igual que Thomas, ninguno de ellos sabe cómo ha llegado allí. Ni por qué. De lo que están seguros es de que cada mañana las puertas de piedra que los separan del laberinto que los rodea se abren y por la noche, se cierran. Y que cada mes alguien nuevo es entregado por el ascensor. Sin embarog, un hecho altera de forma radical la rutina del lugar: días después de la llegada de Thomas, llega una chica, la primera enviada al Área, y más sorprendente todavía es el mensaje que trae. Thomas será más importante de lo que imagina. Pero para eso deberá descubrir los sombríos secretos guardados en su mente. Por alguna razón, sabe que para lograrlo debe correr. Correr será la clave, o morirá."
  },
  {
    "titulo": "La Saga de Geralt de Rivia. El Último Deseo",
    "autor": "Andrzej Sapkowski",
    "editorial": "Alamut / Artifex",
    "genero" : "Fantasía",
    "portada" : "https://pendulo.com/imagenes_grandes/9788498/978849889104.GIF",
    "sinopsis" : "Geralt de Rivia, brujo y mutante humano, se gana la vida como cazador de monstruos, recorriendo ciudades y caminos desolados, en busca de cualquier bestia que pueda dejarle algo de dinero. En su camino da cuenta de estriges, silvias, y muchas otras bestias. En su camino se reencontrará con viejos amigos, enemigos, y muchos recuerdos, un viaje en el que realizará su último deseo."
  },
  {
    "titulo": "Narnia. El León, La Bruja y El Armario",
    "autor": "C.S. Lewis",
    "editorial": "Destino",
    "genero" : "Fantasía",
    "portada" : "https://www.libros.pub/imagenes/narnia-2-el-leon-la-bruja-y-el-armario-2.jpg",
    "sinopsis" : "En plena Primera Guerra Mundial, cuatro hermanos son enviados al campo para resguardarse, y van a parar a una casa en medio de la nada de un adinerado anciano, el Profesor Kirk. Dentro de la casa existen diversas reglas, pero cuando los niños comienzan a explorar, descubren un objeto que será el transporte hacia otro mundo maravilloso y mágico, donde vivirán inumerables aventuras que pondrán a prueba sus diferentes cualidades, y su unidad como hermanos. Narnia, la Tierra que todo puede suceder."
  },
  {
    "titulo": "Túneles",
    "autor": "Roderick Gordon & Brian Williams",
    "editorial": "Puck",
    "genero" : "CienciaFicción",
    "portada" : "https://th.bing.com/th/id/R.90305b70078408e166f0d5aaa285e396?rik=Bppr%2b07KQT2U6w&riu=http%3a%2f%2f1.bp.blogspot.com%2f_zY8VRYx-oo4%2fTBatkcTHjaI%2fAAAAAAAAAFA%2fIeJl9C_H8RU%2fs1600%2ftunnels_book_cover_01.jpg&ehk=%2blFQGm1AwOrWGtXkpgEJj2fSkjbKZqYf06DAVq%2fUKc4%3d&risl=&pid=ImgRaw&r=0",
    "sinopsis" : "Will Burrows tiene una afición muy extraña para un chico de catorce años: Pasa su tiempo excavando, buscando tesoros perdidos en las entrañas de la tierra. Así descubre que bajo el mismo Londres existen lugares desconocidos. Túneles que no constan en ningún mapa, y puertas olvidadas durante siglos. Pero... ¿A dónde llevan? Cuando el padre de Will desaparece misteriosamente, el joven decide aventurarse en su búsqueda, desafiando la oscuridad y el temor a lo desconocido. Con la sola ayuda de su amigo Chester, se dirige hacia un mundo fascinante y a la vez aterrador, un mundo lleno de sorpresas, con sus propias leyes, extraños personajes... Y terribles amenazas."
  },
  {
    "titulo": "El Corsario Negro",
    "autor": "Emilio Salgari",
    "editorial": "Destino, ANAYA, y otras",
    "genero" : "Acción",
    "portada" : "https://live.staticflickr.com/3248/3126103612_76c46eca99_b.jpg",
    "sinopsis" : "Dos piratas, Carmaux y Van Stiller, son rescatados por el Thunder, un barco pirata bajo el mando de Emilio di Roccabruna de Roccanera, Señor de Valpenta y de Ventimiglia, y temido en todo el Caribe, como el Corsario Negro. Una vez a bordo, los dos le informan al capitán que su hermano menor, el 'Corsario Rojo', ha sido ahorcado por Duke van Guld, el gobernador de Maracaibo. El Corsario Negro decide colarse en la ciudad para recuperar el cuerpo de su hermano y darle un entierro honorable en el mar."
  },
  {
    "titulo": "La Historia Interminable",
    "autor": "Michael Ende",
    "editorial": "Alfaguara Juvenil",
    "genero" : "Fantasía",
    "portada" : "https://www.librosdemario.com/covers/05/75/52/cover.jpg",
    "sinopsis" : "Escondido en el desván de su colegio, Bastian devora durante las horas de clase un libro enigmático, ”La historia interminable”, que relata la paulatina destrucción del Reino de Fantasía. Una especie de ”Nada” misteriosa destruye el país y a las criaturas que lo habitan. A medida que avanza en la lectura, Bastian se da cuenta de que la salvación de Fantasía depende de él; de que consiga entrar dentro del libro..."
  },
  {
    "titulo": "La Vuelta al Mundo en 80 días",
    "autor": "Julio Verne",
    "editorial": "Multiples editoriales",
    "genero" : "Aventura",
    "portada" : "https://pendulo.com/imagenes_grandes/9788427/978842721157.GIF",
    "sinopsis" : "Phileas Fogg es un caballero británico misterioso y bastante solitario que vive con su ayudante Jean Passepartout, y le encanta asistir todos los días al distinguido Reform Club. Un día  se encuentra en el Club, donde surge una discusión sobre si es posible dar la vuelta al mundo en 80 días. Sus compañeros creían que era imposible hacer viaje en tan poco tiempo, pero Phileas Fogg opina lo contrario y apuesta casi toda su fortuna. Ellos aceptan la apuesta y Phileas Fogg emprende el viaje con su nuevo criado Jean Passepartout, usando todos los transportes y medios disponibles en la segunda mitad del siglo XIX. Sigue el proyecto del viaje publicado en el Morning Chronicle, su diario de lectura cotidiana. El primer problema surge en Suez, cuando el detective Fix confunde a Fogg con un ladrón que había robado 55.000 libras en el banco de Inglaterra…"
  },
  {
    "titulo": "Un Capitán de Quince Años",
    "autor": "Julio Verne",
    "editorial": "Multiples editoriales",
    "genero" : "Aventura",
    "portada" : "https://images.cdn3.buscalibre.com/fit-in/360x360/ca/db/cadb50c0913a1c36b290cf7c6a5902e8.jpg",
    "sinopsis" : "Dick Sand se ve embarcado con la Sra. Weldon, el hijo de ésta llamado Jack, y su sobrino Benedicto, rumbo hacia Valparaíso, en un barco con una muy buena tripulación, a excepción Negoro, el cocinero. Todo marchaba bien, hasta que Dick divisó en el mar un barco a punto de hundirse. De todos los que en él viajaban, sólo se salvaron cinco personas y un perro llamado Dingo. Pasó el tiempo sin ningún problema alguno, hasta que un día se toparon con un enorme ballenato. El capitán, junto con la tripulación que lo acompañaba, subió a un bote de cacería, pero este fue atacado, hundiéndose rápidamente. Como consecuencia, Dick asumió el rol de capitán, con sólo quince años de edad. Al único que no le gustó esta idea fue a Negoro, el cual, con una razón que se explicará después, hizo desviar el barco, hacia un rumbo desconocido."
  },
  {
    "titulo": "El Prisionero de Zenda",
    "autor": "Anthony Hope",
    "editorial": "Desconocida",
    "genero" : "Aventura",
    "portada" : "https://ccsbooks.co.uk/wp-content/uploads/2019/10/9781911238492-scaled.jpg",
    "sinopsis" : "Después de bajarse del tren, Rudolf Rassendyll, un súbdito británico, vestido con los típicos tweeds de un deportista inglés, está pasando por el control de pasaportes en un pequeño principado en algún lugar de Europa. Le preguntan si está aquí para la coronación y él les dice que está de vacaciones de pesca. Se da cuenta de que la gente sigue mirándolo. Él piensa que debe ser su ropa. A modo de explicación, dice: 'Por supuesto que no te vistes así en tu país, pero ves que no nos vestimos a tu manera en Inglaterra'. Su humor inglés se pierde en su audiencia. En realidad, sin su perilla, tiene un parecido sorprendente con el que pronto será coronado rey del principado."
  },
  {
    "titulo": "La Llamada de la Selva",
    "autor": "Jack London",
    "editorial": "Greenbooks editore",
    "genero" : "Aventura",
    "portada" : "https://2.bp.blogspot.com/-Z7VqoV5ZFLs/WHbMLPDDUXI/AAAAAAABLrc/2neVBXvO7_EY9TtF-u6xEkD9AE-RyeJ-ACLcB/s1600/selva%2B003.jpg",
    "sinopsis" : "Buck es un perro grande y de buen corazón, un cruce entre un San Bernardo y un pastor escocés, cuya despreocupada vida de ocio se vio repentinamente alterada cuando lo robaron de su casa en el condado de Santa Clara, California, y lo deportaron al norte, para ser vendido en Skagway, Alaska. Y llevado más al norte, a Dawson City, Yukón, a fines de la década de 1890 en la fiebre del oro de Klondike, cuando los perros de trineo fuertes tenían una gran demanda. Como recién llegado al servicio de entrega del equipo de perros, y no antes de mucho tiempo su favorito, Buck, un perro como ningún otro, que había sido mimado y que había sufrido, pero no podía ser quebrantado, está pasando el momento de su vida. Obligado a luchar para sobrevivir, finalmente llevado por su último dueño, John Thornton, a las proximidades del Círculo Polar Ártico, en algún lugar entre Yukón y Alaska, depende progresivamente de sus instintos primarios, se despoja de las comodidades de la civilización y responde a 'la llamada del salvaje', como dueño de los suyos."
  },
  {
    "titulo": "Los Juegos Del Hambre",
    "autor": "Suzanne Collins",
    "editorial": "SCHOLASTIC",
    "genero" : "Acción",
    "portada" : "https://i.pinimg.com/736x/4a/ba/50/4aba509b1796e9e15ea23a4cea8c575f--hunger-games-series-the-hunger-games-.jpg",
    "sinopsis" : "Durante la 'cosecha' anual en la nación postapocalíptica de Panem, un niño y una niña de entre 12 y 18 años son elegidos como tributos para Los Juegos del Hambre, para pasar por varias pruebas, dentro de las que se incluyen batallas reales, a muerte, entre ellos. En la 74ª edición de los Juegos del Hambre, Katniss Everdeen, una joven autosuficiente de 16 años se ofrece como tributo del Distrito 12 en lugar de su hermana menor, Primrose. Peeta Mellark, un niño que fue a la escuela con Katniss, es elegido como tributo masculino."
  },
  {
    "titulo": "El Último Mohicano",
    "autor": "James Fenimore Cooper",
    "editorial": "Multiples editoriales",
    "genero" : "Acción",
    "portada" : "https://d1466nnw0ex81e.cloudfront.net/n_iv/600/926787.jpg",
    "sinopsis" : "En una tribu moribunda llamada mohicanos solo quedan dos de ellos, y un hombre blanco adoptado. Estos tres hombres se niegan a entrar en la milicia de Gran Bretaña en 1757 porque quieren la libertad. De camino a Kentucky, interceptan a los indios que atacan a un pequeño regimiento de británicos, incluidas las dos hijas de un coronel británico, que se dirigían a un fuerte. Los tres hombres llevan a los supervivientes al fuerte mientras se desarrollan dos historias de amor, pero la guerra franco-india continúa."
  },
  {
    "titulo": "Robinson Crusoe",
    "autor": "Daniel Defoe",
    "editorial": "Multiples editoriales",
    "genero" : "Acción",
    "portada" : "https://media.dcbservice.com/xlarge/DEC151195.jpg",
    "sinopsis" : "A finales del siglo XVII, el inglés Robinson Crusoe, en contra de los consejos de su padre pero con ansias de aventura, decide navegar desde Inglaterra hasta África para recoger esclavos para trabajar en sus plantaciones brasileñas. Golpeando una tormenta en el camino, naufraga en una isla tropical desierta en algún lugar del Atlántico. Los únicos sobrevivientes conocidos son él y las dos mascotas del barco, un gato llamado Sam y un perro llamado Rex. Crusoe logra traer a tierra algunos suministros del barco naufragado antes de que se hunda para siempre... A pesar de pertenecer a la clase privilegiada, Crusoe está decidido a ganarse la vida en la isla mientras espera que un barco lo rescate, eso si no muere primero por la pura tortura del aislamiento. Mientras espera y espera y espera, aprende que no todos los transeúntes pueden ser amistosos, pero que algunos pueden ser rehabilitados a la manera apropiada inglesa."
  },
  {
    "titulo": "Las Minas del Rey Salomón",
    "autor": "H. Rider Haggard",
    "editorial": "Puffin Classics, Ladybird, y otras",
    "genero" : "Acción",
    "portada" : "https://almabooks.com/wp-content/uploads/2019/08/King-Solomons-Mines.jpg",
    "sinopsis" : "Sudáfrica, la década de 1910. Allan Quatermain es un cazador y explorador de caza mayor blanco que es contratado por Jesse Huston, un joven estadounidense que quiere ayudarla a encontrar a su padre, que se creía perdido en una expedición para encontrar las legendarias Minas del Rey Salomón. Junto con su compañero africano, el misterioso Umbopo, penetran en un país desconocido, siguiendo un mapa que se cree genuino. Resulta que el profesor Huston ha sido capturado por una expedición militar alemana en la misma búsqueda, dirigida por Bockner, un coronel calvo, estereotipado, decidido, masticador de salchichas y un despiadado traficante de esclavos y aventurero turco, Dogati. Houston se ve obligado a interpretar otro mapa, que también se cree que es genuino."
  },
  {
    "titulo": "Una Canción Salvaje",
    "autor": "Victoria Schwab",
    "editorial": "Puck",
    "genero" : "CienciaFicción",
    "portada" : "https://somoslibros.net/wp-content/uploads/2018/08/una-cancion-salvaje.jpg",
    "sinopsis" : "Kate Harker. Quiere ser despiadada como su padre, y tras cinco años en los que pasó por seis internados, al fin regresa a casa para demostrar que puede serlo. August Flynn. Quiere ser humano, pero no lo es. Es un monstruo, capaz de robar almas con una canción. Es uno de los tres monstruos más poderosos de una ciudad plagada de estas criaturas... Y también es el arma secreta de su propio padre. Su ciudad está dividida. Su ciudad está desintegrándose. Kate y August son los únicos que pueden ver ambos lados, los únicos que podrían hacer algo. Pero ¿cómo te decides a ser hérore o villano, cuando es tan difícil distinguirlos?"
  },
  {
    "titulo": "La Torre de Cristal",
    "autor": "Fran Ciaro",
    "editorial": "Cross Books",
    "genero" : "CienciaFicción",
    "portada" : "https://quelibroleo.com/images/libros/libro-1600425285.jpg",
    "sinopsis" : "Eric, huérfano que sobrevive por sus pies rápidos y el consuelo de su guitarra, se encuentra en las circunstancias más adversas con Violeta, una chica de la Torre que habitualmente escapa a los peligrosos Suburbios para sentir la vida tal como es. El amor entre ellos surgirá en mal momento, ya que una nueva amenaza se cierne sobre unos y otros. En una carrera contrarreloj para conjurar el peligro, Violeta descubre un terrible secreto sobre su pasado que cambia por completo su vida, al tiempo que se convierte en una revolucionaria capaz de unir a las distintas facciones rebeldes de los Suburbios."
  }
]

let escritosBallerina = [
  {
    "titulo": "Corazón de Bailarín",
    "autor": "Ainulinde",
    "editorial": "Obtenido de Tumblr y Fan Fiction",
    "genero" : "Ballerina",
    "portada" : "https://i.pinimg.com/236x/2e/58/87/2e58873de5e23ed8e06e8a4051367261--tango-painters.jpg?nii=t",
    "sinopsis" : "'¿Por qué bailas?' Esa pregunta era fácil de responder: Era lo único que le daba sentido a su vida. Era lo único que hacía que su vida valiera la pena. '¿Para qué debo vivir, si no puedo bailar?' Esa pregunta fue más difícil. Y ella todavía no tenía respuesta.",
    "historia" : "file:///C:/Users/alive/Downloads/1.%20Coraz%C3%B3n%20de%20Bailar%C3%ADn.pdf"
    // "historia": "link del pdf" y que sea un div solito para que quepa el pdf
  },
  {
    "titulo": "En Pointe",
    "autor": "Lyricaldancer24",
    "editorial": "Obtenido de Fan Fiction",
    "genero" : "Ballerina",
    "portada" : "https://i.pinimg.com/474x/20/54/4e/20544e00c80b9fc5e54ce09ec0f8bfe0.jpg",
    "sinopsis" : "Merante es instructor en el estudio donde entrena Felicie, Odette trabaja como limpiadora y ajustadora de zapatillas de punta, y Felice tiene 14 años y vive con Odette. Esto es después de su actuación de Cascanueces.",
    "historia" : "file:///C:/Users/alive/Downloads/2.%20En%20Pointe.pdf"
  },
  {
    "titulo": "Merante and Odette",
    "autor": "DolphynVIP",
    "editorial": "Obtenido de Wattpad",
    "genero" : "Ballerina",
    "portada" : "https://i.pinimg.com/474x/3a/76/2c/3a762c910c0260c2ee6869ffd4ecdacd.jpg",
    "sinopsis" : "Cuando se llevaron a Félicie, punto de partida.",
    "historia" : "file:///C:/Users/alive/Downloads/3.%20Merante%20and%20Odette.pdf"
  },
  {
    "titulo": "Por qué 'Tradicion'",
    "autor": "Tangled4ever",
    "editorial": "Obtenido de Fan Fiction",
    "genero" : "Ballerina",
    "portada" : "https://i.pinimg.com/originals/8e/c4/2f/8ec42fb24047a5e18c8c57313784932a.jpg",
    "sinopsis" : "Después de enterarse de que Félicie nunca antes había tenido una Navidad real, Camille, Dora y Nora deciden hacer de esta la mejor Navidad de todas, con la tradición navideña favorita de Nora: el muérdago.",
    "historia" : "file:///C:/Users/alive/Downloads/4.%20Por%20qu%C3%A9%20_Tradici%C3%B3n_.pdf"
  },
  {
    "titulo": "Dreaming Wide Awake",
    "autor": "Placid-sky ",
    "editorial": "Obtenido de Fan Fiction",
    "genero" : "Ballerina",
    "portada" : "https://i.pinimg.com/474x/1d/e8/19/1de819daacf0e9cf8f47b1d3bb56e999.jpg",
    "sinopsis" : "Solo habían pasado un par de semanas después del gran debut de Fèlice y ella estaba llena de una pasión radiante y ardiente mientras continuaba con su viaje como bailarina. Actualmente se estaba quedando en un ático de Mèrante con su mentora Odette,  pero después de un tiempo, las cosas habían comenzado a cambiar.",
    "historia" : "file:///C:/Users/alive/Downloads/5.%20Dreaming%20Wide%20Awake.pdf"
  },
  {
    "titulo": "Odette's Past",
    "autor": "KalinaDaskalova",
    "editorial": "Obtenido de Wattpad",
    "genero" : "Ballerina",
    "portada" : "https://i.pinimg.com/564x/77/8c/51/778c518014101621324c0b4742dfdbfa.jpg",
    "sinopsis" : "Lo que pasó antes de que Felicie llegara, cómo eran las vidas de los jóvenes bailarines Odette y Mérante, y lo que el fuego trajo a sus vidas.",
    "historia" : "file:///C:/Users/alive/Downloads/6.%20Odette's%20Past.pdf"
  },
  {
    "titulo": "A Heart's Folly",
    "autor": "Lyricaldancer24",
    "editorial": "Obtenido de Fan Fiction",
    "genero" : "Ballerina",
    "portada" : "https://i.pinimg.com/474x/4d/85/5f/4d855fc3307ac3c184574394c37e0743.jpg",
    "sinopsis" : "Incluso si durante miles de años luz la luz de las estrellas todavía se refleja en la Luna, la Luna todavía siente el calor o los rayos. Y la Estrella todavía lo da todo. Todavía crea vida y comparte energía. Luna y Stellan pueden ser muy diferentes, pero también lo puede ser la opinión de una persona sobre ellos, Luna ha sido considerada el satélite frío y duro que nos orbita, Stellan es el simbolismo del calor, la luz y la esperanza. Sin embargo, a medida que se eclipsan, no importa cuán separados estén, aún encuentran la manera de alinearse perfectamente. Nuestros corazones pueden tener ambos lados, pueden romperse y volverse fríos y duros o pueden aprender a ser un faro de calidez y luz. Todo es cuestión de cómo elijas ser. ¿Tomarás las locuras, las angustias, la soledad y te convertirás en un observador distante? ¿O serás tú, mi querida Odette, la Luna de la que la gente aprenderá a depender?",
    "historia" : "file:///C:/Users/alive/Downloads/7.%20A%20Heart%C2%B4s%20Folly.pdf"
  },
  {
    "titulo": "Alone",
    "autor": "Smarti4Bullies",
    "editorial": "Obtenido de Fan Fiction",
    "genero" : "Ballerina",
    "portada" : "https://i.pinimg.com/474x/d0/a2/2c/d0a22ca8b07030afaf09c77cbc8a5e31.jpg",
    "sinopsis" : "Transcurre en la noche que vino después de la audición fallida de Felicie, y ella ha sido enviada devuelta al orfanato.",
    "historia" : "file:///C:/Users/alive/Downloads/8.%20Alone.pdf"
  },
  {
    "titulo": "Before",
    "autor": "Lyricaldancer24 ",
    "editorial": "Obtenido de Fan Fiction",
    "genero" : "Ballerina",
    "portada" : "https://i.pinimg.com/474x/8f/20/84/8f208473e546bff1de85e365e30f97bc.jpg",
    "sinopsis" : "Felicie piensa que la relación de Odette y Merante siempre fue fácil y sin complicaciones. Pero cuando Odette decide compartir su pasado con Felicie, la niña descubre que no todo fue lo que parece.",
    "historia" : "file:///C:/Users/alive/Downloads/9.%20Before.pdf"
  },
  {
    "titulo": "Love Set You Going",
    "autor": "tayuyaflutegirl92",
    "editorial": "Obtenido de Fan Fiction",
    "genero" : "Ballerina",
    "portada" : "https://img00.deviantart.net/c9a6/i/2017/095/a/6/louis_merante_and_odette_by_auramiyonautica-db4shty.jpg",
    "sinopsis" : "Después de los eventos de la película, Louis y Odette están juntos y han encontrado estabilidad en sus vidas. ¿Cómo reaccionarán ante algo que altere ese estado?",
    "historia" : "file:///C:/Users/alive/Downloads/10.%20Love%20Set%20You%20Going%20(1).pdf"
  },
  {
    "titulo": "Some other stories",
    "autor": "Diversos autores de Wattpad y Fan Fiction",
    "editorial": "Obtenidos de Wattpad y Fan Fiction",
    "genero" : "Ballerina",
    "portada" : "https://i.pinimg.com/474x/22/62/2c/22622c11b483bc1fb21c621433b62b51.jpg",
    "sinopsis" : "Una compilación de diversas historias, de distintos autores de distintas plataformas. Historias acerca de Felicie, Victor, Odette y Merante. Cada autor deja volar su imaginación para cada historia.",
    "historia" : "file:///C:/Users/alive/Downloads/12.%20Some%20other%20stories.pdf"
  },
  {
    "titulo": "Tete-a-tete",
    "autor": "PaperGardener",
    "editorial": "Obtenido de Wattpad y Fan Fiction",
    "genero" : "Ballerina",
    "portada" : "https://i.pinimg.com/474x/c4/fb/35/c4fb35934b8350a7053a6546b43f4616.jpg",
    "sinopsis" : "Mérante encuentra a Odette después de la desastrosa audición de Félicie y hablan de cosas que no se han dicho durante mucho tiempo. No sale como él esperaba. Pero entonces, tal vez fue hace mucho tiempo.",
    "historia" : "file:///C:/Users/alive/Downloads/11.%20Tete-a-Tete.pdf"
  }
]

app.get('/libreria', (req,res) => {
  res.json(libros)
})

app.get('/libreria/ballerina', (req,res) => {
  res.json(escritosBallerina)
})