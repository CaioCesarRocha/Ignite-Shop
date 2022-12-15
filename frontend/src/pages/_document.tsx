import { Html, Head, Main, NextScript } from "next/document"
import { getCssText } from "../styles"

//necessário configurar este document, similar ao index nas app react.
//<style id=stitches é pra fazer com que o css funcione utilizando SSR, exemplo do JS desabilitado"
//Assim, tanto o html quanto o css sera renderizado pelo lado servidor
export default function Document(){
    return(
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
                <link 
                    href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,700;1,400&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Press+Start+2P&family=Roboto:wght@400;700&display=swap" 
                    rel="stylesheet"
                />
           
                <style id="stitches" dangerouslySetInnerHTML={{__html: getCssText()}}/>            
            </Head>
            <body>
                <Main />
                <NextScript/>
            </body>
        </Html>
    )
}