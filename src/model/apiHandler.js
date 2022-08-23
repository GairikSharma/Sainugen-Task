import axios from 'axios'

const apiURL = "https://internship.leadtorev.com/clients/customers/add"


export const apiHandler = async (data) => {
    const varArray = [...data["variableValues"]];
    data["variableValues"] = {};
    varArray.forEach(varPair => {
        const key = varPair.key
        const value = varPair.val
        data["variableValues"] = {...data["variableValues"], [key]: value}
    })
    const response = await axios.post(apiURL, data);
    console.log(response);
}