import Style from "./style.module.scss";

export const ProductCard = ({ product }) => {
    return(
        <li className={Style.container}>
            <section className="imgContainer">
            <img src={product.img} alt={product.name} />
            </section>
            <div className="productInfo">
                <h3>{product.name}</h3>
                <span>{product.category}</span>
                <span>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button className="buttonMedium">Adicionar</button>
            </div>
        </li>
    )
}