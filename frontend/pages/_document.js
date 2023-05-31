import { Html, Head, Main, NextScript } from 'next/document';
 
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel ="shortcut icon" href='/favicon/favicon.ico'/>
        <link href="https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap" rel="stylesheet"></link>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></script>
        
        <title>Jojo's Stand Arrow</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}