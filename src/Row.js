import Cell from './Cell'

const Row = ({ item, indexor }) => {
    const flattenedObject = indexor 
    ? Object.keys(flatObject(item))
    : flatObject(item)

    return (
        <tr>
            {Object.entries(flattenedObject).map(([key, value]) => {
            return (
                <Cell key={key} cellData={JSON.stringify(value)} />
            )  
            })}
        </tr>
    )
}

function flatObject(nestedObject, parentKey = '') {
    let flattenedObject = {}

    Object.entries(nestedObject).map(([key, value]) => {
        const newKey = parentKey ? parentKey + '_' + key : key 
        if (typeof value != 'object') return flattenedObject[newKey] = value

        const objectValueFlattened = flatObject(value, newKey)
        return flattenedObject = { ...flattenedObject, ...objectValueFlattened}
    })

    return flattenedObject
}

export default Row