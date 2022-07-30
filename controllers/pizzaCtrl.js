const db = require("../sqlConnect");

const pizzaCtrl = {
    
    pizza: async (req, res) => { 
        try{
            await db.query("SELECT * FROM menu",[],(err,result)=>{
                if (err) throw err;
                if(result.length>0){
                    return res.status(200).send(result);
                }
            });
            
        }
        catch(error)
        {
            return res.status(500).json({ msg: err.message });
        }
        }
    ,
    sizes: async (req, res) => { 
        try{
            await db.query("SELECT * FROM size",[],(err,result)=>{
                if (err) throw err;
                if(result.length>0){
                    return res.status(200).send(result);
                }
            });
        }
        catch(error)
        {
            return res.status(500).json({ msg: err.message });
        }
        }
    ,
    desc: async (req, res) => { 
        try{
            await db.query("SELECT * FROM description",[],(err,result)=>{
                if (err) throw err;
                if(result.length>0){
                    return res.status(200).send(result);
                }
            });
        }
        catch(error)
        {
            return res.status(500).json({ msg: err.message });
        }
        }
    };

module.exports = pizzaCtrl