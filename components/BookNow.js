import React from 'react';
import style from './booknow.module.css'
import Chair from './Chair';
import Screen from './Screen';
import BookedChair from './BookedChair'

const Chair_ = (args) => {
    return (
        <td key={args.id_}>
            <Chair />
        </td>
    );
};


const Nochair_ = (args) => {
    return (
        <td key={args.id_}>
            <BookedChair />
        </td>
    );
};

const row1 = ['A1','B1','C1','D1','E1','F1','G1','_','_','_','H1','I1','J1']
const row2 = ['A2','B2','C2','D2','E2','F2','G2','_','_','_','H2','I2','J2']
const row3 = ['A3','B3','C3','D3','E3','F3','G3','_','_','_','H3','I3','J3']
const row4 = ['A4','B4','C4','D4','E4','F4','G4','_','_','_','H4','I4','J4']
const row5 = ['A5','B5','C5','D5','E5','F5','G5','_','_','_','H5','I5','J5']
const row6 = ['A6','B6','C6','D6','E6','F6','G6','_','_','_','H6','I6','J6']
const row7 = ['A7','B7','C7','D7','E7','F7','G7','_','_','_','H7','I7','J7']
const row8 = ['A8','B8','C8','D8','E8','F8','G8','_','_','_','H8','I8','J8']



function BookNow(props){
    console.log(props.items[0])
    return (
        <div className={style.main}>
            <div>
                <div className={style.navHeader}>
                    <div className={style.navMovieName}>
                        <span >{props.movieTitle}</span>
                    </div>
                    <div className={style.navMovieDetails}>
                        <span >{props.details}</span>
                    </div>
                </div>
                <div className={style.wakeBox}>
                    <Chair />
                    <div className={style.Available}>
                        
                        <p>Available</p>
                    </div>
                    <BookedChair />
                    <div className={style.Booked}>
                        <p>Booked</p>
                    </div>
                </div>
                <p> Each seat tooks 0.0023 SOL</p>
                <div className={style.seatBox}>

                <table className={style.seatTable}>
                    <thead>
                    <tr>
                        <th className={style.forMargin}></th><th>A</th><th>B</th><th>C</th>
                        <th>D</th><th>E</th><th>F</th><th>G</th>
                        <th></th><th></th><th></th>

                        <th>H</th><th>I</th>
                        <th>J</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr key='1'>
                            <th>1</th>
                            {
                                row1.map(key =>{
                                    if (key == '_'){
                                        return <th></th>
                                    }
                                    if (props.items[key] == 1){
                                        return <Nochair_ id_={key} />
                                    }else{
                                        return <Chair_ id_={key} />
                                    }
                                })
                            }
                        </tr>
                        <tr key='2'>
                        <th>2</th>
                            {
                                row2.map(key =>{
                                    if (key == '_'){
                                        return <th></th>
                                    }
                                    if (props.items[key] == 1){
                                        return <Nochair_ id_={key} />
                                    }else{
                                        return <Chair_ id_={key} />
                                    }
                                })
                            } 
                        </tr>

                        <tr key='3'>
                        <th>3</th>
                            {
                                row3.map(key =>{
                                    if (key == '_'){
                                        return <th></th>
                                    }
                                    if (props.items[key] == 1){
                                        return <Nochair_ id_={key} />
                                    }else{
                                        return <Chair_ id_={key} />
                                    }
                                })
                            }
                        </tr>
                        <tr key='4'>
                        <th>4</th>
                        {
                                row4.map(key =>{
                                    if (key == '_'){
                                        return <th></th>
                                    }
                                    if (props.items[key] == 1){
                                        return <Nochair_ id_={key} />
                                    }else{
                                        return <Chair_ id_={key} />
                                    }
                                })
                            }
                        </tr>

                        <tr key='5'>
                        <th>5</th>
                        {
                                row5.map(key =>{
                                    if (key == '_'){
                                        return <th></th>
                                    }
                                    if (props.items[key] == 1){
                                        return <Nochair_ id_={key} />
                                    }else{
                                        return <Chair_ id_={key} />
                                    }
                                })
                            }
                        </tr>

                        <tr key='6'>
                            <th> 6 </th>
                            {
                                row6.map(key =>{
                                    if (key == '_'){
                                        return <th></th>
                                    }
                                    if (props.items[key] == 1){
                                        return <Nochair_ id_={key} />
                                    }else{
                                        return <Chair_ id_={key} />
                                    }
                                })
                            }
                        </tr>

                        <tr>
                            <th>_</th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th>
                        </tr>

                        <tr >
                            <th>_</th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th>
                        </tr>

                        <tr key='7'>
                        <th>7</th>
                        {
                                row7.map(key =>{
                                    if (key == '_'){
                                        return <th></th>
                                    }
                                    if (props.items[key] == 1){
                                        return <Nochair_ id_={key} />
                                    }else{
                                        return <Chair_ id_={key} />
                                    }
                                })
                            }
                        </tr>


                        <tr key='8'>
                        <th>8</th>
                        {
                                row8.map(key =>{
                                    if (key == '_'){
                                        return <th></th>
                                    }
                                    if (props.items[key] == 1){
                                        return <Nochair_ id_={key} />
                                    }else{
                                        return <Chair_ id_={key} />
                                    }
                                })
                            }
                        </tr>
                    </tbody>
                    </table>
                </div>
                <Screen />
            </div>   
        </div>  
    );
};

export default BookNow;