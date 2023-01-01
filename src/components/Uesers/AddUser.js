import React ,{useState} from "react";
import Card from '../UI/Card';
import Button from "../UI/Button";
 import classes from './AddUser.module.css';
 import ErrorModal from '../UI/ErrorModal.js';
const AddUser = (props) => {
   const [userName,SetUserName] =  useState('');
   const [userAge,SetUserAge] = useState('');
    const [Error,SetError] = useState();
   const AddNewUser = (event) => {
     event.preventDefault();
     if(userName.trim().length === 0 || userAge.trim().length === 0) {
      SetError({
        title:"Error",
        message:"you have to put value here"
      }) 
      return;
     }
     if (+userAge < 0) {
      SetError({
        title:"Error",
        message:"you have to put  age > 0 "
      }) 
        return;
     }
     props.onAddUser(userName,userAge);
     SetUserName('');
     SetUserAge('');
    }
  const ChangeUserNameHandler =(event) => {
   SetUserName(event.target.value);
  }
  const ChangeAgeHandler =(event) => {
    SetUserAge(event.target.value);
  }
  const ErrorCinform =() => {
    SetError(null);
  }
 return (
  <div>
 
   {Error && <ErrorModal  title={Error.title} message={Error.message} Cinform={ErrorCinform} /> }
  
    <Card className={classes.input}>     
   <form onSubmit={AddNewUser}>
     <label htmlFor="UserName"> User Name </label>
      <input id="UserName" type='text' value={userName} onChange={ChangeUserNameHandler} />
      <label htmlFor="Age"> Age </label>
      <input id="Age" type='text' value={userAge} onChange={ChangeAgeHandler} />
 
    <Button type="submit"> Add New User </Button>
   </form>
   </Card>
   </div>
 );

}













export default AddUser;