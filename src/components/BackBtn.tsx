import {useNavigate} from 'react-router-dom'

const BackBtn = () => {
    const nav = useNavigate();
  return (
    <>
        <button onClick={() => nav(-1)}>Voltar</button>
    </>
  )
}

export default BackBtn