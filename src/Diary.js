
import React from 'react';
import DummyItems from './DummyItems';

const Diary = () => {
    return (
        <div>
            <h2>Diary Page</h2>
            {DummyItems.map(item => (
                <DiaryItem key={item.id} title={item.title} description={item.description} imageUrl={item.imageUrl} />
            ))}
        </div>
    );
};

const DiaryItem = ({ title, description, imageUrl }) => (
    <div className="diary-item">
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

export default Diary;
