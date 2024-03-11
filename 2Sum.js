let nums = [1,3,4,2,9];
let target = 13;
for(var i =0;i<nums.length;i++){
     for(var j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                  console.log([i,j]);
            }
      }
}