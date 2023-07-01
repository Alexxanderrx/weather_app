"use client"
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import DayClima from '@/components/DayClima';

// async
export default function Home() {
  const [dataRecup, setDataRecup] = useState([]);
  const [dataWeather, setDataWeather] = useState(null);
  const [dataFore, setDataFore] = useState(null);

  const [inputLoc, setInputLoc] = useState("");
  const inputLocCambio = event => {
    setInputLoc(event.target.value)
  }
  useEffect(() => {
    async function getData() {
      const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inputLoc == "" ? "helsinki" : inputLoc}&limit=5&appid=b7b1b4492885348f44fdc6c0af7556ca`);
      const data = await response.json();
      setDataRecup(data);
      const responseW = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=b7b1b4492885348f44fdc6c0af7556ca`);
      const dataW = await responseW.json();
      setDataWeather(dataW);
      const responseF = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&appid=b7b1b4492885348f44fdc6c0af7556ca`);
      const dataF = await responseF.json();
      setDataFore(dataF);
    }
    getData();
  }, [inputLoc]);
  console.log(dataRecup);

  let damian = []
  for (let i = 0; i < dataRecup.length; i++) {
    let jarol = (dataRecup[i].name.toLowerCase() + ", " + dataRecup[i].country);
    damian.push(jarol)
    console.log(damian)
  };
  // console.log(consoA);
  console.log(inputLoc);
  // console.log(typeof (inputLoc));

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
  let simbol = kelvin ? "F" : "C";
  // console.log(NEWVALUE);

  const DAYS = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
  const MONTHS = ["Mes_default_porque_lee_de_1a12", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const fecha = new Date();
  const today = fecha.getDate();
  const todaySem = fecha.getDay();
  const monthAct = fecha.getMonth() + 1;

  const fechaD = new Date();
  fechaD.setDate(fechaD.getDate() + 2);
  const diaD = fechaD.getDate();
  const mesD = fechaD.getMonth() + 1;

  const fechaT = new Date();
  fechaT.setDate(fechaT.getDate() + 3);
  const diaT = fechaT.getDate();
  const mesT = fechaT.getMonth() + 1;

  const fechaCu = new Date();
  fechaCu.setDate(fechaCu.getDate() + 4);
  const diaCu = fechaCu.getDate();
  const mesCu = fechaCu.getMonth() + 1;

  const fechaCi = new Date();
  fechaCi.setDate(fechaCi.getDate() + 5);
  const diaCi = fechaCi.getDate();
  const mesCi = fechaCi.getMonth() + 1;


  return (
    <main className={styles.main}>
      {/* --------------------------------NavBar-------------------------------------------- */}
      {/* , styles.compress */}
      <nav className={[styles.boxNav, CLASSNEW].join(' ')}>
        {/* style={{ border: "1px solid white" }} */}
        <div className="container p-4 d-flex justify-content-end" >
          <button type="button" className="btn-close" aria-label="Close" onClick={OpenUp}></button>
          {/* <button type="button" className="btn btn-secondary" onClick={""}>X</button> */}
        </div>
        <div className="container d-flex flex-column  p-0 justify-content-start align-items-center" style={{
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
            <input type="text" className="form-control" placeholder="search location" aria-label="First name" style={{ paddingLeft: "30px" }} value={inputLoc} onChange={inputLocCambio} />
            {/* onChange={buscar} */}
            <button type="button" className="btn btn-primary" onClick={OpenUp}>Search</button>
          </div>
          <div className="container d-flex flex-column p-0 justify-content-center align-items-center">
            {
              (damian.map((mostrar, a) => {
                function muestraPe() {
                  setInputLoc(mostrar)
                }
                return <button key={a} className="d-flex p-2 m-1  w-100" style={{ backgroundColor: "transparent", color: "white", border: "1px solid rgb(89, 91, 109)" }} onClick={muestraPe}> {mostrar} </button>
              }))
            }
          </div>
        </div>
      </nav>

      {/* --------------------------------boxClimate-------------------------------------------- */}
      <section className={styles.boxClimate}>
        <div className="container p-4 d-flex justify-content-between" >
          <button type="button" className="btn btn-secondary" onClick={OpenUp}>Search for places</button>
          <button type="button" className="btn btn-secondary rounded-circle">
            <i className="bi bi-geo-alt-fill"></i>
          </button>
        </div>
        <div className="container d-flex justify-content-center align-items-center" style={{
          // border: "1px solid blue",
          height: "35vh",
        }}>
          <img src={`./weatherResources/${(dataWeather && dataWeather.weather[0].main)}.png`} className={styles.imgWeaterBC} alt='Weather.png' />
          <img src="./weatherResources/Cloud-background.png" className={styles.bgCloudBC} alt='Cloud-background.png' />
        </div>
        <div className='container d-flex flex-column justify-content-around align-items-center' style={{
          // border: "1px solid blue",
          height: "51%"
        }}>
          <div className={styles.grados}>
            <h1>{(((dataWeather && dataWeather.main.temp) - 273.15) * (VALUEM) + (VALUES)).toFixed(0)}</h1><span> °{simbol}</span>
          </div>
          <h5>{(dataWeather && dataWeather.weather[0].main)}</h5>
          <h6>Today . {DAYS[todaySem]}, {today} {MONTHS[monthAct]}</h6>
          <h6><i className="bi bi-geo-alt-fill"></i> {(dataWeather && dataWeather.name)}</h6>
        </div>
      </section>
      {/* ----------------------------boxToday--------------------------------------------------- */}
      <div className={styles.boxToday}>
        {/* ------------------------------BUTTONS---------------------------------------------- */}
        <div className='container d-flex justify-content-end align-items-end' style={{
          // border: "1px solid green",
          width: "80%",
          padding: "0",
          gap: "15px"
        }}>
          <button type="button" className="btn btn-secondary rounded-circle" onClick={ConverToC}>°C</button>
          <button type="button" className="btn btn-secondary rounded-circle" onClick={ConverToF}>°F</button>
        </div>
        {/* ------------------------------Days---------------------------------------------- */}
        <div className={styles.daysBox} style={{
          // border: "1px solid green",
        }}>

          <DayClima
            dayS={"Tomorrow"}
            wheaterIMG={`./weatherResources/${(dataFore && dataFore.list[6].weather[0].main)}.png`}
            tempMAX={(((dataFore && dataFore.list[6].main.temp_max) - 273.15) * (VALUEM) + (VALUES)).toFixed(0)}
            tempMIN={(((dataFore && dataFore.list[3].main.temp_min) - 273.15) * (VALUEM) + (VALUES)).toFixed(0)}
            simbol={simbol}
          />

          <DayClima
            dayS={DAYS[(todaySem + 2) > 6 ? (todaySem + 2) - 7 : (todaySem + 2)] + ","}
            thatDay={diaD}
            month={MONTHS[mesD]}
            wheaterIMG={`./weatherResources/${(dataFore && dataFore.list[14].weather[0].main)}.png`}
            tempMAX={(((dataFore && dataFore.list[14].main.temp_max) - 273.15) * (VALUEM) + (VALUES)).toFixed(0)}
            tempMIN={(((dataFore && dataFore.list[11].main.temp_min) - 273.15) * (VALUEM) + (VALUES)).toFixed(0)}
            simbol={simbol}
          />

          <DayClima
            dayS={DAYS[(todaySem + 3) > 6 ? (todaySem + 3) - 7 : (todaySem + 3)] + ","}
            thatDay={diaT}
            month={MONTHS[mesT]}
            wheaterIMG={`./weatherResources/${(dataFore && dataFore.list[22].weather[0].main)}.png`}
            tempMAX={(((dataFore && dataFore.list[22].main.temp_max) - 273.15) * (VALUEM) + (VALUES)).toFixed(0)}
            tempMIN={(((dataFore && dataFore.list[19].main.temp_min) - 273.15) * (VALUEM) + (VALUES)).toFixed(0)}
            simbol={simbol}
          />
          <DayClima
            dayS={DAYS[(todaySem + 4) > 6 ? (todaySem + 4) - 7 : (todaySem + 4)] + ","}
            thatDay={diaCu}
            month={MONTHS[mesCu]}
            wheaterIMG={`./weatherResources/${(dataFore && dataFore.list[30].weather[0].main)}.png`}
            tempMAX={(((dataFore && dataFore.list[30].main.temp_max) - 273.15) * (VALUEM) + (VALUES)).toFixed(0)}
            tempMIN={(((dataFore && dataFore.list[27].main.temp_min) - 273.15) * (VALUEM) + (VALUES)).toFixed(0)}
            simbol={simbol}
          />

          <DayClima
            dayS={DAYS[(todaySem + 5) > 6 ? (todaySem + 5) - 7 : (todaySem + 5)] + ","}
            thatDay={diaCi}
            month={MONTHS[mesCi]}
            wheaterIMG={`./weatherResources/${(dataFore && dataFore.list[38].weather[0].main)}.png`}
            tempMAX={(((dataFore && dataFore.list[38].main.temp_max) - 273.15) * (VALUEM) + (VALUES)).toFixed(0)}
            tempMIN={(((dataFore && dataFore.list[35].main.temp_min) - 273.15) * (VALUEM) + (VALUES)).toFixed(0)}
            simbol={simbol}
          />
        </div>
        {/* ------------------------------Today's Hightlights---------------------------------------- */}
        <div className='container p-0 d-flex flex-column justify-content-center align-items-center' style={{
          // border: "1px solid green",
          width: "80%",
        }}>
          <div className='container d-flex flex-column justify-content-center align-items-start' style={{
            // border: "1px solid red",
            width: "100%",
          }}>

            <p className='fw-semibold' style={{ fontSize: "18px" }}>Today's Hightlights</p>
          </div>
          <div className={styles.todayHigh}>
            {/* ------------------------------Wind status--------------------------------------- */}
            <div className=' d-flex flex-column justify-content-center align-items-center'>
              <div style={{ fontSize: "12px" }}>Wind status</div>
              <div className='container d-flex justify-content-center align-items-center gap-2'>
                <div className={styles.num}>{((dataWeather && dataWeather.wind.speed) * 2.237).toFixed(1)}</div><div>mph</div>
              </div>
              <div className='container d-flex justify-content-center align-items-center gap-2 '>
                <div style={{ transform: `rotate(${(dataWeather && dataWeather.wind.deg) - 90}deg)`, height: "25px", width: "25px" }} className="badge rounded-circle text-bg-secondary d-flex justify-content-center align-items-center" ><i className="bi bi-forward-fill"></i></div>
                <div style={{ fontSize: "13px" }}>WSW</div>
              </div>

            </div>
            {/* ------------------------------Humidity--------------------------------------------------- */}
            <div className=' d-flex flex-column justify-content-center align-items-center'>
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
            {/* ----------------------Visibility------------------------------------ */}
            <div className=' d-flex flex-column justify-content-center align-items-center'>
              <div>Visibility</div>
              <div className='container d-flex justify-content-center align-items-center gap-2'>
                <div className={styles.num}>{((dataWeather && dataWeather.visibility) / 1000).toFixed(1)}</div><div>milles</div>
              </div>

            </div>
            {/* -----------------------------Air Pressure------------------------------------- */}
            <div className=' d-flex flex-column justify-content-center align-items-center'>
              <div>Air Pressure</div>
              <div className='container d-flex justify-content-center align-items-center gap-2'>
                <div className={styles.num}>{dataWeather && dataWeather.main.pressure}</div><div>mb</div>
              </div>

            </div>
          </div>

        </div>
        <div className='container d-flex m-0 p-0 justify-content-center align-items-center' style={{
          // border: "1px solid green",
          width: "80%",
        }}>
          <div className={styles.credits}>create by Alexxanderrx - devChallenges.io</div>
        </div>
      </div>
    </main >
  )
}
