import PropTypes from 'prop-types';

const Cooking = ({ currentlyCooking, index }) => {
    console.log(currentlyCooking);
    const { recipe_name, preparing_time, calories } = currentlyCooking;
    return (
        <tr className="bg-gray-50 font-light">
            <td>{index + 1}</td>
            <td>{recipe_name}</td>
            <td>{preparing_time} minutes</td>
            <td>{calories} calories</td>
        </tr>
    );
};

Cooking.propTypes = {
    currentlyCooking: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
}
export default Cooking;