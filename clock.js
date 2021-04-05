// Match the hour no matter the pattern that it's established.
const test = 'Published by: Levi Ermonaites, Brazil, Sao Paulo, 4:50AM';

console.log(
  test.match(
    /\b(((([0-1]?[0-2])|[0]?[0-9]):[0-5]?[0-9] *[AP]M)|(([0-1]?[0-9])|(2[0-3])):[0-5]?[0-9])[-,.]?\b/gi
  )
);
