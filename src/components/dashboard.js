import React, { useEffect, useState } from 'react'
import '../styles/dashboard.css'
import { FaBusinessTime } from 'react-icons/fa'

// import { CgMenuLeft } from 'react-icons/cg'
import { ReactComponent as BusinessLogo } from '../images/business-acc.svg'
import { ReactComponent as VariableLogo } from '../images/variable.svg'
import { ReactComponent as Contactperson } from '../images/contactperson.svg'
import { ReactComponent as Addnew } from '../images/addnew.svg'
import { ReactComponent as Edit } from '../images/edit.svg'
import arr from './sampleArray'
import { apiHandler } from '../model/apiHandler'



function Dashboard() {
    const [variable, setVariable] = useState(false)

    const addVariable = () => {
        setVariable(true)
    }
    const closeVar = () => {
        setVariable(false)
    }

    const [varkey, setVarkey] = useState('')
    const [value, setValue] = useState('')

    const [controlarr, setControlarr] = useState(arr)

    const [contactArr, setContactArr] = useState([]);

    const [businessAccount, setBusinessAccount] = useState({
        "name": "",
        "type": "",
        "contactNo": "",
        "emailId": ""
    })

    const variableFunc = (e) => {
        e.preventDefault()
        setVarkey(e.target.value);

    }
    const valueFunc = (e) => {
        e.preventDefault()
        setValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setControlarr({ ...controlarr, "variableValues": [...controlarr["variableValues"], { key: varkey, val: value }] })
        setVariable(false)
    }

    const finalSubmitHandler = (e) => {
        e.preventDefault()
        setControlarr(arr);
        apiHandler(controlarr)
    }




    // Contact Person
    const [adcontact, setAdcontact] = useState(false)

    const [title, setTitle] = useState('')
    const [name, setName] = useState('')
    const [ph, setPh] = useState('')
    const [email, setEmail] = useState('')
    const [deg, setDeg] = useState('')
    const [tel, setTel] = useState('')


    const opencontact = () => {
        setAdcontact(true)
        console.log('opened');
    }
    const constcancelContact = () => {
        setAdcontact(false)
    }

    const submitContact = (e) => {
        e.preventDefault()
        setAdcontact(false)
        setContactArr([...contactArr, { title: title, name: name, contactNo: ph, email: email, designation: deg, tgUsername: tel }])
        // setControlarr({ ...controlarr, "contacts": [...controlarr["contacts"], { title: title, name: name, contactNo: ph, email: email, designation: deg, tgUsername: tel }] })
    }

    useEffect(() => {
        setControlarr({ ...controlarr, "contacts": [...contactArr] })
    }, [contactArr])

    useEffect(() => {
        setControlarr({ ...controlarr, "account": { ...businessAccount } })
    }, [businessAccount])

    const [openmodal, setOpenmodal] = useState(false)

    const editDetails = (index) => {
        console.log('edit');
        setOpenmodal(true)
        setActiveedit(index)
    }
    const [activeedit, setActiveedit] = useState(0)
    const saveEdited = (index) => {
        console.log('change saved');
        contactArr.map((x,key) => {
            setActiveedit(index)
        })
    }
    

    return (
        <>
           
            {/* Edit Modal */}

            {

                openmodal && (
                    <div className="modal-container">
                        <div className="modal-content">
                            <form>
                                <input
                                    type="text"
                                    placeholder='Title'
                                    value={contactArr[activeedit].title}
                                    onChange={(e) => {
                                        e.preventDefault()
                                        setTitle(e.target.value)
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder='Name'
                                    value={contactArr[activeedit].name}
                                    onChange={(e) => {
                                        e.preventDefault()
                                        setName(e.target.value)
                                    }}
                                />
                                <input
                                    type="number"
                                    placeholder='Phone Number'
                                    value={contactArr[activeedit].ph}
                                    onChange={(e) => {
                                        e.preventDefault()
                                        setPh(e.target.value)
                                    }}
                                />
                                <input
                                    type="email"
                                    placeholder='Email'
                                    value={contactArr[activeedit].email}
                                    onChange={(e) => {
                                        e.preventDefault()
                                        setEmail(e.target.value)
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder='Designation'
                                    value={contactArr[activeedit].deg}
                                    onChange={(e) => {
                                        e.preventDefault()
                                        setDeg(e.target.value)
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder='Telegram Username'
                                    value={contactArr[activeedit].tel}
                                    onChange={(e) => {
                                        e.preventDefault()
                                        setTel(e.target.value)
                                    }}
                                />
                                <div className="edit-btn">
                                    <button
                                        onClick={() => {
                                            setOpenmodal(false)
                                            console.log('Closed');
                                        }}
                                    >CANCEL</button>
                                    <button onSubmit={saveEdited}>EDIT</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }

            <div className="dashboard-container">
                {/* Navbar */}
                {/* <CgMenuLeft /> */}
                <nav className='navbar'>
                    <div className="profile">
                        CA
                    </div>
                </nav>
                {/* Navbar */}
                {/* Add customer */}
                <div className="add-customer">
                    <div className='add-customer-name'>Add Customer</div>
                    <button className="add-customer-btn" onClick={finalSubmitHandler}>
                        ADD CUSTOMER
                    </button>
                </div>
                {/* Add Customer */}

                <div className="dashboard-content">
                    <div className="business-account-detail">
                        <div className="business-account-detail-header">
                            <BusinessLogo />
                            <h2 style={{ textAlign: "left" }}>BUSINESS ACCOUNT DETAILS</h2>
                        </div>
                        <form className='business-account-form'>
                            <input type="text" className='business-account-input' placeholder='Account Name' value={businessAccount.name} onChange={(e) => setBusinessAccount({ ...businessAccount, name: e.target.value })} />
                            <input type="text" className='business-account-input' placeholder='Account Type' value={businessAccount.type} onChange={(e) => setBusinessAccount({ ...businessAccount, type: e.target.value })} />
                            <input type="text" className='business-account-input' placeholder='Contact Number' value={businessAccount.contactNo} onChange={(e) => setBusinessAccount({ ...businessAccount, contactNo: e.target.value })} />
                            <input type="text" className='business-account-input' placeholder='Email ID' value={businessAccount.emailId} onChange={(e) => setBusinessAccount({ ...businessAccount, emailId: e.target.value })} />
                        </form>
                    </div>
                    <div className="lower">
                        <div className="variable">
                            <div className="var-content">
                                <div className="variable-header">
                                    <div style={{ alignSelf: "center" }} className='variable-header-title'>
                                        <VariableLogo />
                                        <span>VARIABLES</span>
                                    </div>
                                    <button className='add-variable-btn' onClick={addVariable}>ADD VARIABLE</button>
                                </div>
                                {
                                    variable && (
                                        <div className="variable-form">
                                            <form onSubmit={variableFunc}>
                                                <input
                                                    type="text"
                                                    placeholder='variable key'
                                                    value={varkey}
                                                    onChange={variableFunc}
                                                />
                                                <input
                                                    type="text"
                                                    placeholder='value'
                                                    value={value}
                                                    onChange={valueFunc}
                                                />
                                                <br />
                                                <button onClick={closeVar}>Cancel</button>
                                                <button onClick={onSubmit}>submit</button>
                                            </form>
                                        </div>
                                    )
                                }
                                <div className="set-var-res">
                                    <div>
                                        {
                                            controlarr["variableValues"].map((x, key) => {
                                                return <>
                                                    <div className='key-val' key={key}>
                                                        <div className="key">{x.key}</div>
                                                        <div className="value">{x.val}</div>
                                                    </div>
                                                </>
                                            })
                                        }
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="contact-person">
                            <div className="card-con">
                                <div className="variable-header">
                                    <div className='variable-header-title'>
                                        <Contactperson />
                                        CONTACT PERSON
                                    </div>
                                    <button className='add-new-contact' onClick={opencontact}>
                                        <div className="add-new-contact-content">
                                            <Addnew />
                                            ADD NEW
                                        </div>
                                    </button>
                                </div>
                                <div className="contact-card">
                                    {
                                        adcontact && (
                                            <div className="contact-form">
                                                <form>
                                                    <input
                                                        type="text"
                                                        placeholder='Title'
                                                        value={title}
                                                        onChange={(e) => {
                                                            e.preventDefault()
                                                            setTitle(e.target.value)
                                                        }}
                                                    />
                                                    <input
                                                        type="text"
                                                        placeholder='Name'
                                                        value={name}
                                                        onChange={(e) => {
                                                            e.preventDefault()
                                                            setName(e.target.value)
                                                        }}
                                                    />
                                                    <input
                                                        type="number"
                                                        placeholder='Phone Number'
                                                        value={ph}
                                                        onChange={(e) => {
                                                            e.preventDefault()
                                                            setPh(e.target.value)
                                                        }}
                                                    />
                                                    <input
                                                        type="email"
                                                        placeholder='Email'
                                                        value={email}
                                                        onChange={(e) => {
                                                            e.preventDefault()
                                                            setEmail(e.target.value)
                                                        }}
                                                    />
                                                    <input
                                                        type="text"
                                                        placeholder='Designation'
                                                        value={deg}
                                                        onChange={(e) => {
                                                            e.preventDefault()
                                                            setDeg(e.target.value)
                                                        }}
                                                    />
                                                    <input
                                                        type="text"
                                                        placeholder='Telegram Username'
                                                        value={tel}
                                                        onChange={(e) => {
                                                            e.preventDefault()
                                                            setTel(e.target.value)
                                                        }}
                                                    />
                                                    <button onClick={constcancelContact}>Cancel</button>
                                                    <button onClick={submitContact}>Send</button>
                                                </form>
                                            </div>
                                        )
                                    }
                                    {

                                        // controlarr["contacts"].map((x) => {
                                        contactArr.map((x, key) => {

                                            return <>

                                                <div className='con-card' key={arr.account.contactNo}>

                                                    <table>
                                                        <tr>
                                                            <td>

                                                            </td>
                                                            <td className='edit-icon'>
                                                                <Edit onClick={() => editDetails(key)} />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Title</td>
                                                            <td>{x.title}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td>{x.name}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Phone Number</td>
                                                            <td>{x.contactNo}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Email</td>
                                                            <td>{x.email}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Designation</td>
                                                            <td>{x.designation}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Telegram Username</td>
                                                            <td>{x.tgUsername}</td>
                                                        </tr>
                                                    </table>

                                                </div>
                                            </>
                                        })
                                    }

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}

export default Dashboard