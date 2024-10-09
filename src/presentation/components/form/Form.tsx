import './Form.css';

export const ItemForm = () => {
    return (
        <form className="item-form">
            <label>Nome</label>
            <input type="text" placeholder="Digite o nome do item" />

            <label>Preço no formarto "(XX,XX)"</label>
            <input type="text" placeholder="Digite o preço" />

            <label>Descrição</label>
            <textarea placeholder="Digite a descrição do item"></textarea>

            <label>Imagem</label>
            <input type="url" placeholder="URL da imagem" />

            <div className="category-section">
                <label>Categoria</label>
                <select multiple className="category-select">
                    <option value="lanche">Lanche</option>
                    <option value="sobremesa">Sobremesa</option>
                    <option value="bebida">Bebida</option>
                </select>
            </div>

            <button type="submit">Cadastrar Item</button>
        </form>
    );
};
