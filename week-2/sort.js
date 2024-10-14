//-------------------------- Bubble Sort -----------------------------

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-i-1; j++) {
            if (arr[j]>arr[j+1]) {
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    console.log('bubble sort is :',arr);   
}

bubbleSort([1,65,6,8,3,1,0])

//-------------------------- Insertion Sort ---------------------------


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
       let current=arr[i]
       let j=i-1
        while (j>=0&&arr[j]>current) {
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=current
    }
    console.log('insertion sort is :',arr);

}

insertionSort([9,3,6,1,6,8,4])


//---------------------------- Selection Sort ---------------------------

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex=i
        for (let j = i; j < arr.length; j++) {
         if (arr[minIndex]>arr[j]) {
           minIndex=j
         }
        }
        let temp=arr[i]
        arr[i]=arr[minIndex]
        arr[minIndex]=temp
    }
    console.log('selection sort :',arr);

}

selectionSort([8,8,6,0,2,4,5])


//------------------------------ Quick Sort --------------------------

function quickSort(arr) {
    if (arr.length<=1) {
        return arr
    }

    let left=[]
    let right=[]
    let pivot=arr[arr.length-1]

    // console.log('pivot',pivot);

    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i]<pivot) {
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }     
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

console.log('qucik sort is :', quickSort([7,8,4,6,5,0,2]));


//-------------------------------- Merge sort -----------------------------

function mergeSort(arr) {
    if (arr.length<=1) {
        return arr
    }

    let midd=Math.floor(arr.length/2)
    let right=mergeSort(arr.slice(midd))
    let left=mergeSort(arr.slice(0,midd))

    return merge(left,right)
}


function merge(left,right) {
    let i=0
    let j=0
    let result=[]
    while (i<left.length&&j<right.length) {
        if (left[i]>right[j]) {
            result.push(right[j])
            j++
        }else{
            result.push(left[i])
            i++
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j))
}

console.log('merge sort is :',mergeSort([77,4,9,0,22,5,4]));


