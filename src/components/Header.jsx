function Header(props) {
    console.log(props)
    // const { about } = props;
    return (
        <div>
            <h1>Hello, {props.secondName1 }</h1>
        </div>
    );
}

export default Header;