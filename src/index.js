module.exports = function reverseNum(n)
{
    if(n)
    {
        return reverseNum(Math.floor(n / 10),
        (result*10)+(n % 10));
    };
    return result; 
};

