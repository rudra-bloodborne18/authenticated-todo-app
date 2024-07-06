import React, { useEffect, useState } from 'react';
import ListHeader from './components/ListHeader';
import ListItem from './components/ListItem';
import Auth from './components/Auth';
import { useCookies } from 'react-cookie';

const App = () => {
    const [cookies,setCookie,removeCookie] = useCookies(null)
    const [tasks, setTasks] = useState([]);
    const userEmail = cookies.Email;
    const authToken = cookies.AuthToken

    const getData = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${userEmail}`);
            const json = await response.json();
            setTasks(json);
            // console.log('Fetched Tasks:', json);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if(authToken){
            getData()
        }}, [authToken]);

    const sortedTasks = tasks.sort((a, b) => new Date(a.date) - new Date(b.date));

    return (
        <div className="app">
          {!authToken && <Auth/>}
          {authToken &&
            <>
            <ListHeader listName={'🏝️ Holiday tick list'} getData={getData} />
            <p className='user-email'>Welcome back {userEmail}</p>
            {sortedTasks.map((task) => (
            <ListItem key={task.id} task={task} getData={getData} />))}
            </>}
            <p className='copyright'>Creative coding LLC</p>
        </div>
    );
};

export default App;
