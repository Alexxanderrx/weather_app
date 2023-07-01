import React from "react";
import styles from '../components/DayClima.module.css'
export default function DayClima(params) {
    return (
        <days className='container m-0 d-flex flex-column justify-content-around align-items-center' style={{
            border: "1px solid red",

            // width: "18%",
        }}>
            <div className={styles.day}>{params.dayS} {params.thatDay} {params.month}</div>
            <img src={params.wheaterIMG} className={styles.imgWeaterT} alt='Weather.png' />
            <div className='d-flex gap-2 ' style={{ fontSize: "13px" }}>
                <div className='d-flex'>
                    <div>{params.tempMAX}</div>
                    <div>°{params.simbol}</div>
                </div>
                <div className='d-flex' style={{ color: "rgb(160, 159, 177)" }}>
                    <div>{params.tempMIN}</div>
                    <div>°{params.simbol}</div>
                </div>
            </div>
        </days>
    )
}