"use client"
import { useEffect, useState } from 'react'
import styles from './page.module.css'

// async
export default function Home() {
  const [dataRecup, setDataRecup] = useState(null);
  const [dataWeather, setDataWeather] = useState(null);

  let ciudad = "";
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
  }, []);
  console.log(dataRecup);
  console.log(dataWeather);
  console.log((dataWeather && dataWeather.main.temp) - 273.15);
  // console.log(typeof (dataWeather && dataWeather.main.temp));


  const [open, setOpen] = useState(true);
  const OpenUp = () => {
    setOpen(!open);
  }

  const [kelvin, setKelvin] = useState(false);
  const ConverToC = () => {
    setKelvin(false);
  }
  const ConverToF = () => {
    setKelvin(true);
  }
  const CLASSNEW = open ? styles.compress : "";
  const VALUEM = kelvin ? 1.8 : 1;
  const VALUES = kelvin ? 32 : 0;
  let simbol = kelvin ? "F" : "C"
  // console.log(NEWVALUE);

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
      {/* -------------------------------------------------------boxClimate----------------------------------------------------------- */}

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
          height: "35vh",
          // overflow: "hidden",
        }}>
          <img src={`./weatherResources/${(dataWeather && dataWeather.weather[0].main)}.png`} className={styles.imgWeaterBC} alt='Weather.png' />
          <img src="./weatherResources/Cloud-background.png" className={styles.bgCloudBC} alt='Cloud-background.png' />
        </div>
        <div className='container d-flex flex-column justify-content-around align-items-center' style={{
          border: "1px solid blue",
          height: "51%"
        }}>
          <div className={styles.grados}>
            <h1>{(((dataWeather && dataWeather.main.temp) - 273.15) * (VALUEM) + (VALUES)).toFixed(0)}</h1><span> °{simbol}</span>
            {console.log(dataWeather && dataWeather.main.temp)}
          </div>
          <h5>{(dataWeather && dataWeather.weather[0].main)}</h5>
          <h6>Today - Fri, 5 Jun</h6>
          <h6><i className="bi bi-geo-alt-fill"></i> {(dataWeather && dataWeather.name)}</h6>
        </div>
      </section>
      {/* -------------------------------------------------------boxToday----------------------------------------------------------- */}
      <div className={styles.boxToday}>
        <div className='container d-flex justify-content-end align-items-end' style={{
          border: "1px solid green",
          width: "80%",
          padding: "0",
          gap: "15px"
        }}>
          <button type="button" className="btn btn-secondary rounded-circle" onClick={ConverToC}>°C</button>
          <button type="button" className="btn btn-secondary rounded-circle" onClick={ConverToF}>°F</button>
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
          <div className='container d-flex flex-column justify-content-center align-items-start' style={{
            border: "1px solid red",
            width: "100%",
          }}>
            <p className='fw-semibold' style={{ fontSize: "18px" }}>Today's Hightlights</p>
          </div>
          <div className={styles.todayHigh}>
            {/* ---------------------------------------------Wind status--------------------------------------------------------- */}
            <div className=' d-flex flex-column justify-content-center align-items-center' style={{
              border: "1px solid yellow",
              padding: "10px",
              fontFamily: "'Raleway', sans-serif",
              backgroundColor: "rgb(30, 33, 58)"
            }}>
              <div style={{ fontSize: "12px" }}>Wind status</div>
              <div className='container d-flex justify-content-center align-items-center gap-2'>
                <div className={styles.num}>{dataWeather && dataWeather.wind.speed}</div><div>mph</div>
              </div>
              <div className='container d-flex justify-content-center align-items-center gap-2 '>
                <div style={{ transform: `rotate(${dataWeather && dataWeather.wind.deg}deg)`, height: "25px", width: "25px" }} className="badge rounded-circle text-bg-secondary d-flex justify-content-center align-items-center" ><i className="bi bi-forward-fill"></i></div>
                <div style={{ fontSize: "13px" }}>WSW</div>
              </div>

            </div>
            {/* ----------------------------------------------Humidity------------------------------------------------------------- */}
            <div className=' d-flex flex-column justify-content-center align-items-center' style={{
              border: "1px solid yellow",
              padding: "10px",
              backgroundColor: "rgb(30, 33, 58)"
            }}>
              <div style={{ fontSize: "12px" }}>Humidity</div>
              <div className='container d-flex justify-content-center align-items-center gap-2'>
                <div className={styles.num}>{dataWeather && dataWeather.main.humidity}</div><div>%</div>
              </div>
              <div className='container d-flex flex-column' style={{ width: "85%" }}>
                <div className='d-flex justify-content-between'>
                  <div style={{ fontSize: "10px" }}>0</div>
                  <div style={{ fontSize: "10px" }}>50</div>
                  <div style={{ fontSize: "10px" }}>100</div>
                </div>
                <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%", height: "5px" }}>
                  <div className="progress-bar bg-warning" style={{ width: `${dataWeather && dataWeather.main.humidity}%` }}></div>
                </div>
                <div className='d-flex justify-content-end' style={{ fontSize: "10px" }}>%</div>
              </div>

            </div>
            {/* ----------------------------------------------Visibility------------------------------------------------------------ */}
            <div className=' d-flex flex-column justify-content-center align-items-center' style={{
              border: "1px solid yellow",
              padding: "10px",
              backgroundColor: "rgb(30, 33, 58)"
            }}>
              <div>Visibility</div>
              <div className='container d-flex justify-content-center align-items-center gap-2'>
                <div className={styles.num}>{((dataWeather && dataWeather.visibility) / 1000).toFixed(1)}</div><div>milles</div>
              </div>

            </div>
            {/* ------------------------------------------Air Pressure------------------------------------------------------------- */}
            <div className=' d-flex flex-column justify-content-center align-items-center' style={{
              border: "1px solid yellow",
              padding: "10px",
              backgroundColor: "rgb(30, 33, 58)"
            }}>
              <div>Air Pressure</div>
              <div className='container d-flex justify-content-center align-items-center gap-2'>
                <div className={styles.num}>{dataWeather && dataWeather.main.pressure}</div><div>mb</div>
              </div>

            </div>
          </div>

        </div>
        <div className='container d-flex justify-content-center align-items-center' style={{
          border: "1px solid green",
          width: "80%",
        }}>
          <p>create by Alexxanderrx - devChallenges.io</p>
        </div>
      </div>
    </main >
  )
}
