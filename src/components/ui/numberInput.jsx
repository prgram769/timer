function NumberInput({typeOfCounter}) {
  return(
    <input
    type="number"
    placeholder={typeOfCounter}
    className="bg-amber-200 text-black text-center"/>
  )
}

export { NumberInput }
