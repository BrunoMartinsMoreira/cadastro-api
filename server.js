import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log('-------------------');
  console.log(`server chegou na porta ${port}`);
  console.log(`http://localhost:${port}`);
});
