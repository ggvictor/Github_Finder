import {useNavigate} from 'react-router-dom'

import classes from './BackBtn.module.css'
const BackBtn = () => {
    const nav = useNavigate();
  return (
    <>
        <button className = {classes.back_btn} onClick={() => nav(-1)}>Voltar</button>
    </>
  )
}

export default BackBtn