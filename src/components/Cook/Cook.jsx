import PropTypes from 'prop-types';

const Cook = ({wantToCook, handlePrepare}) => {
    console.log(wantToCook);
    const {recipe_id, recipe_name, preparing_time, calories} = wantToCook; 
    return (
        <tr className="bg-gray-50">
            <td>{recipe_id}</td>
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
}

export default Cook;