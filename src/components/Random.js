/*data
: 
data: 
analytics: 
{onload: {…}, onclick: {…}, onsent: {…}}
analytics_response_payload: 
"e=Z2lmX2lkPWo2cjZQSDlwbWtMZGNTM080ZCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWIwZDM2ZTVheGpmaDd6Y252OTd2OHJobW83dmpsOGw5ZGs2eWQyZzR4MXF2N2R0YiZjdD1n"
bitly_gif_url: 
"https://gph.is/g/amQGV0j"
bitly_url: 
"https://gph.is/g/amQGV0j"
content_url: 
""
embed_url: 
"https://giphy.com/embed/j6r6PH9pmkLdcS3O4d"
id: 
"j6r6PH9pmkLdcS3O4d"
images: 
{original: {…}, downsized: {…}, downsized_large: {…}, downsized_medium: {…}, downsized_small: {…}, …}
import_datetime: 
"2020-11-28 13:40:41"
is_sticker: 
... so on  esa output aata hai api ko call karne par*/

import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

function Random() {
  const [gif, setGif] = useState("");
  const [loader, setLoader] = useState(false);

  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

  //   all the above api using useEffect() hook first render me hee call kar denge

  async function fetchData() {
    setLoader(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    // const output = await axios.get(url);
    // console.log(output);
    // image ka path ye hai
    // destructing the data api me data->data->images->downsized-large.url
    const { data } = await axios.get(url);
    const imageUrl = data.data.images.downsized_large.url;
    // console.log(imageUrl);
    // put the image in gif variable by setGif()
    setGif(imageUrl);
    setLoader(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  //   generate rendom meme
  function generateGif() {
    fetchData();
  }
  return (
    <div
      className="w-[600px] h-[400px] bg-green-500 rounded-md border-2
    flex flex-col mt-[10px] gap-y-9 items-center
    border-black" 
    >
      <h1 className="font-bold text-xl underline uppercase mt-[30px]">
      A Random Gifs
      </h1>
      {loader ? <Spinner /> : <img src={gif} alt="gif" className="mb-8w-[400px] rounded-md shadow-lg shadow-black content-start overflow-hidden h-[450px]"/>}

      <button
        onClick={generateGif}
        className="w-1/2 bg-white opacity-90 rounded-md py-2 text-xl font-semibold mb-12"
      >
        Generate
      </button>
    </div>
  );
}
export default Random;
