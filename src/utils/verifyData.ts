export default function verifyData(...fields: (number | string)[]):boolean{
    return fields.every(field=>field)
}