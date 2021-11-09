export function CustomButton(props) {
        return (
            <button onClick={this.props.isClicked}>
                {props.children}
            </button>
        )
}