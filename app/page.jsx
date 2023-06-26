import styles from './page.module.css'
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.boxClimate}>
        <div className="container d-flex justify-content-between" style={{ border: "1px solid white" }}>
          <button type="button" className="btn btn-secondary">Search for places</button>
          <button type="button" className="btn btn-secondary">
            <i className="bi bi-geo-alt-fill"></i>
            {/* <img src="./weatherResources/next.svg" className='img-fluid' alt='next' style={{ width: "10px" }} /> */}
          </button>
        </div>
        <div className="container d-flex justify-content-center align-items-center" style={{
          border: "1px solid blue",
        }}>
          <img src="./weatherResources/Shower.png" className='img-fluid' alt='Shower.png' style={{
            position: "absolute",

          }} />
          <img src="./weatherResources/Cloud-background.png" className='img-fluid' alt='Cloud-background.png' style={{
            opacity: "0.1"
          }} />
        </div>
      </div>
      <div className={styles.boxToday}>
        today
      </div>
    </main>
  )
}
