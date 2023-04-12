const express = require("express")
const router = express.Router()


router.get("/" , (req , res) =>{
    res.render("matricula")
})

const check = require("./controllers/controlador")

router.post("/lenguajes" , check.lenguajes)

//formulario2
router.get('/matricula_check', (req, res) =>{
    res.render('matricula_check');
   
});
router.post("/modulos" , check.modulos)


//formulario3
router.get('/matricula_pago', (req, res) =>{
    
    res.render('matricula_pago');
    
});
router.post("/metodo" , check.metodo)

router.get('/form_fin', (req, res) =>{
    let oferta;
    switch (check.matricula.metodo) {
      case "efectivo":
        oferta = `Su descuento final es: ${check.matricula.oferta}`;
        break;
      default:
        oferta = `Su total a pagar es: ${check.matricula.valor}, si quiere un descuento pague con efectivo`;
        break;
    }
    res.render('form_fin', { alumno: check.matricula, oferta: oferta });
  });
  

module.exports = router