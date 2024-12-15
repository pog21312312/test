const htmlString = `
<!DOCTYPE html>
<html>
<head>
  <title>Example HTML</title>
</head>
<body>
  <h1>Title 1</h1>
  <p>Paragraph 1</p>
  <h1>Title 2</h1>
  <p>Paragraph 2</p>
</body>
</html>
`;

const parser = new DOMParser();
const doc = parser.parseFromString(htmlString, 'text/html');

const titles = doc.querySelectorAll('h1');
const paragraphs = doc.querySelectorAll('p');

const jsonData = {
  titles: [],
  paragraphs: []
};

titles.forEach(title => {
  jsonData.titles.push(title.textContent);
});

paragraphs.forEach(paragraph => {
  jsonData.paragraphs.push(paragraph.textContent);
});

const jsonString = JSON.stringify(jsonData, null, 2);
console.log(jsonString);

