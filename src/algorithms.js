function bubbleSort(arr){
    /*
    how do I want to store the comments and show them on the logger to the user????
    for now written as console logs
    */
    console.log('sorting the following array:');
    console.log(arr);
    for(let i=arr.length-1; i>=0; i--){
        for(let j=0; j<=i; j++){
            console.log('is element', arr[j],'greater than',arr[j+1]);
            if(arr[j]>arr[j+1]){
                console.log('yes');
                console.log('switching elements');
                let temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                console.log('now array looks like this');
                console.log(arr);
            }
            else{
                console.log('no so we move on to next element in array');
            }
        };
    };
    console.log('final array looks like this');
    console.log(arr);
};

