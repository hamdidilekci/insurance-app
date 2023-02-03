import { useState } from 'react'

import axios from "axios";

import FormInput from './FormInput.js'

const initialInputValues = [
    [
        {
            id: 0,
            name: "firstName",
            label: "İsim",
            type: "text"
        },
        {
            id: 1,
            name: "lastName",
            label: "Soyisim",
            type: "text"
        },
    ],
    [
        {
            id: 2,
            name: "birthDate",
            label: "Doğum tarihi",
            type: "text"
        },
        {
            id: 3,
            name: "idNumber",
            label: "T.C. Kimlik no",
            type: "text"
        },
    ],
    [
        {
            id: 4,
            name: "phoneNumber",
            label: "Telefon numarası",
            type: "tel"
        }
    ],
    [
        {
            id: 5,
            name: "address",
            label: "Adres",
            type: "text-area"
        },
    ],
    [
        {
            id: 6,
            name: "plate",
            label: "Plaka",
            type: "text"
        },
        {
            id: 7,
            name: "documentNumber",
            label: "Ruhsat belge no",
            type: "text"
        }
    ]
]

export default function MyForm() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        birthDate: '',
        idNumber: '',
        phoneNumber: '',
        address: '',
        plate: '',
        documentNumber: '',
    });

    const handleClick = (e) => {
        e.preventDefault();
        console.log('button clicked');
        console.log(formData);
    }

    const handleInputChange = (e) => {
        const value= e.target.value;
        const name = e.target.getAttribute('name');
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    return (
        <div className="form-container">
            <div className="card p-5">
                <div className="card-body">
                    <form >
                        {
                            initialInputValues.map((row) => {
                                return (
                                    <div key={row[0].id} className="row mb-4">
                                        {
                                            row.map(input => {
                                                return (
                                                    <div key={input.id} className="col">
                                                        <div className="form-floating mb-3">
                                                            <FormInput key={input.id} onChange={handleInputChange} value={formData[input.name]} {...input} />
                                                        </div>
                                                    </div>

                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }

                    <div className="d-grid gap-2 col-9 mx-auto">
                        <button type="button" onClick={handleClick} className="btn btn-outline-primary">En uygun sigorta teklifini al</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}