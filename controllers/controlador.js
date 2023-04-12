exports.matricula = {
    programacion:"",
    modulos:"",
    metodo:"",
    valor:0,
    oferta:0
}
//funcion para matricula.ejs
exports.lenguajes = (req, res) => {
    const programacion = req.body.programacion;
  
    this.matricula.valor = 1200;
  
    switch (programacion) {
      case "PHP":
        this.matricula.valor = 800;
        break;
      case ".NET":
        this.matricula.valor = 1500;
        break;
      default:
        break;
    }
  
    this.matricula.programacion = programacion;
  
    res.redirect("./matricula_check");
  };
//funcion para matricula_check
exports.modulos= (req , res) => {
    const modulos = req.body.modulos;
    this.matricula.modulos = modulos
    res.redirect("matricula_pago");
}
//funcion para matricula_pago
exports.metodo = (req, res) => {
    const metodo = req.body.metodo;
    this.matricula.metodo = metodo;
  
    let valor = this.matricula.valor;
    this.matricula.oferta = valor;
  
    switch (metodo) {
      case "efectivo":
        this.matricula.oferta = valor - (valor * 0.10);
        break;
      default:
        break;
    }
  
    res.redirect("/form_fin");
  };
  



