export default {
    /*Creamos las funciones para cada petición, estas funciones son asíncronas puesto que fetch nos devolverá una promesa que debemos esperar a que sea resuelta*/

    async getAllPosts(){
        /*creamos una variable para almacenar la respuesta de la promesa, usamos await para esperar a que la promesa se resuelva*/
        const response = await fetch( `http://apieducare.mybluemix.net/resources`, {
            headers: {
                "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMzA1ZDAzODM5ZjFmNDI1YTRlYTk4NiIsImlhdCI6MTYxMzc5OTgzMn0.hifm17Knm06wZtjB4WcdwG0EL90g9ndnkgOlkXKsK-U"
            }
        } )

        /*regresamos la respuesta de la petición, usando await para esperar que resuelva el método .json()*/
        return await response.json()
    },
    async getActivityById(token, id, callBack){
        await fetch(`http://apieducare.mybluemix.net/resources/${id}`, {
            method : 'GET',
            headers: { 
                'Content-Type': 'application/json',
                "Authorization": token
            }
        })            
        .then( response => {
            if(!response.ok){
                return response.json()
                .then(error => {throw new Error (error.message)})
            }
            return response.json()
        })
        .then( json => callBack(json.data))
        .catch( error => console.log(error))
    },

    async saveNewActivityHandler(token, newActivity ){
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                "Authorization": token
             },
            body: JSON.stringify( newActivity )
        };


        await fetch('http://apieducare.mybluemix.net/resources', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                window.location.href = "http://localhost:3000/actividades"
            });
             
    }
    
}