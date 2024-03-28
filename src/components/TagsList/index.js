const TagsList = ({tag, active, onClick}) => {
  const handleClick = () => {
    onClick(tag.optionId)
  }

  return (
    <li>
      <button value={tag.optionId} onClick={handleClick} selected={active}>
        {tag.displayText}
      </button>
    </li>
  )
}

export default TagsList
