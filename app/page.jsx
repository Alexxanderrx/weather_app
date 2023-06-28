"use client"
import { useState } from 'react'
import styles from './page.module.css'

// async function getData(url) {
//   const response = await fetch(url);
//   const data = await response.json();

//   return data;
// }

// async
export default function Home() {
  // const dataRecup = await getData("http://api.openweathermap.org/geo/1.0/direct?q=lima&limit=5&appid=b7b1b4492885348f44fdc6c0af7556ca");
  // const dataWeather = await getData(`https://api.openweathermap.org/data/2.5/weather?lat=${dataRecup[0].lat}&lon=${dataRecup[0].lon}&appid=b7b1b4492885348f44fdc6c0af7556ca`);
  // console.log(dataRecup);
  // console.log(dataWeather);

  // async function getData(url) {
  //   const response = await fetch(url);
  //   const data = await response.json();

  //   return data;
  // }

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
          <button type="button" className="btn btn-secondary">
            <i className="bi bi-geo-alt-fill"></i>
            {/* <img src="./weatherResources/next.svg" className='img-fluid' alt='next' style={{ width: "10px" }} /> */}
          </button>
        </div>
        <div className="container d-flex justify-content-center align-items-center" style={{
          border: "1px solid blue",
          overflow: "hidden",
        }}>
          <img src="./weatherResources/Shower.png" className='img-fluid' alt='Shower.png' style={{
            position: "absolute",
            width: "150px"
          }} />
          <img src="./weatherResources/Cloud-background.png" alt='Cloud-background.png' style={{
            width: "530px",
            opacity: "0.1",
            // overflow: "hidden",
          }} />
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
          <button type="button" className="btn btn-secondary">°C</button>
          <button type="button" className="btn btn-secondary">°F</button>
        </div>
        <div className='container d-flex justify-content-center align-items-center' style={{
          border: "1px solid green",
          width: "80%",
        }}>
          <div className='container d-flex flex-column justify-content-center align-items-center' style={{
            border: "1px solid red",
            width: "18%",
          }}>
            <p>Tomorrow</p>
            <img src='' alt='' />
            <div>
              <p>16<span>°C</span></p>
              <p>11<span>°C</span></p>
            </div>
          </div>
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
