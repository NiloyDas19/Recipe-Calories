import PropTypes from 'prop-types';

const Cook = ({wantToCook, index, handlePrepare}) => {
    console.log(wantToCook);
    const {recipe_id, recipe_name, preparing_time, calories} = wantToCook; 
    return (
        <tr className="bg-gray-50">
            <td>{index + 1}</td>
            <td>{recipe_name}</td>
            <td>{preparing_time} minutes</td>
            <td>{calories} calories</td>
            <td><button className="btn bg-green-500 rounded-full px-6" onClick={() => handlePrepare(recipe_id)}>Preparing</button></td>
        </tr>
    );
};

Cook.propTypes = {
    wantToCook : PropTypes.object.isRequired,
    handlePrepare : PropTypes.func.isRequired,
    index : PropTypes.number.isRequired,
}

export default Cook;