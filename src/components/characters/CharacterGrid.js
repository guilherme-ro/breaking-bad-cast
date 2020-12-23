import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({ items, isLoading }) => {
    return isLoading ? ( <Spinner /> ) : (
    <section className="cards" style={{ paddingBottom: '60px' }}>
        {items.map(item => (
            <CharacterItem key={item.char_id} item={item}></CharacterItem>
        ))}
    </section> 
    )
}

export default CharacterGrid
