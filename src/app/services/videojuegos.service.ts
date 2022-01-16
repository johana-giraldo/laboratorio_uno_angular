import { Injectable } from '@angular/core';

@Injectable()
export class VideojuegosService {
  private videojuegos: Videojuego[] = [

    { nombre: 'Fortnite',
      descripcion: 'Fortnite es un videojuego del año 2017' + ' desarrollado por la empresa Epic Games, lanzado como' +
        ' diferentes paquetes de software que presentan diferentes' +
        ' modos de juego, pero que comparten el mismo motor' +
        ' general de juego y las mecánicas.Fue anunciado en los' +
        ' Spike Video Game Awards en 2011.',
      img: 'assets/img/ps4/fortnite.jpg',
      lanzamiento: '25 de julio de 2017',
      consola: 'PS4'

},
    {
      nombre: 'Red Dead Redemption 2',
      descripcion: 'Es la secuela del videojuego de éxito de Rockstar Red Dead Redemption (2010),' +
        ' considerado como uno de los mejores títulos de la compañía. Se trata de la tercera entrega ' +
        ' de la saga Red Dead, iniciada en 2004 con Red Dead Revolver y nos trasladará de nuevo al Salvaje Oeste para ponernos en el escenario' +
        ' de mundo abierto más grande jamás creado por los padres de Grand Theft Auto y contarnos ' +
        ' una historia sobre forajidos, venganza y atracos en un escenario de gran realismo en PlayStation 4 y Xbox One.',
      img:'assets/img/xbox/RD2.jpg',
      lanzamiento: '26 de octubre de 2018',
      consola: 'Xbox'
    },
    {
      nombre: 'Grand Theft Auto V ',
      descripcion: 'Es una versión mejorada y ampliada del GTA V original aparecido en PS3 en 2013.' +
        ' Contará con nuevos gráficos y nuevo contenido como armas, vehículos o misiones, además de una banda ' +
        ' sonora ampliada y más jugadores en el modo online.' +
        ' Nos cuenta la épica historia de Michael, Franklin y Trevor en la ciudad de Los Santos y sus alrededores.',
      img:'assets/img/ps4/GTA.jpg',
      lanzamiento: '18 de noviembre de 2014',
      consola: 'PS4'
    },
    {
      nombre: 'God Of War',
      descripcion: 'Es la vuelta de Kratos a los videojuegos tras la trilogía original. Esta nueva entrega para ' +
        ' PlayStation 4, si bien mantendrá varios de los ingredientes indivisibles de su jugabilidad, ' +
        ' apostará por un nuevo comienzo para el personaje y una ambientación nórdica, ofreciéndonos una ' +
        ' perspectiva más madura y realista de la mitología de dioses y monstruos milenarios habitual en' +
        ' la serie de títulos. En God of War, Kratos será un guerrero más curtido y pasivo, pues tendrá que desempeñar ' +
        ' el rol de padre en un frío y hostil escenario, al que parece haberse retirado para olvidar su pasado.',
      img:'assets/img/ps4/GOW.jpg',
      lanzamiento: '2018',
      consola: 'PS4'
    },
    {nombre: 'The Witcher 3: Wild Hunt',
      descripcion: 'Se trata de un videojuego que mezcla elementos de aventura, acción y rol en un mundo ' +
        ' abierto épico basado en la fantasía. El jugador controlará una vez más a Geralt de Rivia, el afamado ' +
        ' cazador de monstruos, (también conocido como el Lobo Blanco) y se enfrentará a un diversificadísimo bestiario y a unos peligros ' +
        ' de unas dimensiones nunca vistas hasta el momento en la serie, mientras recorre los reinos del Norte.',
      img:'assets/img/xbox/witche.jpg',
      lanzamiento: '19 de mayo de 2015',
      consola: 'Xbox'
    },
    {nombre: 'Final Fantasy XIV: Shadowbringers ',
      descripcion: 'Shadowbringers es la tercera expansión de Final Fantasy XIV y aumenta el límite de nivel ' +
        ' hasta 80, incluyendo como es habitual una nueva y elaborada historia y nuevos escenarios. ' +
        ' También cuenta clases nuevas, como los Gunbreakers, la primera clase anunciada, portadores de ' +
        ' espadas pistola, ' +
        ' como la que vimos de Squall en Final Fantasy VIII. Esta clase cumple el rol de tanque en los equipos.',
      img:'assets/img/ps4/shadow.jpg',
      lanzamiento: 'noviembre de 2018',
      consola: 'PS4'
    },
    {nombre: 'Resident Evil 2 Remake (25 de enero de 2019',
      descripcion: 'Supone un cambio de perspectiva jugable, de estilo de juego y de ambientación,' +
        ' un concepto muy ambicioso desde el plano técnico y artístico ' +
        ' pero que mantendrá la esencia del emblemático videojuego que marcó un antes y un después.',
      img:'assets/img/xbox/RE2.jpg',
      lanzamiento: '2019',
      consola: 'Xbox'
    },
    {
      nombre: 'Horizon: Zero Dawn',
      descripcion: 'Ambientado en un futuro apocalíptico distante, los seres humanos han experimentado' +
        ' una regresión tecnológica que los ha devuelto a la edad de piedra y dividido en tribus. Encarnando a ' +
        ' Aloy, una hábil cazadora, deberemos descubrir secretos del pasado, ' +
        ' así como sobrevivir en un nuevo mundo plagado de criaturas robóticas inteligentes, hostiles y muy peligrosas.',
      img:'assets/img/ps4/horizon.jpg',
      lanzamiento: '7 de octubre de 2020',
      consola: 'PS4'
    },
    {nombre: 'Monster Hunter World ',
      descripcion: 'Es el retorno de la serie a las consolas de sobremesa, permitiéndonos cazar criaturas gigantes' +
        ' en un entorno salvaje, ya sea en solitario o con tres cazadores con un nuevo sistema multijugador' +
        ' drop-in que permite cooperativo entre regiones. Mantendrá las señas de identidad, su sistema de creación' +
        ' y equipamiento para cazar monstruos, mientras mejoramos nuestras habilidades. Los recursos se podrán ' +
        ' utilizar para mejoras y otro equipamiento. Su jugabilidad facilita explorar el mapa sin transiciones,' +
        ' con ciclo horario.',
      img:'assets/img/ps4/monsterhunter.png',
      lanzamiento: '26 de enero de 2018',
      consola: 'PS4'
    },
    {
      nombre: 'Spider-Man',
      descripcion: 'Es un videojuego de acción y aventuras con un estilo jugable de mundo abierto, que permite' +
        ' al jugador desplazarse de un lugar a otro con total libertad de movimientos y que tiene por escenario' +
        ' donde de desarrolla la historia, la ciudad de Nueva York. El juego está desarrollado por Imsomniac Games,' +
        ' creadores de juegos como Spyro, Ratchet & Clank o' +
        ' Sunset Overdrive, entre otros y además está producido por Sony como videojuego exclusivo de PlayStation 4.',
      img:'assets/img/ps4/spiderman.jpg',
      lanzamiento: '7 de septiembre de 2018',
      consola: 'PS4'
    }
  ];

  constructor() {
    console.log('Servicio listo para usarse');
  }

  getVideojuegos(): Videojuego[] {
    return this.videojuegos;
  }

  getVideojuego(idx: number) {
    return this.videojuegos[idx];
  }

  buscarVideojuego(termino: string): Videojuego[] {
    let videojuegosArr: Videojuego[] = [];

    termino = termino.toLowerCase();

    for (let videojuego of this.videojuegos) {
      let nombre = videojuego.nombre.toLowerCase();
      if (nombre.indexOf(termino) >= 0)
      {
        videojuegosArr.push(videojuego);
      }
    }
    return videojuegosArr;
  }
}

export interface Videojuego{
  nombre: string;
  descripcion: string;
  img: string;
  lanzamiento: string;
  consola: string;
}


