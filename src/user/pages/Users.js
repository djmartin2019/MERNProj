import React from 'react';

import UsersList from '../components/UsersList';

//List of users

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'David Martin',
            image: 'www.google.com/imgres?imgurl=https%3A%2F%2Fwompampsupport.azureedge.net%2Ffetchimage%3FsiteId%3D7575%26v%3D2%26jpgQuality%3D100%26width%3D700%26url%3Dhttps%253A%252F%252Fi.kym-cdn.com%252Fentries%252Ficons%252Ffacebook%252F000%252F013%252F564%252Fdoge.jpg&imgrefurl=https%3A%2F%2Fknowyourmeme.com%2Fmemes%2Fdoge&tbnid=P8AvGsIcs7xgeM&vet=12ahUKEwjK4ryA07HsAhWQBFMKHTsKCL4QMygAegUIARDYAQ..i&docid=cbfcBh86HZuuEM&w=700&h=394&q=doge&ved=2ahUKEwjK4ryA07HsAhWQBFMKHTsKCL4QMygAegUIARDYAQ',
            places: 3
        }
    ]; //In all caps because it's a 'dummy' array
    return <UsersList items={USERS}/>
};

export default Users;