const axios = require('axios');
const router = require('express').Router();
const { Character, Episode } = require('../db');

router.get('/', async(req, res) => {
    try {
        let url = 'https://rickandmortyapi.com/api/character';
        let totalData = []
        for(let i=1; i < 6; i++){
            let response = await axios.get(url);
            alldata = await response.data;
            url = await alldata.info.next
            const allCharacters = await alldata.results
            
            allToShow = await allCharacters.map(e => {
                return {
                    id: e.id,
                    name: e.name,
                    species: e.species,
                    origin: e.origin.name,
                    image: e.image,
                    created: e.created,
                }
            })
            totalData = totalData.concat(allToShow)
        }
        let dbChar = []
        dbChar = await Character.findAll({
            include: {
                model: Episode,
                attributes: ['name'],
                through: {
                    attributes: [],
                }
            }
        })
        
        if(dbChar.length){
            fullData = totalData.concat(dbChar)
        }else {
            return totalData.length?res.status(200).json(totalData):res.status(404).json({error: 'No se encontraron Datos'})    
        }
        
        return fullData.length?res.status(200).json(fullData):res.status(404).json({error: 'No se encontraron Datos'})
    
    } catch (error) {
        console.log(error)
    }
})

router.get('/:id', async(req, res)=>{
    try {
        const {id} = req.params;

        console.log(id, 'id en get x id')
      
        if(id.length < 10 && typeof parseInt(id) === 'number'){
            
            const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            const personaje = await response.data
            
            if(personaje){
               const character = {
                    id: personaje.id,
                    name: personaje.name,
                    species: personaje.species,
                    origin: personaje.origin.name,
                    image: personaje.image,
                    created: personaje.created,
                }
                
                return res.status(200).json(character)
            } else {
                return res.status(404).json({error: 'Personaje no Encontrado!!'})
            }
        }else {
            const charDb = await Character.findByPk(id,{
                include: {
                    model: Episode
                }
            });
            console.log(charDb, 'char de DB')
            if(charDb) return res.status(200).json(charDb)
            return res.status(404).json({error: 'Personaje no Encontrado!!'})
        }
    } catch (error) {
        console.log(error)
    }


})

router.post('/', async(req,res)=>{
    try {
        const { name, species, origin, image, created, selectedEpisode } = req.body
        const character = await Character.create({
            name, species, origin, image, created
        })

        if(selectedEpisode){
            const idEpidb = await Episode.findAll({
                where: {
                    name: selectedEpisode
                }
            })
            const idEpi = [];
            idEpidb.forEach(epi => {
                idEpi.push(epi.dataValues.id)
            })
            await character.addEpisodes(idEpi);
        }

        if(!character) return res.status(404).json({error: 'No se pudo crear Personaje!'})
        res.status(201).json(character)
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;