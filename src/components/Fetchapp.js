import { useSelector,useDispatch } from 'react-redux'
import { getUser } from '../Features/fetchit'

function Fetchapp() {

    const fetchState = useSelector((state) => state.fetchit.value)
    const dispatch = useDispatch()


  return (
    <div>
        <p>Fetchapp</p>
        <button onClick={()=>dispatch(getUser())}>fetch posts</button>
        <>
            {fetchState.map((users,i)=><h4 key={i}>{users.name}</h4>)}
        </>
    </div>
  )
}

export default Fetchapp