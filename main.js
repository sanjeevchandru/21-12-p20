document.write("19.compute the sum of each individual index value from two arrays"+"<br>");
document.write("The two array's are :[1,0,2,3,4] [3,5,6,7,8,13"+"<br>")
function test19(arr1,arr2){
    var x=[];
    let i=0;
    while(i<arr1.length&& i<arr2.length){
        x.push(arr1[i]+arr2[i]);
        i++;
    }
    if(arr1.length<arr2.length)
    {
        x.push(arr2[arr2.length-1]);
    }
    else{
        x.push(arr1[arr1.length-1]);
    }
    return x;
}
document.write("Sum of two array's : "+test19([1,0,2,3,4], [3,5,6,7,8,13])+"<br><br>");