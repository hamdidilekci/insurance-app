const postRequest = async(params) => {
    const baseUrl = 'http://localhost:3001';
    const url = baseUrl + params.path

    const response = await fetch(url, {
        method: params.method,
        headers: params.headers,
        body: params.data ? JSON.stringify(params.data) : null
    });

    if (!response.ok) {
        const { name, message } = await response.json();
        throw new Error([name, message].filter(x => x).join(': '));
    }

    const data = await response.json();

    return data;
}

export default postRequest;