// component crée pour tester useContext

import { createContext, useContext } from "react"

function Login () {

    const connection = {
        connect : 'Vous êtes connecté',
        disconnect : 'Vous êtes déconnecté'
    }

    const ConnectContext = createContext(connection)

    return (
        <ConnectContext.Provider value={connection.connect}>
            <h4>Statut</h4>
            <ConnectionStatut/>
        </ConnectContext.Provider>
    )

    function ConnectionStatut() {
        const statut = useContext(ConnectContext);

        return <p>{statut}</p>
    }
}


export default Login;