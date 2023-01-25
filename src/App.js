import "./App.css";
import { useState, useEffect, useRef } from "react";
import GetData from "./Components/Eventdata/Database";

import { app } from "./firebase";
import { getStorage } from "firebase/storage";
import {
  ref,
  getDownloadURL,
  listAll,
} from "firebase/storage";

const storage = getStorage(app);

function App() {
  const [imageUrls, setImageUrls] = useState([]);
  const dataFetchedRef = useRef(false);
  
  const imagesListRef = ref(storage, "images");

  useEffect(() => {
    if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;

    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          let iname={
            name: item.name,
            url: url
          };
          setImageUrls((prev) => [...prev, iname]);
        });
      });
    });
  }, []);

  return (
    <>
      {/* <div className="image">
        {imageUrls.map((url) => {
          return <img src={url} className="image" alt="celebrity" />;
        })}
      </div> */}
      <GetData arr={imageUrls}/>

    </>
  );
}

export default App;
