import React, { useState } from 'react'
import { createProductApi } from '../../../apis/Api'
import { toast } from 'react-toastify'

const AdminDashboard = () => {

    //use state
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [productDescription, setProductDescription] = useState('')

    //state for image
    const [productImage, setProductImage] = useState('')
    const [previewImage, setPreviewImage] = useState('')

    //image upload handler
    const handleImage = (event) => {
        const file = event.target.files[0]
        setProductImage(file)//for backend
        setPreviewImage(URL.createObjectURL(file))
    }

    //handle submit
    const handleSubmit = (e) => {
        e.preventDefault()
        
        //make a form data(text, files)
        const formData = new FormData()
        formData.append('productName', productName)
        formData.append('productPrice', productPrice)
        formData.append('productCategory', productCategory)
        formData.append('productDescription', productDescription)
        formData.append('productImage', productImage)

        //make an API call
        createProductApi(formData).then((res) => {
            if (res.data.success === false) {
                toast.error(res.data.message)                
            } else{
                toast.success(res.data.message)
            }
        })
    }


    return (
        <>
            <div className='container mt-3'>
                <div className='d-flex justify-content-between'>
                    <h3> Admin Dashbaord</h3>

                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add product
                    </button>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Create a new product</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="">
                                        <lable>Product Name</lable>
                                        <input onChange={(e) => setProductName(e.target.value)} type="text" className='form-control' placeholder='Enter Product Name' />

                                        <lable className='mt-2'>Product Price</lable>
                                        <input onChange={(e) => setProductPrice(e.target.value)} type="number" className='form-control' placeholder='Enter Product Price' />

                                        <label className='mt-2'>choose category</label>
                                        <select onChange={(e) => setProductCategory(e.target.value)} className='form-control'>
                                            <option value="plants">Plants</option>
                                            <option value="electronics">Electronics</option>
                                            <option value="gadgets">Gadgets</option>
                                            <option value="furniture">Furniture</option>
                                            <option value="hardware">Hardware</option>

                                        </select>

                                        <label className='mt-2'>Enter Description</label>
                                        <textarea onChange={(e) => setProductDescription(e.target.value)} className='form-control'></textarea>

                                        <label className='mt-2'>Choose Product Image</label>
                                        <input onChange={handleImage} type='file' className='form-control' />

                                        {/* Preview Image */}

                                        {
                                            previewImage && <img src={previewImage} alt='preview image' className='img-fluid rounded mt-2' />
                                        }
                                    </form>


                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button onClick={handleSubmit} type="button" class="btn btn-primary">Create</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <table className='table mt-2'>
                    <thead className='table-dark'>
                        <tr>
                            <th>Product Image</th>
                            <th>product Name</th>
                            <th>Product Price</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img width={'40px'} height={'40px'} src="https://th.bing.com/th?id=OIP.Vtxy0FjT_EfudI4cQk1kzAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2%22" alt="" />
                            </td>
                            <td>flower</td>
                            <td>200</td>
                            <td>Indoor</td>
                            <td> Beautiful flower</td>

                            <td>
                                <button className='btn btn-primary'>Edit</button>
                                <button className='btn btn-danger ms-2'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </>

    )
}

export default AdminDashboard