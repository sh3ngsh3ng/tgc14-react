function Foobar(){
    return <p>Foobar</p>
}

function LuckyNumber() {
    return <p>{Math.random() * 1000 + 1}</p>
}

export {Foobar, LuckyNumber};