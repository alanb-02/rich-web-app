/* Problem 2 */
/* PLEASE RUN EACH PROBLEM SEPERATELY IN THE CONSOLE */



/* 1.	List all of the post titles having more than six words */
/* API */
fetch(`https://jsonplaceholder.typicode.com/posts`)
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
  




/* 2.  Show a word frequency map for all of the body contents of the posts */
/* API */
fetch(`https://jsonplaceholder.typicode.com/posts`)
.then(response=>response.json().then(data=>{

    /* result of merging multiple objects with sum of values */
    const result = {};

    /* each array elemnt */
    data.forEach((item) => {
        /* the objects key-value pairs are interated over using object.entries */
        for (let [key, value] of Object.entries(item)) { 
            /* checks if resulting object has property with the same name for key  */
            if (result[key]) { 
                result[key] += value; 
            } else { 
                result[key] = value;
            }
        }
    });

    /* the resulting merge body element is extracted into a string */
    var str = result.body;
    /* the string is split by the spaces */
    const arr = str.split(' ');
    /* the final result will be a single value  */
    var fresult = arr.reduce((prev, nxt) => {prev[nxt] = (prev[nxt] + 1) || 1; return prev;}, {});

    /* display result */
    console.log(fresult);

}))
    
