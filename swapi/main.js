let getResidentsBtn = document.querySelector('#resident-button');

function getResBtn(event) {
    console.log('button clicked')
}

getResidentsBtn.addEventListener('click', getResBtn);

const getResidents = () => {
axios.get('https://swapi.dev/api/planets/2')
    .then(res => {
        const {residents} = res.data

        residents.forEach(url => {
            axios.get(url)
            .then(res => {
                console.log(res.data)

               let person = document.createElement('h2')
               person.textContent = res.data.name

               document.getElementById('resident-display').appendChild(person)

            })
        })
    })
}

document.getElementById('resident-button').addEventListener('click', getResidents)