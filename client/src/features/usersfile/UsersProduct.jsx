import axios from "axios"
import { useState, useEffect } from "react";

function UsersProduct() {
    const [data, setData] = useState([])
    // const API = import.meta.env.LOCAL_API
    async function fetchData() {
        try {
            const res = await axios.get('http://localhost:5000/api/products')
            console.log(res.data)
            setData(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <h1>Data Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        {/* Add more table headers if needed */}
                    </tr>
                </thead>
                <tbody>
                    {/* {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                        </tr>
                    ))} */}
                </tbody>
            </table>
        </div>
    )
}

export default UsersProduct