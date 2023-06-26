import styles from './page.module.css'
export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.boxClimate}>
        <div className="container p-3 d-flex justify-content-between" style={{ border: "1px solid white" }}>
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
        <h1>15</h1><span>°C</span>
        <h5>Shower</h5>
        <h6>Today - Fri, 5 Jun</h6>
        <i className="bi bi-geo-alt-fill"></i><h6>(lugar)</h6>
      </section>
      <div className={styles.boxToday}>
        today
      </div>
    </main>
  )
}
