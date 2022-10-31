import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
    return (
        <div className="container-detail">
            <img src={item.img} alt="" />
            <div>
                <h2>{item.title}</h2>
                <ItemCount stock={10} initial={1} />
            </div>
        </div>
    );
};

export default ItemDetail;