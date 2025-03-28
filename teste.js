class Veiculo {
    constructor (modelo, ano){
    this.modelo = modelo;
    this.ano = ano;
    }

    CalcularConsumo() {
        let consumo;

        if(this.ano <= 2000) {
            consumo = 8;
        }
        else if(this.ano >= 2001) {
            consumo = 13;
        };

        return `O consumo médio do ${this.modelo} (${this.ano}) é de ${consumo} km/litro.`;
    }

}
