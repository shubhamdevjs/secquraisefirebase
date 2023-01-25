import { useState, useEffect, useRef } from "react";
import "./database.css";
import { app } from "../../firebase";
import Filterdata from "../Filter/Filterdata";

import { getDatabase, onValue, ref } from "firebase/database";
// import { async } from "@firebase/util";
const db = getDatabase(app);

const GetData = ({ arr }) => {
  const [objdata, setObjdata] = useState([]);
  const dataFetchedRef = useRef(false);
  console.log();
  const [details, setDetails] = useState({
    id: "EVT0001",
    location: "Bangalore",
    date: "5-Jan-23",
    time: "9:05:23",
    name: "Female01",
  });
  const [url, setUrl] = useState(`"please choose the event"`);
  const [gender, setGender] = useState("");

  const getData = () => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      const objarray = Object.values(data);
      objarray.forEach((obj) => {
        setObjdata((prev) => [...prev, obj]);
      });
    });

    // console.log(malecount)
  };

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    getData();
  }, []);
  // console.log(arr[0].url);
 
    const[data, setData]=useState(1)

    const getfilter=()=>{
        setData(data+1)
        console.log(data)
    }


  const getDetails = (id, location, date, time, name, gender) => {
    setDetails({
      id,
      location,
      date,
      time,
      name,
      gender,
    });
    // setHighlight(!highlight)
    arr.forEach((images) => {
      let detailname = name + ".jpg";

      // console.log(detailname);
      let imagename = images.name;
      if (imagename === detailname) {
        // console.log(imagename+" o ");
        // console.log(detailname);
        // console.log(details.gender)
        setUrl(images.url);
        setGender(gender);
        // return `<h1>${images.url}</h1>
        // <img src=${details.gender} className="image" alt="celebrity" />`
        console.log(gender + " inloop");
        // return `${},${}`
      }
    });
  };
  // console.log(arr)
  
  // console.log(details.gender);

  return (
    <>
      <div style={{ backgroundColor: "blue" }}>
        <h1 style={{ margin: "0" }}>SECQURAISE</h1>
      </div>
      <div className="container">
        <div style={{ width: "3rem", backgroundColor: "skyblue" }}>
          left panel
        </div>

        <div className="containerdetails">
          <h1 style={{ marginBottom: "0" }}>{details.id}</h1>
          <h2 style={{ marginTop: "0" }}>Person Detected</h2>
          <p style={{ marginBottom: "0", marginTop: "0" }}>
            Name : {details.name}
          </p>
          <p style={{ marginBottom: "0", marginTop: "0" }}>
            Location : {details.location}
          </p>
          <p style={{ marginBottom: "0", marginTop: "0" }}>
            Date : {details.date}
          </p>
          <p style={{ marginBottom: "0", marginTop: "0" }}>
            Time : {details.time}
          </p>
          <p style={{ marginBottom: "0" }}>Description:</p>
          <p style={{ marginBottom: "0", marginTop: "0" }}>
            {details.name} detected at {details.location} on {details.date}
          </p>
        </div>

        <div className="images">
          {}

          {/* {genimage()} */}
          <h1>{gender}</h1>
          <img src={url} className="image" alt="celebrity" />
        </div>

        <div className="event">
          <div className="containerfilter">
            <h1
              style={{
                marginTop: "10px",
                marginBottom: "0",
                textAlign: "center",
              }}
            >
              EVENTS
            </h1>
            <h2><Filterdata/></h2>
            {/* <h2>
              <FaFilter />
            </h2> */}
          </div>
          {objdata.map((obj) => {
            return (
              <>
                <div
                  className="eventdetails"
                  onClick={() =>
                    getDetails(
                      obj.ID,
                      obj.Location,
                      obj.Date,
                      obj.Time,
                      obj.Name,
                      obj.Gender
                    )
                  }
                  //  style={{ bgcolor: highlight ? 'lightgrey' : 'unset' }}
                >
                  <div
                    style={{
                      margin: "0 10px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>
                      {obj.ID}: {obj.Location}
                    </p>
                    <p>
                      {obj.Date} {obj.Time}
                    </p>
                  </div>
                  <p style={{ margin: "5px 10px" }}>Person detected</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default GetData;
