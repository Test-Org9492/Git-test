import NavigationBar from "./home"
import person from './person.png'
import { useNavigate } from "react-router-dom"
export default function Four(){
    const nav=useNavigate()
    return(<div>
            <NavigationBar logout={"image"}/>
            <div className="parent">
                <img src={person} className="person-image"/><b style={{fontSize:'500'}}> {localStorage.getItem('user')}</b>
                
                <div style={{display:'flex',flexDirection:'column',position:'absolute',marginTop:'500px',marginLeft:'600px'}}>
                <b style={{fontSize:'30px',marginLeft:'100px'}}> CAF</b>
                <br></br>
                <button style={{borderRadius:'5px',color:'white',width:'250px',height:'100px',fontSize:'30px'}} className="four-btn" onClick={()=>nav('/five')}>Azure Questionnaire</button>
                </div>
            </div>
        </div>)
}