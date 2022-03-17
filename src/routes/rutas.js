const {Router} = require('express');
const router = Router();


const dataloca = require('./data.json');
//console.log(dataloca); esto para comprobar


//const express = require(express);
//const router = express.Router();


router.get('/proveedor/suelas/cantidad', (req,res) => {

    res.json(dataloca);

});

router.get('/proveedor/suelas/cantidad/:id', (req,res) => {

  const {id} = req.params;
  dataloca.forEach(cosa => {
      if(cosa.id == id)
      {
          res.json(cosa);
          console.log(cosa.title);
          console.log(cosa.cantidad);
          console.log(cosa.colores);
      }
  });
  console.log(dataloca[id].title);
  console.log(dataloca[id].cantidad);
  console.log(dataloca[id].colores);
 
 
 
  console.log(id);

});


router.post('/proveedor/suelas/cantidad', (req,res) => {
    const {title, cantidad, colores} = req.body;
    //verificacion
    if(title && cantidad && colores){
        const id = dataloca.length +1;
        const nuevoDataloca = {...req.body,id};
        dataloca.push(nuevoDataloca);
         // console.log(nuevoDataloca);

        //res.send(dataloca);
        res.status(200).json(dataloca);
    } else {
        res.status(500).json({error:'no data'});
       // res.send("Err 32: No Data");
    }
    

    res.send("ok");

});




/////////
router.get('/proveedor/agujetas/cantidad', (req,res) => {
    
    res.json(dataloca);
});


router.get('/proveedor/agujetas/cantidad/:id', (req,res) => {

    const {id} = req.params;
    dataloca.forEach(cosa => {
        if(cosa.id == id)
        {
            res.json(cosa);
            console.log(cosa.title);
            console.log(cosa.cantidad);
            console.log(cosa.colores);
        }
    });
    console.log(dataloca[id].title);
    console.log(dataloca[id].cantidad);
    console.log(dataloca[id].colores);
   
   
   
    console.log(id);
  
  });



router.post('/proveedor/agujetas/cantidad', (req,res) => {
    const {title, cantidad, colores} = req.body;
    //verificacion
    if(title && cantidad && colores){
        const id = dataloca.length +1;
        const nuevoDataloca = {...req.body,id};
        dataloca.push(nuevoDataloca);
         // console.log(nuevoDataloca);

        //res.send(dataloca);
        res.status(200).json(dataloca);
    } else {
        res.status(500).json({error:'no data'});
       // res.send("Err 32: No Data");
    }
    

    
    
    res.send("ok");

});





/////////////

router.get('/proveedor/telas/cantidad', (req,res) => {
    res.json(dataloca);
});

router.get('/proveedor/telas/cantidad/:id', (req,res) => {

    const {id} = req.params;
    dataloca.forEach(cosa => {
        if(cosa.id == id)
        {
            res.json(cosa);
            console.log(cosa.title);
            console.log(cosa.cantidad);
            console.log(cosa.colores);
        }
    });
    console.log(dataloca[id].title);
    console.log(dataloca[id].cantidad);
    console.log(dataloca[id].colores);
   
   
   
    console.log(id);
  
  });

router.post('/proveedor/telas/cantidad', (req,res) => {
    
    const {title, cantidad, colores} = req.body;
    //verificacion
    if(title && cantidad && colores){
        const id = dataloca.length +1;
        const nuevoDataloca = {...req.body,id};
        dataloca.push(nuevoDataloca);
         // console.log(nuevoDataloca);

        //res.send(dataloca);
        res.status(200).json(dataloca);
    } else {
        res.status(500).json({error:'no data'});
       // res.send("Err 32: No Data");
    }
    

    res.send("ok");

});



///////



router.get('/fabrica/zapatos/cantidad', (req,res) => {
    res.json(dataloca);
});

router.get('/fabrica/zapatos/cantidad/:id', (req,res) => {

    const {id} = req.params;
    dataloca.forEach(cosa => {
        if(cosa.id == id)
        {
            res.json(cosa);
            console.log(cosa.title);
            console.log(cosa.cantidad);
            console.log(cosa.piezas);
        }
    });
    console.log(dataloca[id].title);
    console.log(dataloca[id].cantidad);
    console.log(dataloca[id].piezas);
   
   
   
    console.log(id);
  
  });


router.post('/fabrica/zapatos/cantidad', (req,res) => {
    const {title, cantidad, piezas} = req.body;
    //verificacion
    if(title && cantidad && piezas){
        const id = dataloca.length +1;
        const nuevoDataloca = {...req.body,id};
        dataloca.push(nuevoDataloca);
         // console.log(nuevoDataloca);

        //res.send(dataloca);
        res.status(200).json(dataloca);
    } else {
        res.status(500).json({error:'no data'});
       // res.send("Err 32: No Data");
    }
    

    
    res.send("ok");

});


module.exports = router;