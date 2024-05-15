import React from "react";

const Header = ({title}) => (
    <header className={'mt-6'}>
        <div className="container">
            <h1 className="text-4xl sm:text-6xl uppercase font-black tracking-tight">{title}</h1>
        </div>
    </header>
)

export default  Header;