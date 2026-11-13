import axios from 'axios'
import {useEffect,useState} from 'axios'

export default function Users() {
    const [users,setUsers] =useState([]);
 useEffect(()=> {axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res=> setUsers(res.data)))}  , []);
        return (
        <>
        <table className="table table-stripped w-100 ">
            <thead>
                    <th>ID</th>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                    <th>adress</th>
                    <th>Website</th>
            </thead>
            <tbody>
                {users.map((elt , i) => <tr><td>{elt.id}</td><td>{elt.name}</td>
                <td>{elt.username}</td><td>{elt.email}</td><td>{elt.address.street} --- {elt.address.suite}</td><td>{elt.website}</td></tr>)}

            </tbody>
        </table>
        </>
    )
}
