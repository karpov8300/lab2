//задача 1
function hasTwoCubeSums(n)
{
  let count = 0;
  const limit = Math.floor(Math.cbrt(n));
  for(let a=1; a<=limit; a++)
    {
      for(let b=a+1;b<=limit; b++)
        {
          if(a*a*a+b*b*b===n)
            {
              count++;
              if (count>=2)return true;
            }
        }
    }
  return false;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//задача 2 
function hasTwoCubeSums(n) {
	let count = 0;
  const found = new Set();
  
  for(let a = 1; a <= Math.cbrt(n); a++)
    {
      for(let b = a + 1; b<= Math.cbrt(n); b++)
        {
          if(a * a * a + b * b * b === n)
            {
              if(!found.has(a) && !found.has(b))
                {
                  count++;
                  found.add(a);
                  found.add(b);
                  if (count >=2 ) return true
                }
            }
        }
    }
   return false;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//задание 3
function ipv4Parser(ip, mask)
{
  const ipParts = ip.split('.').map(Number);
  const maskParts = mask.split('.').map(Number);
  const network = ipParts.map((part, i)=>part & maskParts[i]);
  const host = ipParts.map((part, i)=>part & ~maskParts[i]);
  return [network.join('.'), host.join('.')]
}
//задание 4
function findMissing(list) {
    const step = (list[list.length - 1] - list[0]) / list.length;
    
    for (let i = 0; i < list.length - 1; i++) {
        if (list[i + 1] - list[i] !== step) {
            return list[i] + step;
        }
    }
    
    return list[0];
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//задание 4
function findMissing(list) {  
  const step = (list[list.length - 1] - list[0]) / list.length;
  for(let i=0; i<list.length - 1;i++)
    {
      if (list[i+1] - list[i] !==step)
        {
          return list[i] + step;
        }
    }
  return list[0];
  
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//задание 5
function primeFactors(n){
    //your code here
  let factors = {};
  let divisor =2;
  while (n>1)
    {
      while(n % divisor ===0)
        {
          factors[divisor]=(factors[divisor]||0)+1;
          n /=divisor;
          
        }
      divisor++;
    }
  let result ="";
  for (let prime in factors)
    {
      let exponent = factors[prime];
      if(exponent === 1)
        {
          result += `(${prime})`;
        }
      else
        {
          result += `(${prime}**${exponent})`;
        }
    }
  return result;
}