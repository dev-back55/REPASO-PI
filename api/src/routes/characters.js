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
        
        return totalData.length?res.status(200).json(totalData):res.status(404).json({error: 'No se encontraron Datos'})
    } catch (error) {
        console.log(error)
    }
})

router.get('/:id', async(req, res)=>{
    try {
        const {id} = req.params;
        
        if(typeof parseInt(id) === 'number'){
            
            const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            const personaje = await response.data
            
            if(personaje){
                character = {
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
        }
    } catch (error) {
        console.log(error)
    }


})

router.post('/', async(req,res)=>{
    try {
        const { name, species, origin, image, created } = req.body
        const character = await Character.create({
            name, species, origin, image, created
        })
        if(!character) return res.status(404).json({error: 'No se pudo crear Personaje!'})
        res.status(201).json(character)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;