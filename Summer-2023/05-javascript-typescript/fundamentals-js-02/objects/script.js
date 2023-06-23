class NovaAmigo {
    constructor (nombre, edad, estado, signoSodiacal) {
        this.nombre = nombre
        this.edad = edad
        this.estado = estado
        this.signoSodiacal = signoSodiacal
    }

    leerCartas() {
        if (this.signoSodiacal === "aries") {
            return "Lorem ipsum dolor sit amet, vis vide soleat probatus no, qui ne dicat graece deleniti, per cu omnes putent veritus. Ne admodum habemus vel, eu est insolens deseruisse. Augue aliquid iracundia mel at. Vim et sumo tritani. Ut consul utamur necessitatibus vis, cum et malorum dolores, has fugit molestie et. Mel alterum legendos ei.";
        }
        if (this.signoSodiacal === "tauro") {
            return "Lorem ipsum dolor sit amet, vis vide soleat probatus no, qui ne dicat graece deleniti, per cu omnes putent veritus. Ne admodum habemus vel, eu est insolens deseruisse. Augue aliquid iracundia mel at. Vim et sumo tritani. Ut consul utamur necessitatibus vis, cum et malorum dolores, has fugit molestie et. Mel alterum legendos ei.";
        }
        if (this.signoSodiacal === "geminis") {
            return "Lorem ipsum dolor sit amet, vis vide soleat probatus no, qui ne dicat graece deleniti, per cu omnes putent veritus. Ne admodum habemus vel, eu est insolens deseruisse. Augue aliquid iracundia mel at. Vim et sumo tritani. Ut consul utamur necessitatibus vis, cum et malorum dolores, has fugit molestie et. Mel alterum legendos ei.";
        }
        //etc...
        return "a huevo"
    }

    añoDeNacimiento() {
        return 2023 - this.edad;
    }

    saludar() {
        console.log("huy socio que mas, la buena mi pa, me presento soy " + this.nombre);
    }
}

const endiablado = new NovaAmigo("Endi", 50, "4 esposas", "tauro");

const alejito = new NovaAmigo("Alejo", 400, "sabes que soy el CEO de la alianza nodo nova", "esqueleto");

endiablado.saludar()
console.log(endiablado.añoDeNacimiento())
console.log(endiablado.leerCartas())

alejito.saludar()
console.log(alejito.añoDeNacimiento())
console.log(alejito.leerCartas())

