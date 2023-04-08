import UsersList from "../components/UsersList"

const Users = () => {
    const USERS = [
        {
        id: 'u1',
        name: 'Max',
        image: 'https://images.pexels.com/photos/7485787/pexels-photo-7485787.jpeg?auto=compress&cs=tinysrgb&w=1200',
        places: 3
        } 
    ]
    return <UsersList items={USERS}/>
}

export default Users