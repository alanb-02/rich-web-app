/* 1.	List all of the post titles having more than six words */

/* API */
fetch(`http://jsonplaceholder.typicode.com/posts`)
.then(response=>response.json().then(data=>{

    /* each array elemnt */
    data.forEach((item) => {
        /* stroes title form that element */
        var str = item.title;
        /* splitting the string title into new array */
        const arr = str.split(' ');
        /* number of words in array*/
        var leng = arr.filter(word => word !== '').length;
        /* if title is greater than or equal to 6 in word length display title */
        if (leng >= 6){
            console.log(item.title)
        }
    });
    
}))
  
