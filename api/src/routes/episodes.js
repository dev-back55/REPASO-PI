const router = require('express').Router();
const {Episode} = require('../db');


router.get('/', async (req,res,next)=>{
    try{
        const listEpisode = await Episode.findAll();
        const listToSend = [];
        listEpisode.forEach((elem)=>{
            const newEpisode = {
                id:elem.id,
                name: elem.name
            }
            
            listToSend.push(newEpisode);
        })
        res.json(listToSend);
    }catch(e){
        next(e);
    }
});

module.exports = router