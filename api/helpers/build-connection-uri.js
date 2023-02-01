const buildConnectionURI = ({ protocol, host, port, user, pass, name, options }) => {
    let connectionString = '';

    connectionString += protocol ?? 'mongodb';
    connectionString += '://';

    if (user && pass) {
        connectionString += `${user}:${pass}@`;
    }

    connectionString += host;

    if (port) {
        connectionString += `:${port}`;
    }

    if (name) {
        connectionString += `/${name}`;
    }

    if (options) {
        connectionString += '?';
        connectionString += Object.keys(options)
            .map(k => [k, options[k]].join('='))
            .join('&');
    }

    return connectionString;
};

export default buildConnectionURI;
