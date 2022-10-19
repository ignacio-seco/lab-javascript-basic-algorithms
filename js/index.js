// Iteration 1: Names and Input
let hacker1 = "Ignacio"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Alvaro"
console.log(`The navigator's name is ${hacker2}`)
//
// Iteration 2: Conditionals
if(hacker1.length>hacker2.length)
{    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if(hacker1.length<hacker2.length)
{
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)

// Iteration 3: Loops
let driversUp=``
let navigatorReverse=``

for(let i=0; i<hacker1.length;i++)
{
    driversUp=driversUp+(hacker1.toUpperCase())[i]
    driversUp=driversUp+` `
} {console.log(driversUp)}
for(let i=1; i<=hacker2.length;i++)
{
 navigatorReverse=navigatorReverse+(hacker2[(hacker2.length-i)])   
}
{
    console.log(navigatorReverse)
}
if(driversUp<navigatorReverse)
{    console.log(`The driver's name goes first.`)
}
else if(driversUp>navigatorReverse)
{
    console.log(`Yo, the navigator goes first definitely.`)
}
else 
{
    console.log(`What?! You both have the same name?`)
}

// Bonus 1
let lorem=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor quam massa, id blandit lorem lacinia a. Duis tempor tellus lectus, vel dignissim eros egestas vel. Etiam blandit, ex id convallis vulputate, tellus augue hendrerit neque, et faucibus diam sapien eu massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam tristique nulla enim, a consequat nisl vehicula ac. Fusce sit amet risus in sem scelerisque dictum. Donec a enim ex. In hac habitasse platea dictumst. Nullam tortor augue, porta vitae elementum sit amet, dignissim porttitor ipsum. Etiam at tellus tristique, imperdiet arcu ut, porta libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi sem, molestie ac magna ut, viverra porttitor nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed at pharetra velit.

Ut pharetra congue nisl at dictum. In eu vulputate velit, sit amet interdum sem. Vestibulum consequat ac eros nec luctus. Donec consectetur metus at enim pretium, nec varius tellus interdum. Integer sed magna ullamcorper, dictum lorem id, rhoncus est. Integer suscipit sed ligula vel tristique. Mauris quis odio ex. Quisque mattis tincidunt turpis, non vestibulum nisl hendrerit convallis. Nulla porta tortor tellus. Proin porta congue ante, id fermentum sem. Mauris feugiat, nibh in efficitur accumsan, ligula augue pharetra nunc, eget scelerisque nulla mi ut mi. Maecenas egestas ipsum in pharetra elementum.

Aenean eu tempus ex, at porta quam. Nunc lobortis sagittis pretium. Maecenas consequat mi vitae turpis congue, posuere porttitor ipsum faucibus. Nam viverra dui leo, ut porta ex consectetur placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus mi sapien, dapibus vitae rhoncus vitae, aliquet in turpis. Cras sodales malesuada mauris ut efficitur. Etiam auctor tortor volutpat odio luctus, sit amet imperdiet nunc finibus. Praesent eu feugiat velit, a placerat ipsum. Ut ultricies euismod ultricies. Nam varius massa id leo mattis, ac egestas nisi cursus.`

function countWords(string)
{
let words
words=0
for(let i=0;i<string.length;i++)
{ 
    if ((string[i]===` `)&&(!(string[i-1]===` `)))// so, we only count "spaces that does not have another space before, double or tiple spaces are only counted once..."
    {
        words=words+1
    }
    else if (i+1<string.length)
    {if (((string[i]===`.`)||(string[i]===`!`)||(string[i]===`?`)||(string[i]===`;`)||(string[i]===`:`))&&(!(string[i+1]===` `)))
    {
        words=words+1
    }
    {continue}
    }
}
{
    if (!(string[string.length-1]===` `))
    {
        words=words+1
    } 
};
console.log(words)
}

function countEt(phrase)
{
let et
et=0
for(let i=0;i<phrase.length-1;i++)
{if(((phrase[i]===`e`)||(phrase[i]===`E`))&&((phrase[i+1]===`t`)||(phrase[i+1]===`T`)))
{
    if((i===0)&&((phrase[i+2]===" ")||(phrase[i+2]===`.`)||(phrase[i+2]===`!`)||(phrase[i+2]===`?`)||(phrase[i+2]===`;`)||(phrase[i+2]===`:`)||(phrase[i+2]===`,`)))
    {
        et=et+1
    }
     else if((i===phrase.length-2)&&(((phrase[i-1]===" ")||(phrase[i-1]===`.`)||(phrase[i-1]===`!`)||(phrase[i-1]===`?`)||(phrase[i-1]===`;`)||(phrase[i-1]===`:`)||(phrase[i-1]===`,`))))
     {
        et=et+1
    }
     else if(((phrase[i-1]===" ")||(phrase[i-1]===`.`)||(phrase[i-1]===`!`)||(phrase[i-1]===`?`)||(phrase[i-1]===`;`)||(phrase[i-1]===`:`)||(phrase[i-1]===`,`))&&((phrase[i+2]===" ")||(phrase[i+2]===`.`)||(phrase[i+2]===`!`)||(phrase[i+2]===`?`)||(phrase[i+2]===`;`)||(phrase[i+2]===`:`)||(phrase[i+2]===`,`)))
        {
            et=et+1
        }
     else continue;
    }
    else continue;
} 
{
    console.log(et)
}
}

countWords(lorem)
countEt(lorem)

//Bonus 2
function isAPalindrome(palindrome){
let phraseToCheck
phraseToCheck=``
let reversephrase
reversephrase=``
for(let k=0;k<palindrome.length;k++)
{if((!(palindrome[k]===" "))&&(!(palindrome[k]==="."))&&(!(palindrome[k]===","))&&(!(palindrome[k]==="!"))&&(!(palindrome[k]==="?"))&&(!(palindrome[k]===":"))&&(!(palindrome[k]===";"))){
    phraseToCheck=phraseToCheck+((palindrome.toUpperCase())[k]);
} else {continue};
}
{
    for(let t=1;t<=phraseToCheck.length;t++)
    {
        reversephrase=reversephrase+(phraseToCheck[(phraseToCheck.length-t)]) 
    }
    {console.log(phraseToCheck);
console.log(reversephrase)
console.log(phraseToCheck===reversephrase)
}
}
}


let test= "A man, a plan, a canal, Panama!"
isAPalindrome (test)

