import { Html, Head, Main, NextScript } from "next/document";
const style = `
body{
display: block;
background-color: #000;
}
#globalLoader{
    position: fixed;
    z-index: 1700;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    display: flex;
    left: 0,
    right: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: #000;
}

.spinner {
  background-image: linear-gradient(rgb(186, 66, 255) 35%,rgb(0, 225, 255));
  width: 100px;
  height: 100px;
  animation: spinning82341 1.7s linear infinite;
  text-align: center;
  border-radius: 50px;
  filter: blur(1px);
  box-shadow: 0px -5px 20px 0px rgb(186, 66, 255), 0px 5px 20px 0px rgb(0, 225, 255);
}

.spinner1 {
  background-color: rgb(36, 36, 36);
  width: 100px;
  height: 100px;
  border-radius: 50px;
  filter: blur(10px);
}

@keyframes spinning82341 {
  to {
    transform: rotate(360deg);
  }
}
`;
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style>{style}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id={"globalLoader"}>
          <div className="spinner">
            <div className="spinner1"></div>
          </div>
        </div>
      </body>
    </Html>
  );
}
