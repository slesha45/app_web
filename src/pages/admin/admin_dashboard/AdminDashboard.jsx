import React from 'react'

const AdminDashboard = () => {
    return (
        <>

            <div className='container mt-3'>
                <div className='d-flex justify-content-between' >
                    <h3>Admin Dashboard</h3>
                    <button className='btn btn-danger'>Add Product</button>
                </div>
                <table className='table'>
                    <thead className='table-dark'>
                        <tr>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <body>
                        <tr>
                            <td>
                                <img width={'10%'} src="https://th.bing.com/th?id=OIP.Vtxy0FjT_EfudI4cQk1kzAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
                            </td>
                            <td>Flower</td>
                            <td>200</td>
                            <td>Indoor</td>
                            <td>Beautiful</td>

                            <td>
                                <button className='btn btn-primary'>Edit</button>
                                <><button className='btn btn-danger ms-2'>Delete</button></>
                            </td>
                        </tr>
                    </body>
                </table>
            </div>

        </>
    )
}

export default AdminDashboard
