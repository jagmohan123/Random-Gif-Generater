import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {

  return (<div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
    <h1 className="bg-white rounded-lg w-11/12 text-center 
     mt-6 font-bold text-3xl py-2">Random Gifs</h1>
    <div className='flex flex-col w-full border-box content-box items-center gap-y-10 mt-7 '>
      <Random />
      <Tag />
    </div>
  </div>);
}
