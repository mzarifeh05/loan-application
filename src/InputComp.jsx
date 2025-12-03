

export default function InputComp({title, value, handleChange}) {
    return (
        <>
            <label>{title}</label>
            <input
                value={value}
                type="text"
                onChange={(e) => handleChange(e.target.value)}
            />
        </>
    )
}