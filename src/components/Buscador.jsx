import styles from './BuscadorStyle.css';

const Buscador = () => {
    return <div className="px-5 mt-5 buscador">
        <h2>Buscar</h2>
                <label className="form-label" htmlFor="inputTitle">Título</label>
                <input className="form-control" type="text" id="inputTitle"/>
    </div>;
}

export default Buscador;