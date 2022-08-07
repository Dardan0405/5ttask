
import './style.css'
import Change from './Change'
import Change1 from './Change1'
import Change2 from './Change2'
import Change3 from './Change3'
import Change4 from './Change4'


function PopUp(props) {

  return (
    <div className='Start'>
    
        <div className='title'>
          
            <h3 className='Theme-Colore'>Theme Color<p className='Change-Theme'>Change Theme</p></h3>
        </div>
       
        <Change/>
        <Change1/>
        <Change2/>
        <Change3/>
        <Change4/> 
        
        
      
        <div className='close'>
         <button className='Cancel' onClick={props.closeModal}> Cancel</button>
         <button className='Save' onClick={props.closeModal}>Save</button>
          </div>
    </div>
   
   
  )
};

export default PopUp