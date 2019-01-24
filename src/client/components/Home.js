import React from 'react'

const Home = () => {
    return (
        <div>
            <div>Home Component</div>
            <button onCLick={() => console.log("Hi there")}>
                Press Me
            </button>
        </div>
    );
};

export default Home;
