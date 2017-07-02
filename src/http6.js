import http from 'http';
import dep from './dep';

debugger;
dep();
const v = Math.random();
const a = do {

  if (v > 5) {
    'b';
  } else {
    'c';
  }
};
console.log(a);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  debugger;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

const port = 3000;
const hostname = 'localhost';
server.listen(port, hostname, () => {
  console.log(`Server2 running at http://${hostname}:${port}/`);
});
