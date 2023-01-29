import React, { useState } from 'react';
import './TagsInput.css'

const TagsInput = () => {
    const [tags, setTags] = useState([])

    const handleKeyDown=(e)=>{
        if(e.key !== 'Enter') return
        const value = e.target.value
        console.log(value)
        if(!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''
    }

    const removeTag =(index)=>{
        setTags(tags.filter((el, i) => i !== index))
    }
    return (
       <div className='container'>
            <div className="tags-input-container">
            { tags.map((tag, index) => (
                <div className="tag-item" key={index}>
                    <span className="text">{tag}</span>
                    <span className="close" onClick={() => removeTag(index)}>&times;</span>
                </div>
            )) }
            <textarea onKeyDown={handleKeyDown} type="text" className="tags-input" placeholder="Type somthing" />
        </div>
       </div>
    );
};

export default TagsInput;