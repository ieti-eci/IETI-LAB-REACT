export const TaskItem = ({isChecked,taskName}) => {
    return (
        <li>
            <input checked={isChecked} type="checkbox"/>
            <span>{taskName}</span>
        </li>
    );
};