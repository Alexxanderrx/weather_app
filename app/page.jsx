"use client"
import { useEffect, useState } from 'react'
import styles from './page.module.css'

// async
export default function Home() {
  // const dataRecup = await getData("http://api.openweathermap.org/geo/1.0/direct?q=lima&limit=5&appid=b7b1b4492885348f44fdc6c0af7556ca");
  const [dataRecup, setDataRecup] = useState(null);
  const [dataWeather, setDataWeather] = useState(null);

  // ${dataRecup[0].lat}
  // ${dataRecup[0].lon}

  // const dataWeather = getData(`https://api.openweathermap.org/data/2.5/weather?lat${dataRecup[0].lat}=&lon=${dataRecup[0].lon}&appid=b7b1b4492885348f44fdc6c0af7556ca`);
  console.log(dataRecup);
  console.log(dataWeather);
  // let cityLat = dataRecup && dataRecup[0].lat;
  // let cityLon = dataRecup && dataRecup[0].lon;
  // console.log(cityLat);
  // console.log(cityLon);
  let ciudad = "";
  // let urlW = `https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLon}&appid=b7b1b4492885348f44fdc6c0af7556ca`
  // console.log(urlW);
  useEffect(() => {
    async function getData() {
      const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${ciudad == "" ? "lima" : ciudad}&limit=5&appid=b7b1b4492885348f44fdc6c0af7556ca`);
      const data = await response.json();
      setDataRecup(data);
      // console.log("hola");
      // console.log(data);
      const responseW = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=b7b1b4492885348f44fdc6c0af7556ca`);
      const dataW = await responseW.json();
      setDataWeather(dataW);
    }
    getData();

    // getWeather();
    // async function getWeather() {
    //   const responseW = await fetch(urlW);
    //   const dataW = await responseW.json();
    //   setDataWeather(dataW);
    // }
    // getWeather();

  }, []);
  // console.log(dataWeather);




  const [open, setOpen] = useState(true);
  const OpenUp = () => {
    setOpen(!open);
  }
  const CLASSNEW = open ? styles.compress : "";
  return (
    <main className={styles.main}>
      {/* , styles.compress */}
      <nav className={[styles.boxNav, CLASSNEW].join(' ')}>
        {/* style={{ border: "1px solid white" }} */}
        <div className="container p-4 d-flex justify-content-end" >
          <button type="button" className="btn-close" aria-label="Close" onClick={OpenUp}></button>
          {/* <button type="button" className="btn btn-secondary" onClick={""}>X</button> */}
        </div>
        <div className="container d-flex p-0 justify-content-center align-items-start" style={{
          border: "1px solid white",
          width: "86%",
          height: "60%"
        }}>
          <div className="container d-flex p-0 justify-content-center align-items-center" style={{
            border: "1px solid red",
            width: "100%",
            gap: "10px"
          }}>
            <i className="bi bi-search" style={{ position: "absolute", color: "black", left: "10%" }}></i>
            <input type="text" className="form-control" placeholder="search location" aria-label="First name" style={{ paddingLeft: "30px" }} />
            <button type="button" className="btn btn-primary">Search</button>
          </div>


        </div>
      </nav>
      <section className={styles.boxClimate}>
        {/* style={{ border: "1px solid white" }} */}
        <div className="container p-4 d-flex justify-content-between" >
          <button type="button" className="btn btn-secondary" onClick={OpenUp}>Search for places</button>
          <button type="button" className="btn btn-secondary rounded-circle">
            <i className="bi bi-geo-alt-fill"></i>
            {/* <img src="./weatherResources/next.svg" className='img-fluid' alt='next' style={{ width: "10px" }} /> */}
          </button>
        </div>
        <div className="container d-flex justify-content-center align-items-center" style={{
          border: "1px solid blue",
          overflow: "hidden",
        }}>
          <img src="./weatherResources/Shower.png" className={styles.imgWeaterBC} alt='Shower.png' />
          <img src="./weatherResources/Cloud-background.png" className={styles.bgCloudBC} alt='Cloud-background.png' />
        </div>
        <div className='container d-flex flex-column justify-content-center align-items-center' style={{
          border: "1px solid blue",
          height: "40%"
        }}>
          <h1>15<span>°C</span></h1>
          <h5>Shower</h5>
          <h6>Today - Fri, 5 Jun</h6>
          <h6><i className="bi bi-geo-alt-fill"></i>(lugar)</h6>
        </div>
      </section>
      <div className={styles.boxToday}>
        {/* <p>Country:{dataRecup[0].country}</p>
        <p>State:{dataRecup[0].state}</p>
        <p>lat:{dataRecup[0].lat}</p>
        <p>lon:{dataRecup[0].lon}</p> */}
        <div className='container d-flex justify-content-end align-items-end' style={{
          border: "1px solid green",
          width: "80%",
          padding: "0",
          gap: "15px"
        }}>
          <button type="button" className="btn btn-secondary rounded-circle">°C</button>
          <button type="button" className="btn btn-secondary rounded-circle">°F</button>
        </div>
        <div className='container p-0 d-flex justify-content-between align-items-center ' style={{
          border: "1px solid green",
          width: "80%",
        }}>

          <days className='container m-0 d-flex flex-column justify-content-center align-items-center' style={{
            border: "1px solid red",
            width: "18%",
          }}>
            <p>Tomorrow</p>
            <img src='' alt='' />
            <div>
              <p>16<span>°C</span></p>
              <p>11<span>°C</span></p>
            </div>
          </days>

          <days className='container m-0 d-flex flex-column justify-content-center align-items-center' style={{
            border: "1px solid red",
            width: "18%",
          }}>
            <p>Tomorrow</p>
            <img src='' alt='' />
            <div>
              <p>16<span>°C</span></p>
              <p>11<span>°C</span></p>
            </div>
          </days>

          <days className='container m-0 d-flex flex-column justify-content-center align-items-center' style={{
            border: "1px solid red",
            width: "18%",
          }}>
            <p>Tomorrow</p>
            <img src='' alt='' />
            <div>
              <p>16<span>°C</span></p>
              <p>11<span>°C</span></p>
            </div>
          </days>

          <days className='container m-0 d-flex flex-column justify-content-center align-items-center' style={{
            border: "1px solid red",
            width: "18%",
          }}>
            <p>Tomorrow</p>
            <img src='' alt='' />
            <div>
              <p>16<span>°C</span></p>
              <p>11<span>°C</span></p>
            </div>
          </days>

          <days className='container m-0 d-flex flex-column justify-content-center align-items-center' style={{
            border: "1px solid red",
            width: "18%",
          }}>
            <p>Tomorrow</p>
            <img src='' alt='' />
            <div>
              <p>16<span>°C</span></p>
              <p>11<span>°C</span></p>
            </div>
          </days>

        </div>
        <div className='container p-0 d-flex flex-column justify-content-center align-items-center' style={{
          border: "1px solid green",
          width: "80%",
        }}>
          <div className='container d-flex flex-column justify-content-center align-items-center' style={{
            border: "1px solid red",
            width: "100%",
          }}>
            <p>Today</p>
          </div>
          <div className='container p-0 d-flex flex-wrap ' style={{
            border: "1px solid purple",
            width: "100%",
            gap: "20%",
          }}>
            <div className='container d-flex flex-column justify-content-center align-items-center' style={{
              border: "1px solid yellow",
              width: "40%",
            }}>
              <p>Wind status</p>
              <p>7mph</p>
              <p><img></img>WSW</p>
            </div>
            <div className='container d-flex flex-column justify-content-center align-items-center' style={{
              border: "1px solid yellow",
              width: "40%",
            }}>
              <p>Wind status</p>
              <p>7mph</p>
              <p><img></img>WSW</p>
            </div>
            <div className='container d-flex flex-column justify-content-center align-items-center' style={{
              border: "1px solid yellow",
              width: "40%",
            }}>
              <p>Wind status</p>
              <p>7mph</p>
              <p><img></img>WSW</p>
            </div>
            <div className='container d-flex flex-column justify-content-center align-items-center' style={{
              border: "1px solid yellow",
              width: "40%",
            }}>
              <p>Wind status</p>
              <p>7mph</p>
              <p><img></img>WSW</p>
            </div>
          </div>

        </div>
        <div className='container d-flex justify-content-center align-items-center' style={{
          border: "1px solid green",
          width: "80%",
        }}>
          create by Alexxanderrx - devChallenges.io
        </div>
      </div>
    </main >
  )
}
