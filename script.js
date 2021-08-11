
        // Starting from the current "base" bootstrap layout, implement the following exercise:

        // 1) When pressing on Load Images button, load the pictures from http://www.splashbase.co/api/v1/images/search?query=your query
        // 2) When pressing on Load Seconday Images, load the pictures from http://www.splashbase.co/api/v1/images/search?query=your secondary query
        // 3) When the user clicks on the "VIEW" button inside the Card, open the specified image in a modal view
        // 4) The Edit button should be replace with a "Hide" button. 
        // 5) When the hide button is pressed, the whole picture card disappears.
        // 6) Replace the "9 mins" string in the card template with the ID of the Image


       const showModal = (e) => {
           const url = e.target.closest(".card").children[0].src
           const body= document.querySelector('.modal-body')
           image=`<img src="${url}"/>`
           body.innerHTML= image



       }


        
        const displayImages = (data) =>{
            const row = document.querySelector('.album .row')
            row.innerHTML = ""

            data.map((photo)=>{
                row.innerHTML +=`

                <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                  <img src="${photo.src.tiny}"/>
                  <div class="card-body">
                
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary" 
                          onClick="showModal(event)"
                          data-toggle="modal" data-target="#exampleModal"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small class="text-muted">${photo.id}</small>
                    </div>
                  </div>`
            })

        }
      
        const loadImages = (query) => {
            fetch(`https://api.pexels.com/v1/search?query=${query}`, {
                "method": "GET",
                "headers": {
                    "Authorization": "Bearer 563492ad6f917000010000010ac492b0656442d1933d76c56ff8833e", 
                }
        
            })
                .then(response => response.json())
                .then(data => {
                    displayImages(data.photos)
                }).catch(err => console.log(err))
        }

        window.onload = () =>{
             const primaryButton = document.querySelector('.btn-primary')
             const secondaryButtonn = document.querySelector('.btn-secondary')

             primaryButton.addEventListener('click' ,  () =>{
                 loadImages('human')
             })
             secondaryButtonn.addEventListener('click', () =>{
                 loadImages('nature')
             })
            

        }