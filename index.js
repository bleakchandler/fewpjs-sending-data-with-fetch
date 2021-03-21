function submitData(name, email) {

    // Deliverable 1 & Deliverable 4
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          name,
          email
        } )
      } )

      // Deliverable 2
      .then( function ( response ) {
        return response.json()
      } )
      .then( function ( object ) {
        document.body.innerHTML = object[ "id" ]
      } )

      // Deliverable 3
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )

}



