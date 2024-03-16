import PropTypes from 'prop-types';

const Cooking = ({ currentlyCooking }) => {
    console.log(currentlyCooking);
    const { recipe_id, recipe_name, preparing_time, calories } = currentlyCooking;
    return (
        <tr className="bg-gray-50 font-light">
            <td>{recipe_id}</td>
            <td>{recipe_name}</td>
            <td>{preparing_time} minutes</td>
            <td>{calories} calories</td>
        </tr>
    );
};

Cooking.propTypes = {
    currentlyCooking: PropTypes.object.isRequired,
}
export default Cooking;