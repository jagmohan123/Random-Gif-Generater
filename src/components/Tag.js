import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

function Tag() {
  // jo bhi tag ke andar input kare uski gif aa jaye uske leaye variable
  const [tag, setTag] = useState("");
  const [gif, setGif] = useState("");
  const [loader, setLoader] = useState(false);
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  async function fetchData() {
    setLoader(true);
    // tag ke basis me gif lana hai so end of the api add '&tag=${tag}'
    // tag ya last me kuch bhi add karna se response aata
    // hai ya nhi vo api me depend karta bcs api support karti hai ya nhi
    // yha ye api support kar rhi hai
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);
    const imageUrl = data.data.images.downsized_large.url;
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

  // changeHandler ko call karne par tag kee value change kar dunga
  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div
      className="w-[600px] h-[400px] bg-blue-500 rounded-md border-2
      flex flex-col mt-[10px] gap-y-9 items-center
      border-black"
    >
      <h1 className="font-bold text-white text-xl underline uppercase mt-[30px]">
        Random {tag}  Gifs
      </h1>
      {loader ? (
        <Spinner />
      ) : (
        <img
          src={gif}
          alt="gif"
          className="mb-8w-[400px] rounded-md shadow-lg shadow-black content-start overflow-hidden h-[450px]"
        />
      )}
      <input
        type="text"
        className="w-1/2 py-1 rounded-lg text-xl text-center"
        value={tag}
        onChange={changeHandler}
      ></input>

      <button
        onClick={generateGif}
        className="w-1/2 bg-white opacity-90 rounded-md py-2 text-xl font-semibold mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
}
export default Tag;
