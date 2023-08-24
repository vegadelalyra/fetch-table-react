import Row from "./Row"

const Table = ({ items }) => {
    return (
        <div className="table-container">
            <table>
                <tbody>
                    {items[0] && <Row key='0' item={items[0]} indexor='true' />}
                    {items.map(item => (
                        <Row key={item.id} item={item} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table