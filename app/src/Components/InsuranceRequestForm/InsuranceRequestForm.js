import FormInput from './FormInput.js'

const initialInputValues = [
    [
        {
            id: 0,
            label: "Adınız",
            type: "text"
        },
        {
            id: 1,
            label: "Soyadınız",
            type: "text"
        },
    ],
    [
        {
            id: 2,
            label: "Doğum tarihi",
            type: "text"
        },
        {
            id: 3,
            label: "T.C. Kimlik no",
            type: "text"
        },
    ],
    [
        {
            id: 4,
            label: "Telefon numarası",
            type: "tel"
        }
    ],
    [
        {
            id: 5,
            label: "Adres",
            type: "text-area"
        },
    ],
    [
        {
            id: 6,
            label: "Plaka",
            type: "text"
        },
        {
            id: 7,
            label: "Ruhsat belge no",
            type: "text"
        }
    ]
]

const formInputs = initialInputValues.map((row, index) => {
    return (
        <div key={row[0].id} className="row mb-4">
            {
                row.map(input => {
                    return (
                        <div key={input.id} className="col">
                            <div className="form-floating mb-3">
                                <FormInput key={input.id} {...input} />
                            </div>
                        </div>

                    )
                })
            }
        </div>
    )
})

export default function MyForm() {

    return (
        <div className="form-container">
            <div className="card p-5">
                <div className="card-body">
                    <form >
                        {
                            formInputs
                        }

                    <div class="d-grid gap-2 col-9 mx-auto">
                        <button type="submit" className="btn btn-outline-primary">En uygun sigorta teklifini al</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}