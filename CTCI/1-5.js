/*There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.*/
function oneAway(string1, string2)
{
  let count = 0;
  if (string1.length === string2.length - 1)//1 insertion or deletion away
  {
    for (let i = 0; i < string1.length; i++)
    {
      if (string1[i] !== string2[i + count])
      {
        count++;
      }
    }
    if (count === 1 || count === 0)
    {
      return true;//strings are same except 2 is longer than 1
    }
  }
  count = 0;

  if (string2.length === string1.length - 1)//1 insertion or deletion away
  {
    for (let i = 0; i < string2.length; i++)
    {
      if (string2[i] !== string1[i + count])
      {
        count++;
      }
    }
    if (count === 1 || count === 0)
    {
      return true;//strings are same except 1 is longer than 2
    }
  }
  count = 0;
  
  if (string1.length === string2.length)//1 replace away
  {
    for (let i = 0; i < string1.length; i++)
    {
      if (string1[i] !== string2[i])
      {
        count++;
      }
    }
    if (count === 1 || count === 0)
    {
      return true;
    }
  }
  return false;
}
