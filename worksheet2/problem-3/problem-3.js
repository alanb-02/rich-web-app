    /* to take username inputed by the user and retrieve the required information from the api to sidpay on the page */
    function getDetails(){
        document.getElementById('output').style.display="block";
        const name=document.getElementById('username').value;
        /* fetching from API endpoint */
        fetch(`https://api.github.com/users/${name}`)
        .then(response=>response.json().then(data=>{
            /* console.log(data) */
            /* inserting the details retrieved into the page formatted */
            document.getElementById('name').innerHTML= '<h3>Name: </h3>' + data.name;
            document.getElementById('usernam').innerHTML= '<h3>Username: </h3>' + data.login;
            document.getElementById('email').innerHTML= '<h3>Email: </h3>' + data.email;
            document.getElementById('location').innerHTML= '<h3>Location: </h3>' + data.location;
            document.getElementById('gists').innerHTML= '<h3>Number of Gists: </h3>' + data.public_gists;
            document.getElementById('profile').innerHTML= `<img src="${data.avatar_url}" />`
        }))
        /* function to display the repositories */
        getRepo()
    }



    /* function retrieve the repos from the the repo_url */
    function getRepo(){
        /* assiging a div already on the page */
        var wrapper = document.getElementById('rps');
        var newrep = "";
        document.getElementById('output2').style.display="block";
        /* getting username from user input */
        const name=document.getElementById('username').value;
        fetch(`https://api.github.com/users/${name}/repos`)
        .then(response=>response.json().then(data=>{
            /* console.log(data) */
            /* loops through to get all the repo names and descriptions */
            for (let i = 0; i < data.length; i++){
                /* inserting the repo inormation retrieved into the page formatted */
                newrep += '<div class="reps"><h4 id="rep"> Name => ' + data[i].name + '</h4><br>' + data[i].description + '</div>'
            }
            wrapper.innerHTML = newrep

        }))
    }