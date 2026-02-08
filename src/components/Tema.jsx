const BotaoTema = ({temaEscuro, setTemaEscuro}) => {
    return (
        <div>
            <button onClick={() => setTemaEscuro(!temaEscuro)}>
            {temaEscuro ? "Tema Claro" : "Tema Escuro"}
            </button>
        </div>
    );
}

export default BotaoTema;