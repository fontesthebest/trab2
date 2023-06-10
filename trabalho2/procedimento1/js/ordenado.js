let vetor=[5,1,3,2,4]

const swap= (arr,vet,pos) => {

    num= arr.indexOf(vet)
    num2= arr[pos]
    
    arr.splice(pos,0,arr.splice(num,1)[0])
    
    num3= arr.indexOf(num2)
    arr.splice(num,0,arr.splice(num3,1)[0])

    return arr
};

const permutations = arr => {
    if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
    return arr.reduce(
      (acc, item, i) =>
        acc.concat(
          permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
            item,
            ...val,
          ])
        ),
      []
    );
  };

const shuffle = (arr,perm) => {
    nova=permutations(arr)
    return nova[perm]
};


const bubble_sort = (arr) => {
  
    for (let i = 0; i < arr.length; i++) {
  
        for (let j = 0; j < (arr.length - i - 1); j++) {
  
            if (arr[j] > arr[j + 1]) {
 
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

const selection_sort = (arr) => {
    for (let i =0; i < arr.length; i++) {
        
        let min =i;
        for(let j= i+1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min=j
            }
        }
        if (min !=i) {
 
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }

    }
    return arr
}

const quickSort = (arr, ini, fim) =>{
    var i = ini;
    var f = fim;
    var m = Math.floor((i + f)/2);

    while(i < f)
    {
        while(arr[i] < arr[m])
            i++;

        while(arr[f] > arr[m])
            f--;

        if(i <= f)
        {
            var temp = arr[i];
            arr[i] = arr[f];
            arr[f] = temp;
            i++;
            f--;
        }
    }

    if(f > ini)
        quickSort(arr, ini, f);

    if(i < fim)
        quickSort(arr, i, fim);
        
    return arr
}

const particionamento = (arr, ini, fim,piv) =>{
    var i = ini;
    var f = fim;
    var m = piv;

    while(i < f)
    {
        while(arr[i] < arr[m])
            i++;

        while(arr[f] > arr[m])
            f--;

        if(i <= f)
        {
            var temp = arr[i];
            arr[i] = arr[f];
            arr[f] = temp;
            i++;
            f--;
        }
    }

    if(f > ini)
        quickSort(arr, ini, f);

    if(i < fim)
        quickSort(arr, i, fim);
        
    return arr
}

console.log(shuffle(vetor,2));


/*v-for="(user,index) in users" :key="index"*/