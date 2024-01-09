const Backlog = ({ ...props }) => {
  console.log(props);
  return (
    <div className="task addTask">
      <input className="task" type="text" onKeyDown={props.onKeyDown} value={props.value} onChange={props.onChange} />
    </div>
  );
};

export default Backlog;
