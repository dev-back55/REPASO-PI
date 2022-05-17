const axios = require('axios');
const {Episode} = require('../src/db');

module.exports = async function initLoader(){
    try{
        let url = 'https://rickandmortyapi.com/api/episode';

        while(url){
            let allData = await axios(url);
            allData = allData.data;
            url = allData.info.next
            let allepisode = allData.results
            allepisode.forEach(async (item)=>{
                        await Episode.findOrCreate({ 
                            where:{
                                name: item.name
                            }
                        });
            });
        }    

    }catch(e){return console.log('Error => ', e)}
};
