// Metodo IIFE con Funcion Privada y Publica
const miFuncion = (() => {
  miMetodoPrivado = (url, id) => {
    document.getElementById(id).setAttribute("src", url)
  }
  return {
    miFuncionPublica: (url, id) => {
      miMetodoPrivado(url, id);
    }
  }
})();

// Creacion de Clase Padre con Metodo setInicio
class Multimedia {
  constructor(url) {
    let _url = url;
    this.getUrl = () => {
      return _url;
    };
    this.setUrl = (nuevo_url) => {
      _url = nuevo_url;
    };
  };
  setInicio = () => {
    console.log("Este método es para realizar un cambio en la URL del video");
  };
};

// Creacion de Clase Hija con Metodos playMultimedia y setInicio 
class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    let _id = id;
    this.getId = () => {
      return _id;
    };
    this.setId = (nuevo_id) => {
      _id = nuevo_id;
    };
  };
  // Metodo playMultimedia que llama a la Funcion Publica
  playMultimedia = () => {
    miFuncion.miFuncionPublica(this.getUrl(), this.getId())
  };
  // Metodo setInicio que agrega un tiempo de inicio a los url
  setInicio = () => {
    console.log("Este método es para realizar un cambio en la URL del video");
    miFuncion.miFuncionPublica(`${this.getUrl()}?start=${60}`, this.getId())
  };
};

// SRC y ID de Musica, Pelicula y Serie
let srcMusica = new Reproductor("https://www.youtube.com/embed/wfF0zHeU3Zs", "musica");
let srcPelicula = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY", "peliculas");
let srcSerie = new Reproductor("https://www.youtube.com/embed/QLuLrC8xn3A", "series");
let notificacion = new Multimedia

// Se ejecuta playMultimedia
srcMusica.playMultimedia();
srcPelicula.playMultimedia();
srcSerie.playMultimedia();

// Se Ejecuta el mensaje de setInicio
notificacion.setInicio();

// Se Ejecuta setInicio 60 seg en los url de Musica, Pelicula y Serie
srcMusica.setInicio();
srcPelicula.setInicio();
srcSerie.setInicio();
