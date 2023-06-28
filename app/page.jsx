"use client"
import styles from './page.module.css'

// async function getData(url) {
//   const response = await fetch(url);
//   const data = await response.json();

//   return data;
// }

export default async function Home() {
  // const dataRecup = await getData("http://api.openweathermap.org/geo/1.0/direct?q=lima&limit=5&appid=b7b1b4492885348f44fdc6c0af7556ca");
  // const dataWeather = await getData(`https://api.openweathermap.org/data/2.5/weather?lat=${dataRecup[0].lat}&lon=${dataRecup[0].lon}&appid=b7b1b4492885348f44fdc6c0af7556ca`);
  // console.log(dataRecup);
  // console.log(dataWeather);


  return (
    <main className={styles.main}>
      <section className={styles.boxClimate}>
        {/* style={{ border: "1px solid white" }} */}
        <div className="container p-4 d-flex justify-content-between" >
          <button type="button" className="btn btn-secondary">Search for places</button>
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
        <div className='container d-flex flex-column justify-content-center align-items-center'>
          <h1>15</h1><span>°C</span>
          <h5>Shower</h5>
          <h6>Today - Fri, 5 Jun</h6>
          <i className="bi bi-geo-alt-fill"></i><h6>(lugar)</h6>
        </div>
      </section>
      <div className={styles.boxToday}>
        {/* <p>Country:{dataRecup[0].country}</p>
        <p>State:{dataRecup[0].state}</p>
        <p>lat:{dataRecup[0].lat}</p>
        <p>lon:{dataRecup[0].lon}</p> */}
      </div>
    </main>
  )
}
