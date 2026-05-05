import express from 'express'
import { startups } from './data/data.js'

const PORT = 7000

const app = express()

app.get('/api', (req, res) => {
    let filteredData = startups
    const { industry, country, continent, is_seeking_funding, has_mvp } = req.query;
    if(industry){
        filteredData = filteredData.filter(startup => 
            startup.industry.toLowerCase() === industry.toLowerCase()
        )
    }
    if(country){
        filteredData = filteredData.filter(startup => 
            startup.country.toLowerCase() === country.toLowerCase()
        )
    }
    if(continent){
        filteredData = filteredData.filter(startup => 
            startup.continent.toLowerCase() === continent.toLowerCase()
        )
    }
    if(is_seeking_funding){
        filteredData = filteredData.filter(startup => 
            startup.is_seeking_funding === JSON.parse(is_seeking_funding.toLocaleLowerCase())
        )
    }
    if(has_mvp){
        filteredData = filteredData.filter(startup => 
            startup.has_mvp === JSON.parse(has_mvp.toLocaleLowerCase())
        )
    }
    
    
/*


Test Cases

/api?industry=renewable%20energy&country=germany&has_mvp=true
  Should get the "GreenGrid Energy" object.

/api?industry=renewable%20energy&country=germany&has_mvp=false
  Should not get any object

/api?continent=asia&is_seeking_funding=true&has_mvp=true
  should get for objects with IDs 3, 22, 26, 29
*/

  res.json(filteredData)

})

app.listen(PORT, () => console.log(`server connected on port ${PORT}`))


