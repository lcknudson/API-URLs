
const residentsContainer = document.querySelector('#residents-container')
const residentsBtn = document.querySelector('#residents-button')
const errCallback = err => console.warn(`Catch error:`, err);

const alderaanURL = 'https://swapi.dev/api/planets/2/'

let alderaanResidents = []
let newLocalResidents = []
let localResidents = []

let p = document.getElementById(`residents-container`)

function timedReload() {
    setTimeout(reloadDIV, 10)
}

function reloadDIV () {
    document.getElementById("api-contents").innerHTML.reload,
    p.innerHTML = localResidents
}

function getResidents() {
    newLocalResidents = []
    getAlderaanData();
    return
}

function addResident(input) {
    localResidents.push(input)

}



async function getAlderaanData(req, res) {
    await axios
    .get(alderaanURL)
    .then(alderaanRes => {
        let p = document.getElementById(`residents-container`)
        alderaanResidents = alderaanRes.data.residents
            p.innerHTML = localResidents

            for (let i =0; i < alderaanResidents.length; i++) {
                addtoArray(alderaanResidents[i])
            }

        })           
        
        .catch(errCallback)
        return
    };

    
    async function addtoArray(req, res) { 
        
    await axios
    .get(req)
    .then(res => { 
            
            localResidents = newLocalResidents
            
            timedReload()
            
            addResident(res.data.name)
            // throw new Error(`made up error`)
            //example of how to force an error
        }
        )
        .catch(errCallback)      
        
        return 
        
    }
    
    
    residentsBtn.addEventListener('click', getResidents)
    
    
    //This code block was working. Moved to bottom for reference later
    // const getAlderaanData = (req) => 
    // axios
    //     .get(alderaanURL)
    //     .then(alderaanRes => {
    //     let p = document.getElementById(`residents-container`)
    //     alderaanResidents = alderaanRes.data.residents
    //         // console.log(`data`)
    //         // let { residents } = data.body
    //         console.log(`19`, alderaanResidents)
    
    //         // p.innerHTML = JSON.stringify(alderaanResidents)
    //         p.innerHTML = localResidents
    
    //         for (let i =0; i < alderaanResidents.length; i++) {
    //             addtoArray(alderaanResidents[i])
    //             console.log(`for loop running:`, [i])
    //         }
    
    //     })
    //     .then( () => {
    //         console.log(`did we make it here?`)
    //         })
    //     .then(p.innerHTML = localResidents)    
    //     .catch(errCallback)
     
    // ;